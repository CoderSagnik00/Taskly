import { useState } from "react"
import AddTodo from "./AddTodo"
import Todos from "./Todos"

function Home() {
    const [todos, setTodos] = useState([])

    const addTodo = (e) => {
        let _id;
        if (todos.length === 0) {
             _id = 0;
        } else {
             _id = todos[todos.length - 1]._id + 1;
        }

        if(!e.title || !e.desc){
            alert("Title or description can not be empty")
            return;
        }

        const data = {
            _id: _id,
            title: e.title,
            desc: e.desc
        };

        setTodos([...todos, data])
    }

    const delTodo = ({ _id }) => {

        setTodos(todos.filter((e) => e._id !== _id))

    }
    return (
        <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} delTodo={delTodo} />
        </>
    )
}

export default Home