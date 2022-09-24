import React from "react"
import logo from "../assets/Logo.svg"
import logoLight from "../assets/LogoLight.svg"
import day from "../assets/DayVector.svg"
import dayLight from "../assets/DayVector-Light.svg"
import night from "../assets/NightVector.svg"
import nightLight from "../assets/NightVector-Light.svg"
import { Context } from "../Context";
import Switch from '@mui/material/Switch';


export default function Header() {

    const { checked, setChecked } = React.useContext(Context);

    function handleChange(e) {
        setChecked(e.target.checked);
    };


    return (
        <header>
            <div className="header">
                <a href="/">
                    <img src={checked ? logo : logoLight} alt="Linux2cmd" className="logo" />
                </a>

                <div className="toggle-section">
                    <img src={checked ? day : dayLight} alt="Day" />

                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />

                    <img src={checked ? night : nightLight} alt="Night" />
                </div>
            </div>
        </header>
    )
}