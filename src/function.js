import { panelRef, panelFatherRef } from "./components/panel";
const displayPanel = () => {
    panelRef.current.classList.toggle('displayPanel');
    panelFatherRef.current.classList.toggle('showPanelFather');
}
export default displayPanel;