import "../Input.css";

const InputFile = ({ type, id, className = "", onChange, value }) => {

    return (
        <input type={type} id={id} className={className} value={value} onChange={(evt) => { onChange(evt) }} hidden={true} accept="image/*" />
    );
}

export default InputFile;