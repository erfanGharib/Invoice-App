import React from "react";
const Panel = props => {
    return (
        <div className="absolute w-full h-full hidden z-10 bg-black bg-opacity-30">
            <div className="left-0 relative top-0 z-20 h-full dark:bg-dark-blue bg-white w-1/2 rounded-tr-3xl rounded-br-3xl">
                {props.panel}
            </div>
        </div>
    );
}
export default Panel;