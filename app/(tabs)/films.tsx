import { ScrollView, Image, StyleSheet, Platform, View, Text } from 'react-native';
import { useState, useEffect } from 'react'
import { FullScreen } from '@/components/FullScreen';
import SWText from '@/components/SWText';
import List from '@/components/List';
import Connection from '@/utils/ApiConnection.ts'
import Varios from '@/utils/Varios.ts'

export default function Films() {

    const utils = new Varios();

    const [part,setPart] = useState("");

    const [data,setData] = useState([]);

    const translate = async (data:any[]) =>{

        let final = [];
        let results = data.results;
        try{
            await results.forEach((element)=>{
                element.title = utils.EnToEs(element.title);
                element.opening_crawl = utils.EnToEs(element.opening_crawl);
                //console.log(element);
                final.push(element);
            });
            data.results = final;
        }catch(error:any){
            console.log("\nError en función: ",error)
        }
        return data;
    }

    const update = (paramURI:string) =>{
        const con = new Connection();
        con.getFilm(paramURI).then(dataP=>{
            translate(dataP).then(dataT=>{
                setData(dataT);
            }).catch(error=>{
                console.log("\nError en traducción: ",error);
                setData([]);
            });
        }).catch(error=>{
            console.log("Error en recuperación: ",error);
            setData([]);
        });
    }

    useEffect(()=>{
        update(part)
    },[]);

  return (
    <FullScreen>
      <SWText>Peliculas</SWText>
      <ScrollView>
        <List data={data.results}/>
      </ScrollView>
    </FullScreen>
  );
}
