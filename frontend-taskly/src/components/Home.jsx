import { useEffect, useState } from "react"
import AddTodo from "./AddTodo"
import Todos from "./Todos"
import { addtodoToDB } from "../services/addTodo"
import { delTodoToDB } from "../services/delTodo"
import { getAllTodoFromDB } from "../services/getTodo"

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        getTodo();
    }, [])
    let data;
    const getTodo = () => {
        getAllTodoFromDB().then((e) => {
            if (e['success']) {
                setTodos([...todos, ...e['data']]);
                
            } else alert("Can't fetch data from server");
        }
        )
    }
    const addTodo = (e) => {
        let _id;
        if (!e.title || !e.desc) {
            alert("Title or description can not be empty")
            return;
        }

        data = {
            title: e.title,
            desc: e.desc
        };

        addtodoToDB(data).then((e) => {
            if (e['success']) {
                data = { ...data, _id: e['_id'] }
                setTodos([...todos, data])
            }
            else
                alert("Can't add the todo for now")

        });
    }

    const delTodo = ({ _id }) => {
        const data = { "id": _id }
        delTodoToDB(data).then((e) => {
            if (e['success']) {
                setTodos(todos.filter((e) => e._id !== _id))
            } else {
                alert("Can't delete the todo")
            }
        })

    }
    return (
        <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} delTodo={delTodo} />
        </>
    )
}

export default Home