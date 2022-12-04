

const TodosList = ({todos, setTodos, setEditTodo}) => {
    
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = (temp) => {
        setTodos(
            todos.map((item) => {
                if(item.id === temp.id){
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    return (
        <div>
            {todos.map((item) => (
                <li className="list-item" key={item.id}>
                    <input type="text" value={item.title} className={`list ${item.completed ? "complete" : ""}`} onChange={(e) => e.preventDefault()} />
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(item)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(item)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(item)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodosList;