import { useState } from 'react'
import '../css/AddTodo.css'
import PropTypes from 'prop-types';

function AddTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = () => {
        setTitle("");
        setDesc("");

        addTodo({ title, desc });
    }
    return (
        <div className='flex flex-col items-center justify-center m-9'>
            <div className='space-y-3'>
                <h1 className='font-bold text-2xl ml-2'>Add Todo</h1>
                <div className='flex flex-col items-center justify-center space-y-2 '>
                    <input type="text" className='input-add' placeholder='Enter title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <input type="text" className='input-add' placeholder='Enter Description' value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                </div>
                <button className='bg-green-300 px-2 py-1 rounded-md' onClick={submit}>Add Todo</button>
            </div>
        </div>
    )
}


AddTodo.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number,
            title: PropTypes.string,
            desc: PropTypes.string
        })
    ),
    addTodo: PropTypes.func
}


export default AddTodo