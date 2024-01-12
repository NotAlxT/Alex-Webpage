import React, { useEffect, useState } from 'react'
import './todoList.css'

export default function TodoList() {

  const [newItem, setNewItem] = useState()
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue === null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })

    setNewItem('')
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id ===id){
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div className='codeContainer'>
          <p className='code'> <a href="https://github.com/NotAlxT/MiniProjects/tree/main/miniprojects/src/components/projects/todoList" target="_blank" rel='noreferrer'>Code</a></p>
        </div>

        <div className='taskContainer'>

          <div className="taskbox">
            <div className="taskInput">
              <label htmlFor="item">New Task</label>
              <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} id='item' />
              <button className='addBtn' >
                Add Task
              </button>
            </div>

            <div className='blkLine '>

            </div>

            <div className='taskList'>
              <h1>TASK</h1>
              <div className='taskListItems'>
                <ul>
                  {todos.length === 0 && 'No Task'}
                {todos.map(todo => {
                  return (
                    
                      <li key={todo.id}>
                        <label htmlFor="">
                          <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                        {todo.title}
                        </label>
                        <button className='deleteBtn' onClick={() => deleteTodo(todo.id)}>Delete</button>
                      </li>
                  )
                }
                )}
                </ul>
              </div>
            </div>

          </div>

        </div>

      </form>

    </div>
  )
}
