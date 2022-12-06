import React, { useEffect, useState } from 'react'
import db from './firebase-1';
import firebase from 'firebase/compat/app';
import Todo from './Todo';
import { Container } from '@material-ui/core';
import { textAlign } from '@mui/system';

export function AppFrontPage (){
    const [todos,setTodos]=useState([]);
    const [input,setInput]=useState('');
    console.log('🔫',input)

    //listening to data from database
    useEffect(()=>{
        //run on load
        db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
            // handling snapshot from firebase
            setTodos(snapshot.docs.map(doc=>({ id:doc.id, todo: doc.data().todo})))
        })
        },[])

    const addTodo=(event)=>{
        //this will run when we press the button
        event.preventDefault();

        //adding time stamp and iput to firebase
        db.collection('todos').add({
            todo :input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        console.log("button clicked");
        setTodos([...todos,input]);
        setInput('')
    }

  return (
<>
    <div>

        <div style={{textAlign: "center" }}>
        <h1>Namaste Duniya 🌏</h1>
        <form>
            <div  class="input-group flex-nowrap" style={{width: "400px",margin: '0 auto' ,padding:"10px"}} >
                <span class="input-group-text" id="addon-wrapping">👉</span>

                {/* pusing data into firebase */}
                <input value={input} onChange={event => setInput(event.target.value)} type="text" class="form-control" placeholder="Add Comment"/>
                <button 
                    disabled={!input} type='submit' onClick={addTodo} 
                class="btn btn-primary">Add Comment</button>
                </div>
        </form>

        {/* display items from firebase */}
        <container>
        <ul  class="list-group list-group-flush" >
           <div style={{display: 'inline-block', textAlign:'left',margin:'60px'}}>
            {todos.map(todo => (
                <Todo todo={todo} />
                // <li>{todo}</li>
            ))}</div>
            
        </ul>
        </container>
        </div>
    </div>
    </>
  )
}
