import { React } from "react";
import { ReactComponent as DownArrowIco } from '../../../assets/icons/down-arrow.svg';
import calcTotalPrice from "../../../functions";
import InvoiceStatus from "../../../components/invoice-status";

const Invoice = props => {
    const { tag, paymentDue, clientName, items, status } = props.data;
    
    const splitNumbers = () => {
        // split number three by three
        return String(calcTotalPrice(items)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <tr
            style={{ gridTemplateAreas: "'tag name name name name name' 'date status status status status status' 'payment status status status status status'" }}
            key={tag}
            onClick={() => window.location.assign('/'+tag)}
            className="bg-white items-center content-center py-5 sm:py-6 h-auto px-4 lg:px-6 cursor-pointer gap-y-2 justify-between grid sm:flex dark:bg-mid-dark-blue dark:bg-opacity-60 rounded-lg shadow-lg w-full mb-4"
        >
            <td style={{ gridArea: 'tag' }} className="text-left">
                <span className="opacity-50">#</span>
                <strong className="uppercase tracking-wide">{tag}</strong>
            </td>
            <td style={{ gridArea: 'date' }} className="capitalize text-left sm:text-center opacity-60">Due&nbsp;&nbsp;{paymentDue.day} {paymentDue.month[0]} {paymentDue.year}</td>
            <td style={{ gridArea: 'name' }} className="capitalize text-right sm:text-center sm:ml-0 ml-auto opacity-60">{clientName}</td>
            <td style={{ gridArea: 'payment' }} className="font-bold text-left sm:text-center text-xl">&#163; {splitNumbers()}</td>
            <td style={{ gridArea: 'status' }} className="w-28 sm:ml-0 sm:mt-0 mt-3 ml-auto">
                <InvoiceStatus status={status} />
            </td>
            <td className="transform sm:table-cell hidden -rotate-90">
                <DownArrowIco />
            </td>
        </tr>
    );
}
export default Invoice;