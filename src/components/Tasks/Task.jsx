import { CompletedButton, EditButton, TrashButton } from "../index";

const Task = (props) => {
  return (
    <div className="flex p-2 pl-3 mb-7 bg-violet-500 rounded justify-between">
      <p
        onClick={() => props.completedTask(props.id)}
        className={`text-gray-100 sm:max-w-96 max-w-48  cursor-pointer truncate whitespace-normal break-words ${
          props.completed ? "line-through" : ""
        }`}
      >
        {props.description}
      </p>

      <div>
        <CompletedButton
          id={props.id}
          completedTask={props.completedTask}
          completed={props.completed}
        />
        <EditButton id={props.id} editTask={props.editTask} />
        <TrashButton id={props.id} deleteTask={props.deleteTask} />
      </div>
    </div>
  );
};

export default Task;
