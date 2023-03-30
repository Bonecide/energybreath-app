import MaskedView from "@react-native-masked-view/masked-view";
import React from "react";
import { Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const GradientText = (props) => {

    
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={props.colors ? props.colors : ['black','white']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};
export default GradientText;