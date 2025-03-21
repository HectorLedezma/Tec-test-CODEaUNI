import React, { PropsWithChildren, PropsWithRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import SWBox from "./SWBox";

type Props = PropsWithRef<{}>

function SWList(props:Props){

    const CreateList = (data:[]) =>{
        
    }

    return(
        <View style={styles.listContainer}>
            <SWBox>
                <Text style={styles.textElement}>{"Tatooine"}</Text>
            </SWBox>
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