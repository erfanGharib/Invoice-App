import React, { useState } from "react";
import FilterBtn from "./filter-btn";
import { data } from "../invoices";
import { ReactComponent as PlusIco } from '../../../../assets/icons/plus.svg';
const Header = props => {
    return (
        <header className="h-52 md:h-64 w-full bg-mid-dark-purple flex items-center justify-between">
            <div>
                <h1 className="font-bold sm:text-4xl text-2xl">Invoices</h1>
                <p className="opacity-60 font-semibold text-inherit">{data.length} total invoices</p>
            </div>

            <div className="flex flex-row flex-wrap-reverse justify-end gap-y-3 mt-2">
                <FilterBtn />

                <button className="rounded-full text-base hover:bg-opacity-80 sm:h-14 h-12 active:opacity-60 transition-colors py-0 px-2 w-28 sm:w-48 font-semibold text-white flex items-center bg-purple">
                    <PlusIco />
                    New {window.innerWidth <= 640 ? '' : 'Invoice'}
                </button>
            </div>
        </header>
    );
}
export default Header;