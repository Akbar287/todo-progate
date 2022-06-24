import React from 'react'
import todoAtom from "../store/todoAtom";
import {useRecoilState } from "recoil";

function CardTodo(props) {
  const [todoList, setTodoList] = useRecoilState(todoAtom);
  
  const toggleItemCompletion = (id) => {
    const newList = replaceItemAtIndex(todoList, id, {
      ...props.todo,
      isComplete: !props.todo.isComplete,
    });
  
    setTodoList(newList);
    localStorage.setItem("todo", JSON.stringify(newList))
  };
  
  const deleteItem = (id) => {
    const newList = removeItemAtIndex(todoList, id);
    setTodoList(newList);
    localStorage.setItem("todo", JSON.stringify(newList))
  };
  
  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  
  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  
  return (
    <div className='shadow-lg bg-white border-gray-300 w-3/4 p-2 my-2' >
      <div className='flex justify-between items-center'>
        <h1 className={`${props.todo.isComplete ? "line-through" : ""} text-lg cursor-pointer`} onClick={() => toggleItemCompletion(props.index)}>{props.todo.judul}</h1>
        <div className='text-lg font-bold cursor-pointer' onClick={() => deleteItem(props.index)}>X</div>
      </div>
    </div>
  )
}

export default CardTodo