import React, { PropsWithChildren, PropsWithRef } from "react";
import {Alert,  StyleSheet, Text, View } from "react-native";
import { router } from 'expo-router';
import SWButton from "./SWButton";
import Varios from '@/utils/Varios.ts'

type Props = PropsWithRef<{}>

function SWList({data,page}:Props){
    const utils = new Varios();

    const CreateList = (data:any) =>{
        let Element = [];
        try{
            data.forEach((item:any)=>{
                Element.push(
                    <SWButton key={("name" in item)? item.name : item.title} onPress={()=>{
                            let id = utils.getID(item.url);
                            router.navigate(page+"/"+id)
                        }}>
                        <Text style={styles.textElement}>{("name" in item)? item.name : item.title}</Text>
                    </SWButton>
                )
            })
        }catch(error:any){
            console.log(error)
        }

        return Element;
    }

    return(
        <View style={styles.listContainer}>
            {CreateList(data)}
        </View>
    )
}

const styles = StyleSheet.create({
  listContainer:{
    flexGrow: 1,
    marginTop:30,
    marginBottom:10,
    paddingBottom:50
  },
  textElement:{
    textAlign:"center",
    fontSize:35,
    color:"#FFFF"
  }
});

export default SWList;