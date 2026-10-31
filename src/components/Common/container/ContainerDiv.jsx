const ContainerDiv = ({ children, className = "", click = () => { }, id = "" }) => {

    return (
        <div className={className} id={id} onClick={(evt) => {
            click(evt);
        }}>
            {children}
        </div>
    )
}

export default ContainerDiv;