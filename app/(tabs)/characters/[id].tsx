import {StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams,router } from 'expo-router';
import { useState, useEffect } from 'react'

import SWScreen from '@/components/SWScreen';
import BackButton from  '@/components/BackButton';
import SWBox from "@/components/SWBox";
import SWButton from "@/components/SWButton";

import Connection from '@/utils/ApiConnection.ts'
import dictionary from '@/utils/dictionary.json'
import Varios from '@/utils/Varios.ts'

function Character(){
    const {id} = useLocalSearchParams<{ id: string }>()

    const utils = new Varios();

    const [data,setData] = useState([]);

    const getOneLink = async (link:string,con:any) =>{
        const result = await con.getAny(link);
        return result.name;
    }

    const getMultiLink = async (data:[],con:any) =>{
        return await Promise.all(data.map(async (link) => {
            const peli = await con.getAny(link);
            return (
                <SWButton key={peli.episode_id} onPress={()=>{
                    const id = utils.getID(peli.url);
                    const page = "films/"+id;
                    router.navigate(page);
                }}>
                    <Text key={peli.title}>{dictionary.films[peli.episode_id][peli.title]}</Text>
                </SWButton>
            );
        }));
    }

    const translate=(word:string)=>{
    }


    useEffect(()=>{
        const con = new Connection();
        con.getCharacter(id).then(async dataP => {
            dataP.mass = utils.translateOne(dataP.mass,"gender");
            dataP.hair_color = utils.translateMulti(dataP.hair_color.split(', '),"hair_colors");
            dataP.skin_color = utils.translateMulti(dataP.skin_color.split(', '),"skin_tones");
            dataP.eye_color = utils.translateMulti(dataP.eye_color.split(', '),"eye_colors");
            dataP.birth_year = utils.translateOne(dataP.birth_year,"gender");
            dataP.gender = utils.translateOne(dataP.gender,"gender");
            dataP.homeworld = await getOneLink(dataP.homeworld, con);
            dataP.homeworld = utils.translateOne(dataP.homeworld,"gender");
            console.log("Planeta:", dataP.homeworld);

            dataP.films = await getMultiLink(dataP.films, con);
            setData(dataP);

        }).catch(error => {
            console.log(error);
            setData([]);
        });
    }, []);


    return(
        <SWScreen title={data.name}>
            <SWBox Class="text">
                <View>
                    <Text style={styles.Text}>{ "Altura: "+data.height +" Cm"}</Text>
                    <Text style={styles.Text}>{ "Peso: "+data.mass +" Kg"}</Text>
                    <Text style={styles.Text}>{ "Cabello: "+data.hair_color }</Text>
                    <Text style={styles.Text}>{ "Color de piel: "+data.skin_color }</Text>
                    <Text style={styles.Text}>{ "Ojos: "+data.eye_color }</Text>
                    <Text style={styles.Text}>{ "Nacimiento: "+data.birth_year }</Text>
                    <Text style={styles.Text}>{ "Genero: "+data.gender }</Text>
                    <Text style={styles.Text}>{ "Planeta natal: "+data.homeworld }</Text>
                    <Text style={styles.Text}>{ "Pleliculas: "}</Text>
                    <View>{data.films}</View>
                </View>
            </SWBox>
            <BackButton/>
        </SWScreen>
    )
}

const styles = StyleSheet.create({
    Text:{
        color:"white",
        fontSize:22,
        margin:10
    }
})

export default Character;