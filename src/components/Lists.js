import React from "react"
import commandsList from "../data/commandsList"
import Select from 'react-select'
import cpbtn from "../assets/CopyVector.svg"


export default function Lists() {


    const [selectedOption, setSelectedOption] = React.useState("");


    const selectStyles = {
        control: (provided) => ({
            ...provided,
            width: '300px',
            marginRight: ' 50px'
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#1A2238'
        }),
    }


    return (

        <div className="lists-main">

            <div>
                <p className="labels">linux</p>

                <Select
                    styles={selectStyles}
                    defaultValue={selectedOption}
                    className="lists"
                    placeholder={"Enter command ..."}
                    onChange={setSelectedOption}
                    options={commandsList}
                />
            </div>

            <div>
                <div className="cmd">
                    <p className="labels">cmd</p>

                    <div className="cmd-main">
                        <p className="cmd-area">{selectedOption.cmd}</p>
                        <img src={cpbtn} alt="copy" className="cpbtn" />
                    </div>

                </div>

                <div className="note">
                    <p className="labels">Note</p>
                    <p className="note-area">{selectedOption.note}</p>
                </div>
            </div>

        </div>
    )
}