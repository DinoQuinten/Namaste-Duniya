import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase-1";

function Todo(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      

      <div style={{ padding: "50px", textAlign: "match-parent" }}>
        <li>
          {props.todo.todo}
          <br></br>
          <br></br>
          <button
            style={{ margin: "20px" }}
            type="button"
            class="btn btn-outline-danger"
            onClick={(event) => {
              console.log("msg deleted");
              db.collection("todos").doc(props.todo.id).delete();
            }}
          >
            Delete me 🚮
          </button>
          {/* <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalLong"
            onClick={(e) => {
              setOpen(true);
            }}

          >
            edit
          </button> */}
        </li>
      </div>
    </>
  );
}

export default Todo;
