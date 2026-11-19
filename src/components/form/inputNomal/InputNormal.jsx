import "../Input.css";

const InputNormal = ({ type, id, placeholder, value, className = "", onChange = () => { }, onInvalid = () => { }, onInput = () => { }, minLength }) => {

    return (
        <input type={type} className={className} id={id} placeholder={placeholder} minLength={minLength} onInvalid={(evt) => { onInvalid(evt) }} onInput={(evt) => { onInput(evt) }} required={true} value={value} onChange={(evt) => { evt.preventDefault(); onChange(evt) }} />
    );
}

export default InputNormal;