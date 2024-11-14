
function Button({ icon, title, varaint, onClick }) {
    const variants = {
      primary: {
        classname:
          "flex items-center justify-center gap-4 text-gray-100  bg-violet-500 w-28 hover:text-violet-950 hover:bg-gray-100",
        type: "submit",
      },
      secondary: {
        classname: "text-gray-50 mx-2",
        type: "",
      },
      Search: {
        classname:
          "flex items-center justify-center gap-4 rounded p-2 text-gray-100 text-center bg-violet-500 w-28 hover:text-violet-950 hover:bg-gray-100",
        type: "",
      },
    };
  
    const selectedVaraint = variants[varaint].classname;
    const typeVaraint = variants[varaint].type;
  
    return (
      <button
        type={typeVaraint}
        className={`${selectedVaraint}`}
        onClick={onClick}
      >
        <p>{title && title}</p>
        {icon && icon}
      </button>
    );
  }
  
  export default Button;
  