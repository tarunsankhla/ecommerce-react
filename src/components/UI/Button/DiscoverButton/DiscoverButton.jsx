import React from "react";
import IcRoundDoubleArrow from "../../Icons/IcRoundDoubleArrow";
import "./DiscoverButton.css";

function DiscoverButton() {
    return (
        <div className="btn-discover">
            <div className="discover-btn-txt"> Explore </div>
            <IcRoundDoubleArrow/>
        </div>
    );
}

export default DiscoverButton;
