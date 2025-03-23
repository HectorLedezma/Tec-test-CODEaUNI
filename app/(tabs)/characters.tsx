import { ScrollView, Image, StyleSheet, Platform, View, Text } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from 'react'
import SWText from '@/components/SWText';
import List from '@/components/List';
import NavMenu from '@/components/NavMenu';
import { FullScreen } from '@/components/FullScreen';
import Connection from '@/utils/ApiConnection.ts'
import Varios from '@/utils/Varios.ts'

export default function Characters() {
    const utils = new Varios();

    const [part,setPart] = useState("");

    const [data,setData] = useState([]);

    const update = (paramURI:string) =>{
        const con = new Connection();
        con.getCharacter(paramURI).then(dataP=>{
            setData(dataP);
        }).catch(error=>{
            console.log(error);
            setData([]);
        });
    }

    useEffect(()=>{
        update(part !== undefined? part:"");
    },[]);
//?page=2
  return (
    <FullScreen>
      <SWText>PERSONAJES</SWText>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={true}
      >
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
const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
        marginBottom: 10
      }
})