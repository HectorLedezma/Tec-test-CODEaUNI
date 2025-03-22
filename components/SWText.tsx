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
    fontSize:50,
    transform:"perspective(200px) rotateX(40deg)",
    fontWidth:"600"
  }
});

export default SWText;