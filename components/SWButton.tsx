import SWBox from "./SWBox";
import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text,View } from "react-native";

type Props = PropsWithChildren<{}>

function SWButton({children, onPress}:Props){
    return(
        <Pressable onPress={onPress}  style={({ pressed }) => [pressed && styles.pressed]}>
            <SWBox>
                <View>
                    <Text style={styles.textColor}>{children}</Text>
                </View>
            </SWBox>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  textColor:{
    color:"#FFFFFF",
    textAlign:"center",
    fontSize:40,
  },
  pressed: {
    backgroundColor: "#ffffffB5", // Color más oscuro cuando se presiona
  }
});

export default SWButton