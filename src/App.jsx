import "./App.css";
import { useState } from "react";
import { Container, Title, Form, Task, EditForm } from "./components/index";
import { v4 as uuidv4 } from "uuid";
uuidv4();

function App() {
  const [todos, setTodos] = useState([]);
  const addTask = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), description: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const completedTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editForm = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, description: task, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <>
      <Container>
        <Title>Get Things Done!</Title>
        <Form addTask={addTask} />
        {todos.map((task) =>
          task.isEditing ? (
            <EditForm
              id={task.id}
              description={task.description}
              editTask={editTask}
            />
          ) : (
            <Task
              id={task.id}
              description={task.description}
              completed={task.completed}
              completedTask={completedTask}
              deleteTask={deleteTask}
              editTask={editForm}
            />
          )
        )}
      </Container>
    </>
  );
}

export default App;
