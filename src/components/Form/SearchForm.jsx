import { Button } from "../index";
import { useState} from "react";


const SearchForm = (props) => {
    const [search, setSearch] = useState(false)
    return (
        <>
            {
                search ? (
                    <div className="flex flex-row mb-7">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={props.handleChange}
                        className="sm:w-96 border-2 border-violet-500 bg-violet-950 p-2 placeholder-slate-300 text-gray-100  focus:outline-none focus:border-violet-500"
                    />
                    <Button title= "Close" varaint="primary" onClick={() => setSearch(prevSearch => !prevSearch)}/>
                    </div>
                ) : (
                    <div className="flex flex-row mb-7 justify-center">
                    <Button title="Search" varaint="Search"  onClick={() => setSearch(prevSearch => !prevSearch)} />

                    </div>
                )
            }

        </>
    );
};

export default SearchForm;
