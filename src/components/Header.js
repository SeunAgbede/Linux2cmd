import React from "react"
import logo from "../assets/Logo.svg"
import day from "../assets/DayVector.svg"
import night from "../assets/NightVector.svg"
import Switch from '@mui/material/Switch';


export default function Header() {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log("We live!")
    };


    return (
        <header>
            <div className="header">

                <img src={logo} alt="Linux2cmd" className="logo"/>

                <div className="toggle-section">

                    <img src={day} alt="Day" />

                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />

                    <img src={night} alt="Night" />

                </div>
            </div>
        </header>
    )
}