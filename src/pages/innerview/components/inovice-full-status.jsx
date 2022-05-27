import React, { useContext } from "react";
import { ReactComponent as ArrowIco } from '../../../assets/icons/down-arrow.svg';
import InvoiceStatus from "../../../components/invoice-status";
import calcTotalPrice, { displayPanel, saveData } from "../../../functions";
import { invoiceContext } from "../../../App";

const InvoiceFullStatus = props => {
    const { allInvoiceData, setInoviceData, invoiceData, setAllInoviceData } = useContext(invoiceContext);
    const { tag, clientLocation, invoiceDate, projectDescription, paymentDue, clientName, items, email, status } = invoiceData;
    const { c_street, c_postCode, c_city, c_country } = clientLocation;

    const deleteInvoice = () => {
        let allInvoiceData_ = typeof allInvoiceData === 'string' ? JSON.parse(allInvoiceData) : allInvoiceData;
        console.log(allInvoiceData_.indexOf(invoiceData));
        allInvoiceData_.splice(allInvoiceData_.indexOf(invoiceData), 1);

        setAllInoviceData({...allInvoiceData_});
        saveData(allInvoiceData);
        
        window.location.replace('/');
    }
    const markAsPaid = () => {
        let invoiceDataCopy = invoiceData;
        invoiceDataCopy.status = 1;

        setInoviceData({...invoiceDataCopy});
        saveData(allInvoiceData);
    }

    return (
        <div className="-z-10 mb-28 relative top-20 md:top-12 sm:w-3/4 lg:w-3/5 w-11/12 flex flex-col items-center justify-end">
            <div className="w-full h-5 mb-4">
                <a href="/" className="normal-btn">
                    <span className="transform rotate-90 inline-block mr-3"><ArrowIco /></span>
                    <small>Go back</small>
                </a>
            </div>

            <div className="w-full h-max flex lg:flex-row flex-col gap-y-4 justify-between items-center rounded-lg py-4 px-6 mb-4 shadow-xl dark:bg-mid-dark-blue bg-white">
                <span className="f-between lg:w-max w-full">
                    Status:
                    <InvoiceStatus status={status} />
                </span>

                <span className="f-between gap-y-2 lg:w-max w-full text-sm flex-wrap">
                    <button onClick={displayPanel} className="sm:w-auto w-full sm:mr-2 bg-mid-dark-blue text-white rounded-btn">Edit</button>
                    <button onClick={deleteInvoice} className="sm:w-auto w-full sm:mr-2 bg-red text-white rounded-btn">Delete</button>
                    <button 
                        onClick={markAsPaid}
                        disabled={status === 1}
                        className="sm:w-auto w-full bg-purple text-white rounded-btn"
                    >
                        Mark as Paid
                    </button>
                </span>
            </div>

            <div className="w-full p-6 sm:p-10 rounded-lg shadow-xl dark:bg-mid-dark-blue bg-white">
                <div className="w-full flex">
                    <div className="flex flex-col w-auto">
                        <span>
                            <span className="opacity-50">#</span>
                            <strong className="uppercase">{tag}</strong>
                        </span>

                        <span className="opacity-60">{projectDescription}</span>
                    </div>

                    <div className="flex justify-between items-end ml-auto flex-col">
                        <span className="opacity-60">{c_street}</span>
                        <span className="opacity-60">{c_city}</span>
                        <span className="opacity-60">{c_postCode}</span>
                        <span className="opacity-60">{c_country}</span>
                    </div>
                </div>

                <div id="invoice-info" className="flex justify-between flex-wrap gap-4 my-9">
                    <span className="flex flex-col">
                        <span>Invoice Date</span>
                        <h2>{invoiceDate.day} {invoiceDate.month[0]} {invoiceDate.year}</h2>
                        <span className="mt-5">Payment Due</span>
                        <h2>{paymentDue.day} {paymentDue.month[1]} {paymentDue.year}</h2>
                    </span>

                    <span className="flex flex-col">
                        <span>Bill to</span>
                        <h2>{clientName}</h2>
                        <span>b4 church way</span>
                        <span>Srod ford</span>
                        <span>United Kingdom</span>
                    </span>

                    <span className="flex flex-col">
                        <span>Sent to</span>
                        <h2>{email}</h2>
                    </span>
                </div>

                <table className="dark:bg-white dark:bg-opacity-5 bg-slate-50 dark:text-white w-full f-center flex-col rounded-lg">
                    <thead className="mt-5 w-full px-7 text-sm opacity-60">
                        <tr className="hidden sm:flex w-full f-between">
                            <td className="w-32 text-left">Item Name</td>
                            <td className="w-10">QTY</td>
                            <td className="w-20 text-right">Price</td>
                            <td className="w-14 text-right">Total</td>
                        </tr>
                    </thead>

                    <tbody className="w-full px-7 my-5 font-bold">
                        {items.map(v => {
                            return (
                                <tr className="w-full f-between" key={v.name}>
                                    <td className="w-32 text-left">{
                                        window.innerWidth >= 640 ?
                                            v.name :
                                            <div className="flex flex-col">
                                                {v.name}
                                                <span className="opacity-60">{v.qty}&nbsp;x&nbsp;&#163;&nbsp;{v.price}</span>
                                            </div>
                                    }</td>
                                    <td className="w-10 hidden sm:table-cell">{v.qty}</td>
                                    <td className="w-20 text-right hidden sm:table-cell">&#163; {v.price}</td>
                                    <td className="w-14 text-right h-7 my-auto">&#163; {v.price * v.qty}</td>
                                </tr>
                            );
                        })}
                    </tbody>

                    <tfoot className="w-full rounded-b-lg dark:bg-black bg-mid-dark-blue text-white p-7">
                        <tr className="w-full">
                            <td className="opacity-60 mr-auto"><small>Amount Due</small></td>
                            <td className="font-bold">
                                <h2 className="text-xl">
                                    &#163;&nbsp;
                                    {calcTotalPrice(items)}
                                </h2>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
export default InvoiceFullStatus;