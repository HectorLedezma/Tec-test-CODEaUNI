import { FullScreen } from '@/components/FullScreen';
import SWBox from '@/components/SWBox';
import SWText from '@/components/SWText';
import List from '@/components/List';
import { useState, useEffect } from 'react'
import { Image, StyleSheet, View, Text } from 'react-native';
import Connection from '@/utils/ApiConnection.ts'


export default function Planets() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        const con = new Connection();
        con.getPlanet("").then(dataP=>{
            setData(dataP.results);
        }).catch(error=>{
            console.log(error);
            setData([]);
        });
    },[]);
  return (
    <FullScreen>
      <SWText>PLANETAS</SWText>
      <List data={data}/>
    </FullScreen>
  );
}