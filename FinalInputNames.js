import {useState} from "react";

const FinalInputNames = () => {
    const [inputValues, setInputValues] = useState({
        firstInput: "First Name",
        lastInput: "Last Name",
    });

    const firstnameChanged = (event) => {
        setInputValues({
                ...inputValues,
                firstInput: event.target.value,
            }
        )
    };

    const lastnameChanged = (event) => {
        setInputValues ({
            ...inputValues,
            lastInput: event.target.value,
        })
    };
    return (
        <div>
            <input placeholder="first name" onChange={firstnameChanged}/>
            <input placeholder="last name" onChange={lastnameChanged}/>
            <button onClick={() => {alert(`${inputValues.firstInput} ${inputValues.lastInput}`)}}>submit</button>
        </div>

    );
};

export default FinalInputNames;