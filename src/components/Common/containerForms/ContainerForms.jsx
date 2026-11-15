const ContainerForm = ({ children, className = "", onSubtmit = () => { } }) => {

    return (
        <form className={className} onSubmit={() => { onSubtmit() }}>
            {children}
        </form>
    )
}

export default ContainerForm;