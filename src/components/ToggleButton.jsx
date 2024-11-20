import React, {  useState } from "react";


function ToggleButton() {

    return (
        <>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    // onChange=""
                    // checked=""
                />
            </div>
        </>
    );
}

export default ToggleButton;
