const ContainerForm = ({ children, className = "", onSubtmit = () => { } }) => {

    return (
        <form className={className} onSubmit={(evt) => { onSubtmit(evt) }}>
            {children}
        </form>
    )
}

export default ContainerForm;