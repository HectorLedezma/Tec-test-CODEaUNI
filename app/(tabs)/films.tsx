import { ScrollView, Image, StyleSheet, Platform, View, Text } from 'react-native';
import { useState, useEffect } from 'react'
import { FullScreen } from '@/components/FullScreen';
import SWScreen from '@/components/SWScreen';
import List from '@/components/List';
import BackButton from  '@/components/BackButton';
import Connection from '@/utils/ApiConnection.ts'
import dictionary from '@/utils/dictionary.json'

export default function Films() {

    const [part,setPart] = useState("");

    const [data,setData] = useState([]);

    const translate = (data:[]) =>{
        let final = [];
        try{
            data.forEach((element)=>{
                //console.log("\n",element.title)
                element.title = dictionary.films[element.episode_id][element.title];
                //console.log("\n",element.title)
                final.push(element);
            });
        }catch(error:any){
            console.log("\nError en función: ",error)
            final = data;
        }
        return final;
    }

    const update = (paramURI:string) =>{
        const con = new Connection();
        con.getFilm(paramURI).then(dataP=>{
            setData(translate(dataP.results));
        }).catch(error=>{
            console.log("Error en recuperación: ",error);
            setData([]);
        });
    }

    useEffect(()=>{
        update(part)
    },[]);

  return (
      <SWScreen title="PELICULAS">
            <List data={data} page="films"/>
            <BackButton/>
      </SWScreen>
  );
}
