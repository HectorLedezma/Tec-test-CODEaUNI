import { FullScreen } from '@/components/FullScreen';
import SWText from '@/components/SWText';
import SWButton from '@/components/SWButton';
import { router } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, Alert } from 'react-native';
//import FastImage from 'react-native-fast-image';

export default function HomeScreen() {

  return (
    <FullScreen>
      <Image source={
          {
              uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png'
          }
      } style={styles.imageLogo} alt="logo"/>
      <SWText>Enciclopedia</SWText>
      <View style={styles.menuContainer}>
        <View>
            <SWButton onPress={() =>
                    router.navigate('characters')
                }>
                PERSONAJES
            </SWButton>
        </View>
        <View>
            <SWButton onPress={() =>
                     router.navigate('planets')
                 }>
                PLANETAS
            </SWButton>
        </View>
        <View>
            <SWButton onPress={() =>
                 router.navigate('films')
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
        height:"60%",
        justifyContent: "space-evenly", // Distribuye los elementos de manera uniforme
        //backgroundColor:"red"
    },
    imageLogo: {
        width: "100%",
        height: "25%",
        justifyContent:"center"
  },
})