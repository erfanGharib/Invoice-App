import React from "react";
import { ReactComponent as DownArrowIco } from '../../../../assets/icons/down-arrow.svg';
const FilterBtn = props => {
    const dropDownMenuRef = React.createRef();
    const filterMethods = ['status', 'payment', 'name', 'date'];
    const displayDropDownMenu = () => {
        dropDownMenuRef.current.classList.toggle('display-drop-down-menu');
    }

    return (
        <div className="flex flex-row">
            <button className="sm:w-40 relative mr-5 h-14  flex items-center font-semibold">
                <div onClick={displayDropDownMenu} className="hover:underline underline-offset-2">
                    Filter by status
                    &ensp;
                    <DownArrowIco />
                </div>
                <div ref={dropDownMenuRef} className="absolute hidden opacity-0 transition-all transform scale-y-75 z-10 origin-top top-12 w-full p-1.5 dark:text-dark-blue bg-mid-dark-blue text-white rounded-md dark:bg-white shadow-lg flex-col items-start justify-between">
                    {filterMethods.map(value => 
                        <button 
                            className="p-1 w-full hover:bg-white hover:bg-opacity-20 rounded-md" 
                            key={value}
                        >
                            {value}
                        </button>
                    )}
                </div>
            </button>
        </div>
    );
}
export default FilterBtn;