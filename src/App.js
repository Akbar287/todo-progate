import Layout from "./components/Layout";
import todoAtom from "./store/todoAtom";
import {useRecoilState } from "recoil";
import CardTodo from "./components/CardTodo";
import React from "react";

function App() {
  const [todoData, setTodoData] = useRecoilState(todoAtom)
  const [form, setForm] = React.useState({judul: "", id: Math.round(Math.random() * 10000), isComplete: false})
  React.useEffect(() => {
    const temp  = localStorage.getItem("todo")
    if(temp) {
      setTodoData(JSON.parse(temp))
    }
  }, [])
  const handleCreateTodo = () => {
    if(form.judul !== "") {
      setTodoData([...todoData, form])
      localStorage.setItem("todo", JSON.stringify([...todoData, form]))
    }
  }
  return (
    <Layout>
      <div className="my-5">
          {
            todoData != null ? todoData.map((todo, index) => (
              <CardTodo key={todo.id} todo={todo} index={index} />
            )) : <></>
          }
      </div>
      <div className="flex justify-center items-center my-5">
        <input type="text" className="bg-white border-gray-500 border active:shadow-sm px-4 py-2 w-1/4" placeholder="Judul..." onChange={(e) => setForm({ ...form, judul: e.target.value})} />
        <button className="bg-blue-500 text-white mx-2 px-8 py-2" onClick={() => handleCreateTodo()}>Todo</button>
      </div>
    </Layout>
  );
}

export default App;
