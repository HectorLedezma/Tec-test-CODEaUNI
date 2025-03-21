import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = PropsWithChildren<{}>


function SWBox({children}:Props){
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#7fa7fe7F",
        padding:5,
        borderRadius:10,
        borderColor:"#0c55f5",
        borderStyle:"solid",
        borderWidth:4,
        margin:5
    }
  });

export default SWBox;