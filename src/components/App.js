import React, { useState } from "react";


 

const App = () => {

  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([]);

  const [taskCount, setTaskCount] = useState(0);


 

  const findIndexOfItemInList = (id) => {

    const editItem = todos.find((item) => item.id === id);

    return [todos.indexOf(editItem), editItem];

  };


 

  const handleValueChange = (e, updateId) => {

    const [index, editItem] = findIndexOfItemInList(updateId);

    todos.splice(index, 1, {

      ...editItem,

      value: e.target.value,

    });

    setTodos([...todos]);

  };


 

  const editTodo = (id, editValue) => {

    const [index, editItem] = findIndexOfItemInList(id);

    todos.splice(index, 1, {

      ...editItem,

      editing: editValue,

    });

    setTodos([...todos]);

  };


 

  const addTodo = (e) => {

    e.preventDefault();

    if (task.trim() !== "") {

      setTaskCount((prevValue) => prevValue + 1);

      setTodos((prevValue) => [

        ...prevValue,

        { value: task, id: taskCount, editing: false },

      ]);

      setTask("");

    }

  };


 

  const deleteTodo = (id) => {

    const [index] = findIndexOfItemInList(id);

    todos.splice(index, 1);

    setTodos([...todos]);

  };


 

  return (

    <div>

      <form>

        <textarea

          id="task"

          value={task}

          onChange={(e) => setTask(e.target.value)}

        ></textarea>

        <button id="btn" type="submit" onClick={(e) => addTodo(e)}>

          Add task

        </button>

      </form>

      <ul>

        {todos.map((item) => (

          <li className="list" key={item.id}>

            {item.value}

            {!item.editing && (

              <div>

                <button

                  onClick={() => editTodo(item.id, true)}

                  className="edit"

                >

                  Edit

                </button>

                <button onClick={() => deleteTodo(item.id)} className="delete">

                  Delete

                </button>

              </div>

            )}

            {item.editing && (

              <div>

                <textarea

                  onChange={(e) => handleValueChange(e, item.id)}

                  value={item.value}

                  className="editTask"

                ></textarea>

                <button

                  disabled={item.value.trim() === ""}

                  className="saveTask"

                  onClick={() => editTodo(item.id, false)}

                >

                  Save task

                </button>

              </div>

            )}

          </li>

        ))}

      </ul>

    </div>

  );

};


 

export default App;
