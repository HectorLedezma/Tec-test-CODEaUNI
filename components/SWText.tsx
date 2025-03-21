import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

type Props = PropsWithChildren<{}>

function SWText({children}:Props){
    return(
        <Text style={styles.textColor}>{children}</Text>
    )
}

const styles = StyleSheet.create({
  textColor:{
    color:"#ffc500",
    textAlign:"center",
    fontSize:60
  }
});

export default SWText;