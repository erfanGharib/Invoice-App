import { panelRef, panelFatherRef } from "./components/panel";

const displayPanel = () => {
    panelFatherRef.current.classList.toggle('showPanelFather');
    setTimeout(() => {
        panelRef.current.classList.toggle('displayPanel');
    }, 10);
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