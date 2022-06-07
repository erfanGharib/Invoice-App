import { panelRef, panelFatherRef } from "./components/panel";

// 1. display delay: panel father 300ms - panel 0ms
// 2. display delay: panel 300ms - panel father 0ms
// to have transition on open panel and close
let fDelay = 0, pDelay = 300;
const displayPanel = () => {
    setTimeout(() => panelRef.current.classList.toggle('displayPanel'), pDelay);
    setTimeout(() => panelFatherRef.current.classList.toggle('showPanelFather'), fDelay);

    fDelay = fDelay === 300 ? 0 : 300;
    pDelay = pDelay === 0 ? 300 : 0;
}

const saveData = data => {
    localStorage.clear();
    localStorage.setItem('invoiceData', JSON.stringify(data));
}

// 1. get all invoice items, Multiplication qty to unitPrice
// 2. return sum of all items
const calcTotalPrice = items => {
    let totalPrice = 0;
    if (items === undefined || items.length === 0) return '';
    else {
        items.map(value =>
            totalPrice += (value.qty * value.price)
        );
        return totalPrice;
    }
}

// make month and day double digit
const addZeroToFirst = num => {
    if (num < 10) return "0" + num;
    return num;
}

export default calcTotalPrice;
export { displayPanel, saveData, addZeroToFirst };