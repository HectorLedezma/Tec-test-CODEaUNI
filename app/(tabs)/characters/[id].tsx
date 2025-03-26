import {StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react'

import SWScreen from '@/components/SWScreen';
import BackButton from  '@/components/BackButton';
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
                    <Text style={styles.Text}>{ "Altura: "+data.height +" Cm"}</Text>
                    <Text style={styles.Text}>{ "Peso: "+data.mass +" Kg"}</Text>
                    <Text style={styles.Text}>{ "Cabello: "+data.hair_color }</Text>
                    <Text style={styles.Text}>{ "Color de piel: "+data.skin_color }</Text>
                    <Text style={styles.Text}>{ "Ojos: "+data.eye_color }</Text>
                    <Text style={styles.Text}>{ "Nacimiento: "+data.birth_year }</Text>
                    <Text style={styles.Text}>{ "Genero: "+data.gender }</Text>

                    {/*
                        <Text>{JSON.stringify(data)}</Text>
                    <Text style={styles.Text}>{ "Periodo orbital: "+data.orbital_period +" días" }</Text>
                    <Text style={styles.Text}>{ "Diametro: "+data.diameter +" Km" }</Text>
                    <Text style={styles.Text}>{ "Clima: "+data.climate }</Text>
                    <Text style={styles.Text}>{ "Gravedad: "+data.gravity }</Text>
                    <Text style={styles.Text}>{ "Terreno: "+data.terrain }</Text>
                    <Text style={styles.Text}>{ "Aguas superficiales: "+data.surface_water +" Km³ " }</Text>
                    <Text style={styles.Text}>{ "Población: "+data.population +" habitantes" }</Text>*/}
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