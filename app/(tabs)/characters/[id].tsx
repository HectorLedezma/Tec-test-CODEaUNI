import {StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react'

import SWScreen from '@/components/SWScreen';

import SWBox from "@/components/SWBox";
import Connection from '@/utils/ApiConnection.ts'

function Character(){
    const {id} = useLocalSearchParams<{ id: string }>()
    const [data,setData] = useState([]);

    useEffect(()=>{
        const con = new Connection();
        con.getCharacter(id).then(dataP=>{
            setData(dataP);
        }).catch(error=>{
            console.log(error);
            setData([]);
        });
    },[]);

    return(
        <SWScreen title={data.name}>
            <SWBox Class="text">
                <View>
                    <Text>{JSON.stringify(data)}</Text>
                    {/*<Text style={styles.Text}>{ "Periodo de rotación: "+data.rotation_period +" hrs"}</Text>
                    <Text style={styles.Text}>{ "Periodo orbital: "+data.orbital_period +" días" }</Text>
                    <Text style={styles.Text}>{ "Diametro: "+data.diameter +" Km" }</Text>
                    <Text style={styles.Text}>{ "Clima: "+data.climate }</Text>
                    <Text style={styles.Text}>{ "Gravedad: "+data.gravity }</Text>
                    <Text style={styles.Text}>{ "Terreno: "+data.terrain }</Text>
                    <Text style={styles.Text}>{ "Aguas superficiales: "+data.surface_water +" Km³ " }</Text>
                    <Text style={styles.Text}>{ "Población: "+data.population +" habitantes" }</Text>*/}
                </View>
            </SWBox>
        </SWScreen>
    )
}

const styles = StyleSheet.create({
    Text:{
        fontSize:22,
        margin:10
    }
})

export default Character;