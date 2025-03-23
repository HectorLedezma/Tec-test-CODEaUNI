import React, { PropsWithChildren, PropsWithRef } from "react";
import {Alert,  StyleSheet, Text, View } from "react-native";
import SWBox from "./SWBox";

type Props = PropsWithRef<{}>

function SWList({data}:Props){

    const CreateList = (data:any) =>{
        let Element = [];
        try{
            data.forEach((item:any)=>{
                Element.push(
                    <SWBox key={("name" in item)? item.name : item.title}>
                        <Text style={styles.textElement}>{("name" in item)? item.name : item.title}</Text>
                    </SWBox>
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