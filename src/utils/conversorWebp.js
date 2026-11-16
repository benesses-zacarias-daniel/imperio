
const conversorWebp = async (arquivo, { qualidade = 0.8, larguraMax = null } = {}) => {
    return new Promise((resolve, reject) => {
        if (!arquivo || !arquivo.type.startsWith("image/")) {
            reject(new Error("O ficheiro selecionado não é uma imagem válida."));
            return;
        }

        // 1. Define o nome final (adiciona _thum se já for .webp)
        const ultimoPonto = arquivo.name.lastIndexOf(".");
        const nomeBase = ultimoPonto !== -1 ? arquivo.name.substring(0, ultimoPonto) : arquivo.name;
        const extensao = ultimoPonto !== -1 ? arquivo.name.substring(ultimoPonto).toLowerCase() : "";

        const nomeFinal = extensao === ".webp"
            ? `${nomeBase}_thum.webp`
            : `${nomeBase}.webp`;

        // 2. Lê o ficheiro original
        const leitor = new FileReader();
        leitor.onload = (evento) => {
            const img = new Image();

            img.onload = () => {
                // 3. Calcula dimensões (mantendo proporção se larguraMax for passada)
                let largura = img.width;
                let altura = img.height;

                if (larguraMax && largura > larguraMax) {
                    altura = Math.round((altura * larguraMax) / largura);
                    largura = larguraMax;
                }

                // 4. Desenha no Canvas
                const canvas = document.createElement("canvas");
                canvas.width = largura;
                canvas.height = altura;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, largura, altura);

                // 5. Gera o Base64 (útil para localStorage/preview) e o File/Blob (útil para APIs/FormData)
                const base64 = canvas.toDataURL("image/webp", qualidade);

                canvas.toBlob(
                    (blob) => {
                        if (!blob) {
                            reject(new Error("Falha ao gerar o blob WebP."));
                            return;
                        }
                        const novoArquivo = new File([blob], nomeFinal, { type: "image/webp" });
                        resolve({
                            blob,
                            file: novoArquivo,
                            base64,
                            nomeFinal,
                        });
                    },
                    "image/webp",
                    qualidade
                );
            };

            img.onerror = () => reject(new Error("Erro ao carregar a imagem na memória."));
            img.src = evento.target.result;
        };

        leitor.onerror = () => reject(new Error("Erro ao ler o ficheiro."));
        leitor.readAsDataURL(arquivo);
    });
}

export default conversorWebp;