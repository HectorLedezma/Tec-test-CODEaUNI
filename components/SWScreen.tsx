import { ScrollView, Image, StyleSheet, View, Text } from 'react-native';
import { FullScreen } from '@/components/FullScreen';
import { PropsWithRef } from "react";
import SWBox from '@/components/SWBox';
import SWText from '@/components/SWText';

type Props = PropsWithRef<{}>

function SWScreen({children,title}:Props){
    return(
        <FullScreen>
              <SWText>{title}</SWText>
                <ScrollView style={styles.children}>
                    {children}
              </ScrollView>
        </FullScreen>
    )
}
const styles = StyleSheet.create({
    children:{
        marginBottom:0,
    }
})

export default SWScreen;