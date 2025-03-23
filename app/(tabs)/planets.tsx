import { ScrollView, Image, StyleSheet, View, Text } from 'react-native';
import { FullScreen } from '@/components/FullScreen';
import { useState, useEffect } from 'react'
import SWBox from '@/components/SWBox';
import SWText from '@/components/SWText';
import List from '@/components/List';
import NavMenu from '@/components/NavMenu';
import Connection from '@/utils/ApiConnection.ts'
import Varios from '@/utils/Varios.ts'

export default function Planets() {
    const utils = new Varios();

    const [data,setData] = useState([]);
    const [part,setPart] = useState("");

    const update = (paramURI:string) =>{
        const con = new Connection();
        con.getPlanet(paramURI).then(dataP=>{
            setData(dataP);
        }).catch(error=>{
            console.log(error);
            setData([]);
        });
    }

    useEffect(()=>{
        update(part)
    },[]);
  return (
    <FullScreen>
      <SWText>PLANETAS</SWText>
      <ScrollView>
        <List data={data.results}/>
        <NavMenu prev={()=>{
                update(data.previous !== null? utils.recortarString(data.previous,"?"):"")
            }}
            next={()=>{
                update(data.next !== null? utils.recortarString(data.next,"?"):"")
            }}
        />
      </ScrollView>
    </FullScreen>
  );
}