import React, { PropsWithChildren, PropsWithRef } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { router } from 'expo-router';
import SWButton from "./SWButton";

type Props = PropsWithRef<{}>

function NavMenu({prev, next}:Props){
    return(
        <View style={styles.menuContainer}>
            <SWButton onPress={()=>{
                    prev()
                }}>
                {"<"}
            </SWButton>
            <SWButton onPress={()=>{
                    next()
             }}>
                {">"}
            </SWButton>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer:{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin:10,
            marginBottom:60
        }
    });

export default NavMenu;