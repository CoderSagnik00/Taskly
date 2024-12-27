import '../css/Todos.css'
import TodoItem from './TodoItem'

function Todos() {
  return (
    <div className='mx-10 space-y-1'>
      <h1 className='font-bold text-2xl'>Todos</h1>
      <div className='space-y-3'>
        <TodoItem title='Learn React' desc='Learn react development' />
        <TodoItem title='Learn React' desc='Learn react development' />
      </div>
    </div>
  )
}

export default Todos