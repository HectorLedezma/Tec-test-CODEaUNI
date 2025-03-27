import {Alert,  StyleSheet, Text, View, TextInput } from "react-native";
import { PropsWithRef } from "react";

import SearchIcon from '@mui/icons-material/Search';

type Props = PropsWithRef<{}>

function SearchInput({onChangeText}:Props){
    return(
        <View style={styles.inputContainer}>
            <TextInput onChangeText={onChangeText} style={styles.input} placeholder="Escribe el nombre de un personaje"/>

        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        height:"100%"
    },
    inputContainer:{
        backgroundColor:"rgba(248,248,248,50)",
        borderRadius:10,
        height:45,
        paddingLeft:10,
        marginTop:10
    }
})

export default SearchInput;