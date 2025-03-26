import { PropsWithRef, useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

type Props = PropsWithRef<{ children: string }>;

function Intro({ children }: Props) {
  const introStart = 0; // Ajuste de posición inicial
  const translateY = useRef(new Animated.Value(introStart)).current;

  useEffect(() => {
    const animateSequence = Animated.sequence([
      Animated.timing(translateY, {
        toValue: -660, // Ajuste para que salga completamente
        duration: 30000,
        useNativeDriver: true, // Usa Native Driver para mejorar rendimiento
      }),
      Animated.timing(translateY, {
        toValue: introStart, // Reinicia la posición sin transición
        duration: 0,
        useNativeDriver: true,
      }),
    ]);

    Animated.loop(animateSequence).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedContainer,
          { transform: [{ translateY }] },
        ]}
      >
        <Text style={styles.text}>{children}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#ffc500",
    textAlign: "center",
    fontSize: 17,
    margin: 0,
  },
  animatedContainer: {
    //backgroundColor: "#524d4d",
    position: "absolute",
    top:160
  },
  container: {
    height: 160, // Ajuste del área visible
    overflow: "hidden",
    alignItems: "center",
  },
});

export default Intro;
