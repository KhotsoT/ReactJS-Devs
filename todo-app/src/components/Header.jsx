export function Header(props) {
    const { todos } = props
    // const todosLength = todos.length
    const isTasksPlural = todos.length != 1
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task'

    const openTodos = todos.filter(val => !val.complete).length

    return (
        <header>
            <h1 className="text-gradient">You have {openTodos} open {taskOrTasks}.</h1>
        </header>
    )
}