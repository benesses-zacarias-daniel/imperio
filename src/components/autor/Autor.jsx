import style from "./Autor.module.css";

const Autor = ({ dadosAutor }) => {
    console.log(dadosAutor);

    return (
        <div key={dadosAutor.id} className={style.area_autor}>
            <div className={style.info_autor}>
                {dadosAutor.textos[0]}
                <a href={dadosAutor.linkSobre} target="_blank" className={style.link_autor}>{dadosAutor.nomeAutor}</a>
                {dadosAutor.textos[1]}
            </div>
        </div>
    );
}


export default Autor;