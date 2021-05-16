import {useState} from "react";
const TextArea = () => {

    const [inputValues, setInputValues] = useState({
        textInput: "...",
        nameInput: "name",

    });
    const textChanged = (event) => {
        setInputValues({
            ...inputValues,
            textInput: event.target.value,
        })

};
    const nameChanged = (event) => {
        setInputValues ({
            ...inputValues,
            nameInput: event.target.value,
        })
    };

    return (
        <div>
            <textarea className="text__area"
                      placeholder="Write Something..."
                      onChange={textChanged}
            >
                {inputValues.textInput}
            </textarea>
            <input placeholder="Your Name" onChange={nameChanged}/>
            <button onClick={() => {alert(`${inputValues.nameInput} - this is your comment => ${inputValues.textInput}`)}}>comment </button>
        </div>
    );
};

export default TextArea;