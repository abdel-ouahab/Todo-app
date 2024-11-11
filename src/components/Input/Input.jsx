const Input = (props) => {
    return (
        <input type="text" placeholder={props.children} 
        className="sm:w-96 border-2 border-violet-500 bg-violet-950 p-2 placeholder-slate-300 text-gray-100  focus:outline-none focus:border-violet-500" />
    )
  }
  
  export default Input