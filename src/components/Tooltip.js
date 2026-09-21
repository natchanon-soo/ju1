import { createPortal } from "react-dom";

function Tooltip({ visible, x, y, children }) {

    if (!visible) return null;

    return createPortal(

        <div
            className="dm-tooltip-portal"
            style={{
                left: x,
                top: y
            }}
        >
            {children}
        </div>,

        document.body

    );

}

export default Tooltip;