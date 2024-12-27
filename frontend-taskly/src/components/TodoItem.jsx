import '../css/TodoItem.css'
import PropTypes from 'prop-types'
function TodoItem({ title, desc }) {
    const deleteTodo = () =>{
        console.log("Deleted");
        
    }
    return (
        <div className='space-y-2'>
            <div className='text-lg font-bold'>{title}</div>
            <div>{desc}</div>
            <button className='bg-red-500 px-2 py-1 rounded-md text-white' onClick={deleteTodo}>Delete</button>
        </div>
    )
}

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}


export default TodoItem

