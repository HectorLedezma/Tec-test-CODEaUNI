import { router } from 'expo-router';
import SWButton from "./SWButton";
import { StyleSheet, View } from "react-native"

function BackButton(){
    return(
        <View style={[styles.boton]}>
            <SWButton
                onPress={()=>{router.back()}}
            >Volver</SWButton>
        </View>
    )
}

const styles = StyleSheet.create({
    boton:{
        marginBottom:"30%",
    },
})

export default BackButton;