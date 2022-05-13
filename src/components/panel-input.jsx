import { React } from "react";

const PanelInput = props => {
    const {id, label, type, width, mt} = props;
    return (
        <label 
            htmlFor={id} 
            className={`${width === undefined ? 'w-full' : width} capitalize flex flex-col text-sm ${mt === undefined ? 'mt-6' : mt} justify-between items-start`}
        >
            <span className="text-inherit">{label === undefined ? id : label}</span>
            <input 
                type={type === undefined ? 'text' : type}
                id={id} 
                className="dark:bg-mid-dark-blue w-full bg-slate-200 rounded-md py-3 mt-1.5 px-4" 
            />
        </label>
    );
}
export default PanelInput;