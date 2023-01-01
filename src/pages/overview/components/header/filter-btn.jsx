import React from "react";
import { ReactComponent as DownArrowIco } from '../../../../assets/icons/down-arrow.svg';
import { invoiceContext } from "../../../../App";
import calcTotalPrice, { addZeroToFirst, saveData } from "../../../../functions";

const FilterBtn = props => {
    const invoiceContext_ = React.useContext(invoiceContext);
    const dropDownMenuRef = React.createRef();
    const filterMethods = ['status', 'payment', "client's name", 'date'];

    const displayDropDownMenu = () => {
        dropDownMenuRef.current.classList.toggle('display-drop-down-menu');
    }
    const highlightBtn = ({target}) => {
        target.parentElement.childNodes.forEach(btn => {
            btn.classList.remove('bg-white', 'bg-opacity-20');
        });
        target.classList.add('bg-white', 'bg-opacity-20');
    }
    // clean codes
    const sortInvoices = type => {
        const { allInvoiceData, setAllInoviceData } = invoiceContext_;
        const editedData = allInvoiceData;

        switch (type) {
            case 'payment':
                editedData.sort(( a, b ) => {
                    let aPrice = calcTotalPrice(a.items);
                    let bPrice = calcTotalPrice(b.items);

                    if (aPrice < bPrice) return -1;
                    if (aPrice > bPrice) return 1;
                    return 0;
                });
                break;

            case 'status':
                editedData.sort(( a, b ) => {
                    if (a.status < b.status) return -1;
                    if (a.status > b.status) return 1;
                    return 0;
                });
                break;

            case "client's name":
                editedData.sort(( a, b ) => {
                    if (a.clientName < b.clientName) return -1;
                    if (a.clientName > b.clientName) return 1;
                    return 0;
                });
                break;

            case 'date':
                editedData.sort(( a, b ) => {
                    const date = p => {
                        const { day, year, month } = p.paymentDue;
                        return `${year}${addZeroToFirst(month)}${addZeroToFirst(day)}` 
                    }

                    if (date(a) < date(b)) return -1;
                    if (date(a) > date(b)) return 1;
                    return 0;
                });
                break;
        
            default:
                break;
        }

        setAllInoviceData([...editedData]);
        saveData(allInvoiceData);
    }

    return (
        <div className="flex flex-row">
            <div className="sm:w-32 w-24 relative sm:mr-2 my-auto flex items-center">
                <button id="filter-btn" onClick={displayDropDownMenu} className="hover:underline font-semibold underline-offset-2 text-base">
                    <span>Filter&nbsp;</span>
                    &nbsp;
                    <DownArrowIco />
                </button>

                <div ref={dropDownMenuRef} className="absolute hidden z-10 origin-top top-7 sm:right-0 right-4 w-full p-1.5 dark:text-dark-blue bg-mid-dark-blue text-white rounded-md dark:bg-white shadow-lg flex-col items-start justify-between">
                    {filterMethods.map(value => 
                        <button 
                            className="p-2 w-full hover:bg-white capitalize hover:bg-opacity-20 rounded-md" 
                            key={value}
                            onClick={e => {
                                sortInvoices(value); 
                                displayDropDownMenu(); 
                                highlightBtn(e);
                            }}
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