import style from "./Autor.module.css";

const Autor = ({ dadosAutor }) => {
    console.log(dadosAutor);

    return (
        dadosAutor.map((InfoAutor) => {
            return (
                <div key={InfoAutor.id} className={style.area_autor}>
                    <div className={style.info_autor}>
                        {InfoAutor.textos[0]}
                        <a href={InfoAutor.linkSobre} target="_blank" className={style.link_autor}>{InfoAutor.nomeAutor}</a>
                        {InfoAutor.textos[1]}
                    </div>
                </div>
            )
        })
    )
}


export default Autor;