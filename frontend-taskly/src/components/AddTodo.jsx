import { useState } from 'react'
import '../css/AddTodo.css'

function AddTodo() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = () =>{
        console.log(title);
        console.log(desc);
    }
    return (
        <div className='flex flex-col items-center justify-center m-9'>
            <div className='space-y-3'>
                <h1 className='font-bold text-lg ml-2'>Add Todo</h1>
                <div className='flex flex-col items-center justify-center space-y-2 '>
                    <input type="text" className='input-add' placeholder='Enter title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <input type="text" className='input-add' placeholder='Enter Description' value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                </div>
                <button className='bg-green-300 px-2 py-1 rounded-md' onClick={submit}>Add Todo</button>
            </div>
        </div>
    )
}

export default AddTodo