import { FullScreen } from '@/components/FullScreen';
import SWText from '@/components/SWText';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { useState, useEffect } from 'react'

import Connection from '@/utils/ApiConnection.ts'
import List from '@/components/List';

export default function Films() {

    const [data,setData] = useState([]);
    const [param, setParam] = useState("");

    useEffect(()=>{
        const con = new Connection();
        con.getFilm(param).then(dataP=>{
            setData(dataP.results);
        }).catch(error=>{
            console.log(error);
            setData([]);
        });
    },[]);

  return (
    <FullScreen>
      <SWText>Films</SWText>
        <List data={data}/>
    </FullScreen>
  );
}
