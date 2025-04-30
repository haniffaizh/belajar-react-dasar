import Todo from "./Todo.jsx";

export default function TodoList() {
    const data = [
        {
            id: 0,
            text: "Learn HTML",
            isCompleted : false,
        },
        {
            id: 1,
            text: "Learn CSS",
            isCompleted : false,
        },
        {
            id: 2,
            text: "Learn Javascript",
            isCompleted : false,
        },
        {
            id: 3,
            text: "Learn ReactJS",
            isCompleted : false,
        },
        {
            id: 4,
            text: "Learn ReactJS Router",
            isCompleted : false,
        },
    ]



    return (
        <ul>
            {data.map((todo)=>(
                <Todo key={todo.id} {...todo}/>

            ))}
        </ul>
    )
}