import { FaEdit, FaTrash, FaCheck, FaWindowClose } from "react-icons/fa";

const PrimaryButton = (props) => {
  return (
    <button
      type="submit"
      className="text-gray-100 text-center bg-violet-500 w-28 hover:text-violet-950 hover:bg-gray-100"
    >
      {props.children}
    </button>
  );
};

const EditButton = (props) => {
  return (
    <button
      className="text-gray-50 mx-2"
      onClick={() => props.editTask(props.id)}
    >
      <FaEdit />
    </button>
  );
};

const TrashButton = (props) => {
  return (
    <button
      className="text-gray-50 mx-2"
      onClick={() => props.deleteTask(props.id)}
    // onClick={props.onClick}
    >
      <FaTrash />
    </button>
  );
};

const CompletedButton = (props) => {
  return (
    <>
      {props.completed ? (
        <button
          className="text-gray-50 mx-2"
          onClick={() => props.completedTask(props.id)}
        >
          <FaWindowClose />
        </button>
      ) : (
        <button
          className="text-gray-50 mx-2"
          onClick={() => props.completedTask(props.id)}
        >
          <FaCheck />
        </button>
      )}
    </>
  );
};

export default PrimaryButton;

export { EditButton, TrashButton, CompletedButton };

// const Button = ({ icon, title, varaint }) => {

//     const variants = [
//         primary: {
//           classname: ""
//         },
//         secondary: {
//           backgroundColor: "gray",
//           color: "white",
//         },
//       };
//     ]

//     const selectedVaraint = Varaints[varaint].classNamz;
//   return (
//     <button className={selectedVaraint} >
//       {title && title}
//       {icon && icon}
//     </button>
//   );
// };

// const Header = () => {

//     return(
// <Button title= "" icon={<FaWindowClose />} />
// <Button title= "" icon={<FaCheck />} />

//     )
// }
