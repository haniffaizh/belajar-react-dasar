
import {useImmer} from "use-immer";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

export default function Task(){
    const [items,setItems]=useImmer([]);

    return (
        <div>
            <TaskForm setItems={setItems}></TaskForm>
            <TaskList items={items} />
        </div>
    )
}