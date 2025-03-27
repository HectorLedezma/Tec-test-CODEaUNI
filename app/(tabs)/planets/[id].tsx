import {StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react'

import SWScreen from '@/components/SWScreen';
import BackButton from  '@/components/BackButton';
import SWBox from "@/components/SWBox";
import Connection from '@/utils/ApiConnection.ts'
import Varios from '@/utils/Varios.ts'

function Planet(){
    const {id} = useLocalSearchParams<{ id: string }>()
    const [data,setData] = useState([]);

    const utils = new Varios();

    useEffect(()=>{
        const con = new Connection();
        con.getPlanet(id).then(dataP=>{
            dataP.rotation_period = utils.translateOne(dataP.rotation_period,"biomes");
            dataP.orbital_period = utils.translateOne(dataP.orbital_period,"biomes");
            dataP.diameter = utils.translateOne(dataP.diameter,"biomes");
            dataP.climate = utils.translateMulti(dataP.climate.split(', '),"climates");
            dataP.gravity = utils.translateOne(dataP.gravity,"biomes");
            dataP.terrain = utils.translateMulti(dataP.terrain.split(', '),"biomes");
            dataP.population = utils.translateOne(dataP.population,"biomes");
            dataP.surface_water = utils.translateOne(dataP.surface_water,"biomes");
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
                    <Text style={styles.Text}>{ "Periodo de rotación: "+data.rotation_period +" hrs"}</Text>
                    <Text style={styles.Text}>{ "Periodo orbital: "+data.orbital_period +" días" }</Text>
                    <Text style={styles.Text}>{ "Diametro: "+data.diameter +" Km" }</Text>
                    <Text style={styles.Text}>{ "Clima: "+data.climate }</Text>
                    <Text style={styles.Text}>{ "Gravedad: "+data.gravity }</Text>
                    <Text style={styles.Text}>{ "Terreno: "+data.terrain }</Text>
                    <Text style={styles.Text}>{ "Aguas superficiales: "+data.surface_water +" Km³ " }</Text>
                    <Text style={styles.Text}>{ "Población: "+data.population +" de habitantes" }</Text>
                </View>
            </SWBox>
            <BackButton/>
        </SWScreen>
    )
}

const styles = StyleSheet.create({
    Text:{
        fontSize:22,
        margin:10,
        color:"white"
    }
})

export default Planet;