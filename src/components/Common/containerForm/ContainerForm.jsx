const ContainerForm = ({ children, className = "", onSubmit = () => { } }) => {

    return (
        <form className={className} onSubmit={(evt) => { onSubmit(evt) }}>
            {children}
        </form>
    )
}

export default ContainerForm;