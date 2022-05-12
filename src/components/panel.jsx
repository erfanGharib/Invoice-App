import React from "react";

const panelRef = React.createRef();
const panelFatherRef = React.createRef();
const Panel = props => {
    return (
        <div ref={panelFatherRef} className="absolute w-full h-full top-0 hidden z-10 bg-black bg-opacity-30">
            <div ref={panelRef} className="left-0 top-0 flex-col items-start flex pl-14 pr-10 py-8 transform -translate-x-full relative z-20 h-full dark:bg-dark-blue bg-white w-4/5 md:w-1/2 rounded-tr-3xl rounded-br-3xl">
                {props.panel}
            </div>
        </div>
    );
}
export default Panel;
export { panelRef, panelFatherRef };