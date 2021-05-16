import {useState} from "react";

const InputNames = () => {
    const [firstInput, setFirstInput] = useState("First Name");
    const [lastInput, setLastInput] = useState("Last Name");

    const firstnameChanged = (event) => {
        setFirstInput(event.target.value);
    };

    const lastnameChanged = (event) => {
        setLastInput(event.target.value);
    };
    return (
        <div>
            <input placeholder="first name" onChange={firstnameChanged}/>
            <input placeholder="last name" onChange={lastnameChanged}/>
            <button onClick={() => {alert(`${firstInput} ${lastInput}`)}}>submit</button>
        </div>

    );
};

export default InputNames;