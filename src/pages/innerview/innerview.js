import React from "react";
const SideBar = props => {
    return (
        <header className="h-full w-10 bg-mid-dark-purple flex flex-row items-center justify-between md:flex-col">
            <div className="">
                <h1 className="text-4xl font-bold">Invoices</h1>
                <p className="text-white opacity-50">There are {} total invoices</p>
            </div>
            <div>
                <button className="md:border-b border-r border-l-purple md:w-full md:h-20 h-full w-20">
                    Filter by status
                    <DownArrowIco />
                </button>
                <button className="rounded-full p-5 last:bg-purple">
                    <PlusIco />
                    New Invoices
                </button>
            </div>
        </header>
    );
}
export default SideBar;