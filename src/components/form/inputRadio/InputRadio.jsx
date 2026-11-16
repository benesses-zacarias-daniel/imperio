import "../Input.css";

const InputRadio = ({ type, id, name, value, className = "", checked, onChange = () => { } }) => {

    return (
        <input type={type} className={className} name={name} id={id} checked={checked} required={true} value={value} onChange={(evt) => { onChange() }} />
    );
}

export default InputRadio;