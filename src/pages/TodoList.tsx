// Q1: Todo List with CRUD Operations
// Build your solution here

import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [inputValue, setInputValue] = useState("");
  console.log("input vvalue ==>", inputValue);
  console.log("todo vvalue ==>", todos);
  console.log("todo length ==>", todos.length);
  const [editId, setEditId] = useState<number | null>(null);

  const handleAddClick = () => {
    if (editId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: inputValue } : todo,
        ),
      );
      setEditId(null);
      setEditId(null);
    } else {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      console.log("clicked");
    }
    setInputValue("");
  };

  const deleteTodo = (id: any) => {
    console.log("delete click", id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (id: number) => {
    console.log("edit clicked");
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setInputValue(todo.text);
      setEditId(id);
    }
  };
  return (
    <div className="todo-container">
      <div className="todo-input-row">
        <input
          className="todo-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button className="todo-add-btn" onClick={handleAddClick}>
          {editId ? "Save" : "Add"}
        </button>
      </div>

      {todos.length === 0 && (
        <p className="todo-empty">No todos yet. Add one above!</p>
      )}

      <ul className="todo-list">
        {todos.map((item) => (
          <li key={item.id} className={`todo-item ${item.completed ? "completed" : ""}`}>
            <span className="todo-text">{item.text}</span>
            <div className="todo-actions">
              <button className="todo-edit-btn" onClick={() => handleEdit(item.id)}>Edit</button>
              <button className="todo-delete-btn" onClick={() => deleteTodo(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
