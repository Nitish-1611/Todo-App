import { useRef } from "react";
import { MdAddBox } from "react-icons/md";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form className="row my-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={styles.addTodoInput}
            ref={todoNameElement}
            placeholder="Enter TODO here"
            
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles.addTodoInput}
            ref={dueDateElement}
            
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`btn btn-success my-button`}
            
          >
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;