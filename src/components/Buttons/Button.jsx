
function Button({ icon, title, varaint, onClick }) {
    const variants = {
        primary: {
            classname: "text-gray-100 text-center bg-violet-500 w-28 hover:text-violet-950 hover:bg-gray-100",
            type : "submit"
        },
        secondary: {
            classname: "text-gray-50 mx-2",
            type : ""
        },
        Search: {
            classname: "rounded p-2 text-gray-100 text-center bg-violet-500 w-28 hover:text-violet-950 hover:bg-gray-100",
            type : ""
        }
    };

    const selectedVaraint = variants[varaint].classname;
    const typeVaraint = variants[varaint].type;

    return (
        <button type={typeVaraint} className={selectedVaraint} onClick={onClick}>
            {title && title}
            {icon && icon}
        </button>
    )
}

export default Button
