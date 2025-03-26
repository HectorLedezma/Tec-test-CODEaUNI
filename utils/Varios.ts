
class Varios{
    constructor(){}
    recortarString(texto: string, caracter: string) {
        //console.log("cortando: "+texto);
        const posicion = texto.indexOf(caracter);
        const result = posicion !== -1 ? texto.substring(posicion) : texto;
        //console.log("resultado: "+result);
        return result;
    }
    getID = (str:string)=>{
        const largo = str.length;
        const pl = str.length-3;
        const ls = str.length-1;
        return str.slice(pl,ls);
    }
    async EnToEs(texto: string) {
        try {
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
            console.log("Respuesta de la API:", data);

            return data.translatedText || "Error: No se pudo traducir";
        } catch (error) {
            console.error("Error en la traducción:", error);
            return "Error en la traducción";
        }
    }
}

export default Varios;