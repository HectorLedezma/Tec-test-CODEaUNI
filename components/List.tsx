import React, { PropsWithChildren, PropsWithRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import SWBox from "./SWBox";

type Props = PropsWithRef<{}>

function SWList({data}:Props){

    const CreateList = (data:any) =>{
        var Element = [];
        data.forEach((item:any)=>{
            Element.push(
                <SWBox>
                    <Text style={styles.textElement}>{("name" in item)? item.name : item.title}</Text>
                </SWBox>
            )
        })
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
    marginTop:45
  },
  textElement:{
    textAlign:"center",
    fontSize:35,
    color:"#FFFF"
  }
});

export default SWList;