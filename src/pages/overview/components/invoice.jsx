import React from "react";
import { ReactComponent as DownArrowIco } from '../../../assets/icons/down-arrow.svg';
import InvoiceStatus from "../../../components/invoice-status";

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
        <table 
            style={{gridTemplateAreas:"'tag name name name name name' 'date status status status status status' 'payment status status status status status'"}} 
            key={tag} 
            className="bg-white sm:p-0 p-6 py-7 content-center gap-y-2 justify-between grid sm:table dark:bg-mid-dark-blue dark:bg-opacity-60 rounded-lg shadow-lg w-full h-36 sm:h-22 mb-4"
        >
            <td style={{gridArea:'tag'}} className="text-left sm:text-center">
                <span className="opacity-50">#</span>
                <strong className="uppercase">{tag}</strong>
            </td>
            <td style={{gridArea:'date'}} className="capitalize text-left sm:text-center opacity-60">{date}</td>
            <td style={{gridArea:'name'}} className="capitalize text-right sm:text-center opacity-60">{name}</td>
            <td style={{gridArea:'payment'}} className="font-bold text-left sm:text-center text-xl">&#163; {splitNumbers(payment)}</td>
            <td style={{gridArea:'status'}} className="w-28 sm:ml-0 sm:mt-0 mt-3 ml-auto">
                <InvoiceStatus status={status} />
            </td>
            <td className="transform sm:table-cell hidden -rotate-90 px-2.5">
                <DownArrowIco />
            </td>
        </table>
    );
}
export default Invoice;