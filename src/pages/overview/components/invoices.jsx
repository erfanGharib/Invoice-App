import React from "react";
import Invoice from "./invoice";
const data = [
    { tag: '222shf', date: '12 Aug 2021', name: 'jhon smith', payment: '1800', status: false },
    { tag: '222shf', date: '12 Aug 2021', name: 'jhon smith', payment: '1800', status: false },
    { tag: '222shf', date: '12 Aug 2021', name: 'jhon smith', payment: '1800', status: true },
    { tag: '222shf', date: '12 Aug 2021', name: 'jhon smith', payment: '1800', status: false },
    { tag: '222shf', date: '12 Aug 2021', name: 'jhon smith', payment: '1800', status: false },
    { tag: '222shf', date: '12 Aug 2021', name: 'jhon smith', payment: '1800', status: false },
    { tag: '222shf', date: '12 Aug 2021', name: 'jhon smith', payment: '1800', status: false },
    { tag: '222shf', date: '12 Aug 2021', name: 'jhon smith', payment: '1800', status: false },
];
const Invoices = props => {
    return (
        <main className="overflow-y-scroll overflow-x-hidden pr-2 w-full h-3/4">
            {data.map(value => {
                const { tag, date, name, payment, status } = value;
                return ( 
                    <Invoice
                        tag={tag} 
                        date={date} 
                        name={name} 
                        payment={payment} 
                        status={status}
                    />
                );
            })}
        </main>
    );
}
export default Invoices;