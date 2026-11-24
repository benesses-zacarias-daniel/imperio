const ContainerDiv = ({ children, className = "", onClick = () => { }, id = "" }) => {

    return (
        <div className={className} id={id} onClick={(evt) => {
            onClick(evt);
        }}>
            {children}
        </div>
    )
}

export default ContainerDiv;