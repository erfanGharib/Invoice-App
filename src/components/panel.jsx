import React from "react";
import { displayPanel } from "../functions";

const panelRef = React.createRef();
const panelFatherRef = React.createRef();
const Panel = props => {
    return (
        <div 
            ref={panelFatherRef} 
            className="absolute w-full h-full top-0 hidden z-10"
        >
            <div onClick={displayPanel} className="bg-black bg-opacity-30 absolute w-full h-full top-0"></div>
            <div ref={panelRef} className="left-0 md:left-16 top-19 md:top-0 overflow-y-scroll flex-col items-start flex pl-5 pr-5 md:pl-14 md:pr-10 pb-8 pt-24 md:pt-8 transform -translate-x-full relative z-20 h-full dark:bg-dark-blue bg-white w-full md:w-1/2 md:rounded-tr-3xl md:rounded-br-3xl">
                {props.panel}
            </div>
        </div>
    );
}
export default Panel;
export { panelRef, panelFatherRef };