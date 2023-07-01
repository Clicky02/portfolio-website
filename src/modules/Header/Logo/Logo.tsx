import React from "react";
import "./Logo.css";
import ScrollLinkButton, { ScrollLinkBase } from "../../../general/ScrollLink";

class Logo extends React.Component {
    render() {
        return (
            <ScrollLinkBase to="home" className="NoDecoration NoSelect">
                <div className={"Logo"}>
                    <div className="LogoElement First">
                        <div className="LogoInitial">G</div>
                        <div className="LogoText">areth</div>
                    </div>

                    <div className="LogoElement Second">
                        <div className="LogoInitial">F</div>
                        <div className="LogoText">ultz</div>
                    </div>
                </div>
            </ScrollLinkBase>
        );
    }
}

export default Logo;
