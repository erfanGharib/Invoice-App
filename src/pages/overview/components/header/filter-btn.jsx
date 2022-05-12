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
            <div className="sm:w-40 w-24 relative sm:mr-5 my-auto flex items-center">
                <button id="filter-btn" onClick={displayDropDownMenu} className="hover:underline font-semibold underline-offset-2 text-base">
                    <span>Filter&nbsp;</span>
                    &nbsp;
                    <DownArrowIco />
                </button>

                <div ref={dropDownMenuRef} className="absolute hidden opacity-0 transition-all transform scale-y-75 z-10 origin-top top-7 sm:right-0 right-4 w-full p-1.5 dark:text-dark-blue bg-mid-dark-blue text-white rounded-md dark:bg-white shadow-lg flex-col items-start justify-between">
                    {filterMethods.map(value => 
                        <button 
                            className="p-1 w-full hover:bg-white hover:bg-opacity-20 rounded-md" 
                            key={value}
                        >
                            {value}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
export default FilterBtn;