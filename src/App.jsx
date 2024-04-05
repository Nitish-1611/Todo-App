import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleOnChange = (itemName, itemDueDate) => {
    setTodoItems((currVal) => [
      ...currVal,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleOnDeleteButon = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <AppName />
      <div className="main-div">
        <AddTodo onNewItem={handleOnChange} />
        {todoItems.length == 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDelete={handleOnDeleteButon} />
      </div>
    </>
  );
}

export default App;
