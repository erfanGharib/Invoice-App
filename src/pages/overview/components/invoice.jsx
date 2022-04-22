import React from "react";
import { ReactComponent as DownArrowIco } from '../../../assets/icons/down-arrow.svg';

const Invoice = props => {
    const {tag, payment, name, date, status } = props;
    const splitNumbers = num => {
        // split number three by three
        let result = '';
        let numToStr = String(num);

        numToStr.split('').forEach((value, index) => {
            result += value;
            if(index % 3 === 0 && index !== numToStr.length - 1)
                result += ',';
        })
        
        return result;
    }

    return (
        <table className="bg-white dark:bg-mid-dark-blue dark:bg-opacity-60 rounded-lg shadow-lg w-full h-22 mb-4">
            <td>
                <span className="opacity-50">#</span>
                <strong className="uppercase">{tag}</strong>
            </td>
            <td className="capitalize opacity-60">{date}</td>
            <td className="capitalize opacity-60">{name}</td>
            <td className="font-bold text-xl">&#163; {splitNumbers(payment)}</td>
            <td className="w-28">
                <div 
                    className={`
                        ${status ? 'bg-emerald-500 text-emerald-500' : 'bg-orange-400 text-orange-400'} 
                        f-center text-sm font-bold bg-opacity-10 w-full h-11 rounded-md
                    `}>
                    <span className={`${status ? 'bg-emerald-500' : 'bg-orange-400'} w-2.5 h-2.5 mr-2 rounded-full block`}></span>
                    <span className="mt-0.5">{status ? 'Paid' : 'Pending'}</span>
                </div>
            </td>
            <td className="transform -rotate-90 px-2.5">
                <DownArrowIco />
            </td>
        </table>
    );
}
export default Invoice;