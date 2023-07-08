import React from "react";
import "./Logo.css";

class Logo extends React.Component {
    render() {
        return (
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
        );
    }
}

export default Logo;
