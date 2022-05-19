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

const calcTotalPrice = items => {
    let totalPrice = 0;
    items.forEach(value => {
        totalPrice += (value.qty * value.price);
    });
    return totalPrice;
}

export default calcTotalPrice;
export { displayPanel };