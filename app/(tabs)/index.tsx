import { FullScreen } from '@/components/FullScreen';
import SWText from '@/components/SWText';
import SWButton from '@/components/SWButton';
import { router } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, Alert } from 'react-native';

export default function HomeScreen() {
  return (
    <FullScreen>
      <SWText>Index</SWText>
      <View style={styles.menuContainer}>
        <View>
            <SWButton onPress={() =>
                    router.replace('characters')
                }>
                PERSONAJES
            </SWButton>
        </View>
        <View>
            <SWButton onPress={() =>
                     router.replace('planets')
                 }>
                PLANETAS
            </SWButton>
        </View>
        <View>
            <SWButton onPress={() =>
                 router.replace('films')
             }>
                PELICULAS
            </SWButton>
        </View>
      </View>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
    menuContainer:{
        height:"85%",
        justifyContent: "space-evenly", // Distribuye los elementos de manera uniforme
        //backgroundColor:"red"
    }
})