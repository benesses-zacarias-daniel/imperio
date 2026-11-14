import style from "./Button.module.css";

const Button = ({ children, onClick, className, type = "button" }) => {
    return (
        <button onClick={() => { onClick(); }} type={type} className={`${style.estilo_padrao} ${className}`}>
            {children}
        </button>
    )
}

export default Button;