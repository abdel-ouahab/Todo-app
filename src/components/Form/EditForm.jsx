import { Button } from "../index";
import { useState } from "react";
const EditForm = (props) => {
  const [description, setDescription] = useState(props.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTask(description, props.id);
  };
  return (
    <>
      <form className="flex flex-row mb-7" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Update Task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="sm:w-96 border-2 border-violet-500 bg-violet-950 p-2 placeholder-slate-300 text-gray-100  focus:outline-none focus:border-violet-500"
          required
        />
        <Button title= "Update Task" varaint="primary" />
      </form>
    </>
  );
};

export default EditForm;
