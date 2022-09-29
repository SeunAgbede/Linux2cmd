import React from "react"
import commandsList from "../data/commandsList"
import Select from 'react-select'
import cpbtn from "../assets/CopyVector.svg"
import copy from "copy-to-clipboard";
import { Context } from "../Context";



export default function Lists() {

    // passing global state for theme toggle switch
    const { checked, setChecked } = React.useContext(Context);

    //Error handling to avoid no-unused-vars error
    try {
        if (setChecked === undefined) {
            throw Error('');
        }
    } catch (err) {
        alert('Error' + err);
    }

    // initialised to false to avoid copypop before  
    const [selectedOption, setSelectedOption] = React.useState(false);

    // Select component styles
    const selectStyles = {
        control: (provided) => ({
            ...provided,
            width: '300px',
            height: '50px',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#1A2238'
        }),
        menu: (provided) => ({
            ...provided,
            width: '300px'
        })
    }

    //cpbtn
    const [isPopUp, setIsPopUp] = React.useState(false)

    let copyText = selectedOption.cmd

    function copyToClipboard() {

        copy(copyText);

        setIsPopUp(true)

        setTimeout(() => {
            setIsPopUp(false)
        }, 900)

    }


    return (

        <div className="lists-main">

            <div>
                <p className={checked ? "labels" : "labels labels-light"}>linux</p>

                <Select
                    styles={selectStyles}
                    defaultValue={selectedOption}
                    className="select-list"
                    placeholder={"Enter command ..."}
                    onChange={setSelectedOption}
                    options={commandsList}
                />
            </div>

            <div className="cmd-cmd">

                <div className="cmd">

                    <p className={checked ? "labels" : "labels labels-light"}>cmd</p>

                    <div className="cmd-main">

                        <p className="cmd-area">{selectedOption.cmd}</p>

                        {isPopUp && copyText && <div className="cpbtn-popup  slide-top">Copied!</div>}


                        <div className="cpbtn" onClick={copyToClipboard}>
                            <img src={cpbtn} alt="copy" />
                        </div>

                    </div>

                </div>

                <div className="note">
                    <p className={checked ? "labels" : "labels labels-light"}>Note</p>
                    <p className="note-area">{selectedOption.note}</p>
                </div>

            </div>

        </div>
    )
}

