function Button({ icon, title, varaint, onClick, classname }) {
    const variants = {
      primary: {
        classname:
          " text-gray-100  bg-violet-500 w-28 hover:text-violet-950 hover:bg-gray-100",
        type: "submit",
      },
      secondary: {
        classname: "text-gray-50 ",
        type: "",
      }
    };
  
    const selectedVaraint = variants[varaint].classname;
    const typeVaraint = variants[varaint].type;
  
    return (
      <button
        type={typeVaraint}
        className={`flex items-center justify-center gap-4 ${selectedVaraint} ${classname}`}
        onClick={onClick}
      >
        <p>{title && title}</p>
        {icon && icon}
      </button>
    );
  }
  
  export default Button;
  
