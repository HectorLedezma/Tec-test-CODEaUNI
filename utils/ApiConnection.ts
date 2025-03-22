
import axios from 'axios';


const uri_docs = "https://swapi.py4e.com/api/";

class Connection{
    blog: never[];
    constructor(){
        this.blog = [];
    }

    async getCharacter(id:String){
        try {
            const response = await axios.get(uri_docs+'people/'+id);
            this.blog = response.data;
        } catch (error) {
            console.log(error);
        }
        return this.blog;
    }

    async getPlanet(id:String){
        try {
            const response = await axios.get(uri_docs+'planets/'+id);
            this.blog = response.data;
        } catch (error) {
            console.log(error);
        }
        return this.blog;
    }

    async getFilm(id:String){
        try {
            const response = await axios.get(uri_docs+'films/'+id);
            this.blog = response.data;
        } catch (error) {
            console.log(error);
        }
        return this.blog;
    }
}

export default Connection