import { View, StyleSheet, Dimensions } from "react-native";
import type { PropsWithChildren, ReactElement } from 'react';

type Props = PropsWithChildren<{}>

const { width, height } = Dimensions.get("window");

const generateStars = (count: number) => {
    return Array.from({ length: count }).map((_, index) => ({
        key: index.toString(),
        top: Math.random() * height,
        left: Math.random() * width,
    }));
};

const stars = generateStars(100); // Número de estrellas

export function FullScreen({children}:Props){
    return(
        <View style={styles.container}>
            {stars.map((star) => (
                <View key={star.key} style={[styles.star, { top: star.top, left: star.left }]}/>
            ))}
            <View>
                {children}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    fondo:{
        backgroundColor:"#000000",
        backgroundImage: "radial-gradient(white 1px, transparent 1px)",
        backgroundSize: "50px 30px",
        height:"100%"
    },
    container: {
        flex: 1,
        backgroundColor: "black",
        position: "relative",
        padding:"10%"
    },
    star: {
        position: "absolute",
        width: 2,
        height: 2,
        backgroundColor: "white",
        borderRadius: 1, // Para que sean más circulares
    },
});