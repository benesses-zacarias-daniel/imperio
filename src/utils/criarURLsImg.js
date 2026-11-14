const criarURLsImgs = (ficheito) => {

    const img = ficheito;
    if (img) {
        const urlPrev = URL.createObjectURL(img);
        return urlPrev;
    }

    return null;
}



export default criarURLsImgs;