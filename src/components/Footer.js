import React from "react";
import { Context } from "../Context";

export default function Footer() {

    const { checked, setChecked } = React.useContext(Context);

    //Error handling to avoid no-unused-vars error
    try {
        if (setChecked === undefined) throw Error('');
    } catch (err) {
        alert('Error' + err);
    }

    return (
        <footer className={checked ? "footer" : "footer light-footer"}>
            <a
                className={checked ? "footer-link" : "footer-link light-footer"}
                href="https://twitter.com/seun_agb"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p>Twitter</p>
            </a>

            <div className="orange-dots"></div>

            <a
                className={checked ? "footer-link" : "footer-link light-footer"}
                href="https://www.seunagbede.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p>About</p>
            </a>

            <div className="orange-dots"></div>

            <a
                className={checked ? "footer-link" : "footer-link light-footer"}
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p>Support</p>
            </a>
        </footer>
    )
}