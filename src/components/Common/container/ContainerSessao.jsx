const ContainerSessao = ({ children, className = "" }) => {
    return (
        <section className={className}>
            {children}
        </section>
    )
}

export default ContainerSessao;