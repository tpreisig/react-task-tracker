import { AiOutlineClose } from "react-icons/ai";
const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}{""}
                <AiOutlineClose
                style={{color:"navy", cursor:"pointer"}} 
                onClick={() => onDelete(task.id)}
                />
             </h3>
            <p>{task.day}</p>
            <p>{task.reminder}</p>
        </div>
    )
}
export default Task;