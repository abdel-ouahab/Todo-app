import { Button} from "../index";
import { useState } from "react";

const Form = ({ addTask }) => {
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(description);
        addTask(description);
        setDescription("");
    };

    return (
        <>
            <form className="flex flex-row mb-7" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="What is the task today?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="sm:w-96 border-2 border-violet-500 bg-violet-950 p-2 placeholder-slate-300 text-gray-100  focus:outline-none focus:border-violet-500"
                    required
                />
                <Button title= "Add Task" varaint="primary" />
            </form>
        </>
    );
};

export default Form