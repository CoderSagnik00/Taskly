import '../css/Todos.css'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

function Todos({ todos, delTodo }) {
  return (
    <div className='mx-10 space-y-1'>
      <h1 className='font-bold text-2xl'>Todos</h1>
      <div className='space-y-3'>
        {todos.length === 0 ? <h1 className='mt-5 text-center font-semibold'>No Todos to display</h1> :
          todos.map((e) => {
            return (
              <TodoItem key={e._id} _id={e._id} title={e.title} desc={e.desc} delTodo={delTodo} />
            );

          })
        }
      </div>
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      title: PropTypes.string,
      desc: PropTypes.string
    })
  ),
  delTodo: PropTypes.func
}

export default Todos