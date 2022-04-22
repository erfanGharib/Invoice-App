import React from "react";
import FilterBtn from "./filter-btn";
import { ReactComponent as PlusIco } from '../../../../assets/icons/plus.svg';
const Header = props => {
    return (
        <header className="h-64 w-full bg-mid-dark-purple flex items-center justify-between">
            <div>
                <h1 className="text-4xl font-bold">Invoices</h1>
                <p className="opacity-60 font-semibold text-inherit">There are {} total invoices</p>
            </div>
            <div className="flex flex-row">
                <FilterBtn />
                <button className="rounded-full hover:bg-opacity-80 active:opacity-60 transition-colors p-2 h-14 w-48 font-semibold text-white flex items-center bg-purple">
                    <PlusIco />
                    New Invoice
                </button>
            </div>
        </header>
    );
}
export default Header;