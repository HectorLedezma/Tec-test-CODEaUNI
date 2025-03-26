import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams,router } from 'expo-router';
import { useState, useEffect } from 'react'

import BackButton from  '@/components/BackButton';
import SWScreen from '@/components/SWScreen';
import SWText from '@/components/SWText';
import SWBox from "@/components/SWBox";
import Intro from "@/components/intro";
import SWButton from "@/components/SWButton";

import Connection from '@/utils/ApiConnection.ts'

import Varios from '@/utils/Varios.ts'

import dictionary from '@/utils/dictionary.json'

function Film(){

    const {id} = useLocalSearchParams<{ id: string }>()
    const [data,setData] = useState([]);
    const [chars,setChars] = useState([]);

    const utils = new Varios();

    const translate = (data:any) =>{
        let final = {};
        try{
            data.title = dictionary.films[data.episode_id][data.title];
            data.opening_crawl = dictionary.films[data.episode_id].opening_crawl;
        }catch(error:any){
            console.log("\nError en función: ",error)
        }
        final = data;
        return final;
    }


    useEffect(()=>{
        const con = new Connection();
        con.getFilm(id).then(dataP=>{
            setData(translate(dataP));
        }).catch(error=>{
            console.log(error);
            setData([]);
        });

    },[]);
    useEffect(() => {
        if (!data.characters) return;

        const con = new Connection();
        const fetchCharacters = async () => {
            try {
                const charactersList = await Promise.all(
                    data.characters.map(async (uri) => {
                        const char = await con.getAny(uri);
                        return (

                            <SWButton key={char.name} onPress={()=>{
                                    const id = utils.getID(char.url);
                                    const page = "characters/"+id;
                                    router.navigate(page)
                                }}>
                                <Text key={char.name} style={[styles.Text]}>{char.name}</Text>
                            </SWButton>
                        );
                    })
                );
                setChars(charactersList);
            } catch (err) {
                console.log(err);
            }
        };

        fetchCharacters();
    }, [data]);



    return(
        <SWScreen title={data.title}>
            <View>
                <View>
                    <Intro>{data.opening_crawl}</Intro>
                </View>
                <SWBox Class="text">
                    <View>
                        <Text style={styles.Text}>{ "Dirección: "+data.director}</Text>
                        <Text style={styles.Text}>{ "Poducción: "+data.producer}</Text>
                        <Text style={styles.Text}>{ "Estreno: "+data.release_date}</Text>
                        <Text style={styles.Text}>{ "Personajes: "}</Text>
                        {chars}
                    </View>
                </SWBox>
            </View>
            <BackButton/>
        </SWScreen>
    )
}

const styles = StyleSheet.create({
    intro:{
        flex:1
    }
    ,Text:{
        fontSize:22,
        margin:10,
        color:"white"
    }
})

export default Film;