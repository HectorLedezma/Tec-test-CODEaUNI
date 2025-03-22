import { FullScreen } from '@/components/FullScreen';
import SWText from '@/components/SWText';
import List from '@/components/List';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import Connection from '@/utils/ApiConnection.ts'
import { useState, useEffect } from 'react'

export default function Characters() {

    const [data,setData] = useState([]);
    const [param, setParam] = useState("");

    useEffect(()=>{
        const con = new Connection();
        con.getCharacter(param).then(dataP=>{
            setData(dataP.results);
        }).catch(error=>{
            console.log(error);
            setData([]);
        });
    },[]);

  return (
    <FullScreen>
      <SWText>PERSONAJES</SWText>
      <List data={data}/>
    </FullScreen>
  );
}
