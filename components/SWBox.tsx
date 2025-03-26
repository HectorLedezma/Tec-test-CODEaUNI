import { PropsWithChildren,PropsWithRef } from "react";
import { StyleSheet, Text, View } from "react-native";

//type Props = PropsWithChildren<{}>
type Props = PropsWithRef<{}>

function SWBox({children,Class}:Props,){

    const getStyle = (Class : any) =>{
        return Class === undefined? "default" : "text";
    }

    return(
        <View style={[styles.container,styles[getStyle(Class)]]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        borderRadius:10,
        borderStyle:"solid",
        borderWidth:4,
        margin:5,
        color:"white"
    },
    default:{
        backgroundColor:"#7fa7fe7F",
        borderColor:"#0c55f5",
    },
    text:{
        backgroundColor:"#5252527F",
        borderColor:"#3f3a3a",
        marginBottom:"30%",
    }
  });

export default SWBox;