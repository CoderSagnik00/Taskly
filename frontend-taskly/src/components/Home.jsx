import { useState } from "react"
import AddTodo from "./AddTodo"
import Todos from "./Todos"

function Home() {
    const [todos, setTodos] = useState([
        {
            _id: 1,
            title: "Learn Nodejs",
            desc: "Learn React development"
        },
        {
            _id: 2,
            title: "Learn Express",
            desc: "Learn React development"
        },
        {
            _id: 3,
            title: "Learn React",
            desc: "Learn React development"
        },
        {
            _id: 4,
            title: "Learn MongoDB",
            desc: "Learn React development"
        }
    ])

    const addTodo = (e) => {

        const data = {
            _id: todos[todos.length - 1]._id + 1,
            title: e.title,
            desc: e.desc
        };
        
        setTodos([...todos, data])
    }
    return (
        <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} />
        </>
    )
}

export default Home