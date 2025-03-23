
class Varios{
    constructor(){}
    recortarString(texto: string, caracter: string) {
        //console.log("cortando: "+texto);
        const posicion = texto.indexOf(caracter);
        const result = posicion !== -1 ? texto.substring(posicion) : texto;
        //console.log("resultado: "+result);
        return result;
    }
    async EnToEs(texto: string) {
        const response = await fetch("https://libretranslate.com/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                q: texto,
                source: "en",
                target: "es",
                format: "text"
            })
        });
        const data = await response.json();
        return data.translatedText;
    }
}

export default Varios;