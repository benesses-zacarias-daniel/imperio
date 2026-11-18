import "../Input.css";

const Textarea = ({ id, className = "", placeholder = "", value, onChange = () => { } }) => {
    return (
        <textarea id={id} className={className} placeholder={placeholder} required={true} value={value} onChange={(evt) => { onChange(evt); }} />
    );
};

export default Textarea;