import { React } from "react";

const PanelInput = props => {
    const {id, label, type, width, mt, value} = props;
    
    return (
        <label 
            htmlFor={id} 
            className={`${width === undefined ? 'w-full' : width} capitalize flex flex-col text-sm ${mt === undefined ? 'mt-6' : mt} justify-between items-start`}
        >
            <span className="text-inherit">{label === undefined ? id : label}</span>
            <input 
                type={type === undefined ? 'text' : type}
                id={id} 
                defaultValue={value === undefined ? '' : value}
                className="dark:bg-mid-dark-blue w-full bg-slate-200 rounded-md pt-1.5 pb-1 px-1 sm:pt-3 sm:pb-3 mt-1.5 sm:px-4" 
            />
        </label>
    );
}
export default PanelInput;