import '../css/TodoItem.css'
import PropTypes from 'prop-types'
function TodoItem({ _id, title, desc, delTodo }) {
    const deleteBtnClicked = () =>{
        delTodo({_id});
    }
    return (
        <div className='space-y-2 border-y-2 border-gray-200 px-3 pb-2'>
            <div className='text-lg font-bold'>{title}</div>
            <div>{desc}</div>
            <button className='bg-red-500 px-2 py-1 rounded-md text-white' onClick={deleteBtnClicked}>Delete</button>
        </div>
    )
}

TodoItem.propTypes = {
    _id: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    delTodo: PropTypes.func
}


export default TodoItem

