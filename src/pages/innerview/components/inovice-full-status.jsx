import React from "react";
import { ReactComponent as ArrowIco } from '../../../assets/icons/down-arrow.svg';
import InvoiceStatus from "../../../components/invoice-status";
const InvoiceFullStatus = props => {
    const arr = [
        { tearName: 'Banner design', price: 156, number: 1 },
        { tearName: 'Email design', price: 200, number: 2 },
    ];
    let amountDue = 0;
    arr.forEach(v => {
        amountDue += v.price * v.number;
    })

    return (
        <div className="-z-10 sm:w-3/4 lg:w-3/5 w-11/12 pb-10 flex items-start flex-col" style={{height:'200vh'}}>
            <div className="w-full h-5 mt-12 mb-4">
                <a href="/" className="hover:bg-dark-blue hover:bg-opacity-5 p-2 rounded-lg">
                    <span className="transform rotate-90 inline-block mr-4"><ArrowIco /></span>
                    <small>Go back</small>
                </a>
            </div>

            <div className="w-full flex lg:flex-row flex-col gap-y-4 justify-between items-center rounded-lg py-4 px-6 mb-4 shadow-xl dark:bg-mid-dark-blue bg-white">
                <span className="f-between lg:w-max w-full">
                    Status:
                    <InvoiceStatus status={true} />
                </span>

                <span className="f-between gap-y-2 lg:w-max w-full flex-wrap">
                    <button className="sm:w-auto w-full text-sm sm:mr-2 bg-mid-dark-blue text-white rounded-full hover:bg-opacity-80 h-12 active:opacity-60 transition-colors px-7">Edit</button>
                    <button className="sm:w-auto w-full rounded-full sm:mr-2 text-sm p-4 bg-red text-white px-7 h-12">Delete</button>
                    <button className="sm:w-auto w-full rounded-full text-sm p-4 bg-purple text-white px-7 h-12">Mark as Paid</button>
                </span>
            </div>

            <div className="w-full p-6 sm:p-10 rounded-lg shadow-xl dark:bg-mid-dark-blue bg-white">
                <div className="w-full flex flex-col">
                    <span>
                        <span className="opacity-50">#</span>
                        <strong className="uppercase">222shf</strong>
                    </span>
                    <span className="opacity-60">Graphic design</span>
                </div>

                <div id="invoice-info" className="flex justify-between my-9">
                    <span className="flex flex-col">
                        <span>Invoice Date</span>
                        <h2>21 Aug 2021</h2>
                        <span className="mt-5">Payment Due</span>
                        <h2>20 sep 2021</h2>
                    </span>

                    <span className="flex flex-col">
                        <span>Bill to</span>
                        <h2>Alex Grim</h2>
                        <span>b4 church way</span>
                        <span>Srod ford</span>
                        <span>United Kingdom</span>
                    </span>

                    <span className="flex flex-col">
                        <span>Sent to</span>
                        <h2>alexgrim@gmail.com</h2>
                    </span>
                </div>

                <table className="dark:bg-white dark:bg-opacity-5 bg-slate-50 dark:text-white w-full f-center flex-col rounded-lg">
                    <tr className="my-5 w-full px-7 text-sm flex justify-between opacity-60">
                        <td className="w-32 text-left">Tears Name</td>
                        <td className="w-10">QTY</td>
                        <td className="w-20 text-right">Price</td>
                        <td className="w-14 text-right">Total</td>
                    </tr>

                    {arr.map(v => {
                        return (
                            <tr className="w-full px-7 mb-5 flex justify-between">
                                <td className="w-32 text-left">{v.tearName}</td>
                                <td className="w-10">{v.number}</td>
                                <td className="w-20 text-right">&#163; {v.price}</td>
                                <td className="w-14 text-right">&#163; {v.price * v.number}</td>
                            </tr>
                        );
                    })}

                    <div className="w-full flex items-center rounded-b-lg justify-between dark:bg-black bg-mid-dark-blue text-white p-7">
                        <td className="opacity-60"><small>Amount Due</small></td>
                        <td className="font-bold">
                            <h2 className="text-xl">
                                &#163;&nbsp;
                                {amountDue}
                            </h2>
                        </td>
                    </div>
                </table>
            </div>
        </div>
    );
}
export default InvoiceFullStatus;