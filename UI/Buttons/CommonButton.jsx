import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text } from "react-native";
import { useSelector } from 'react-redux';


export default function CommonButton({onPress,children,style,isBold}) {


    const theme = useSelector((s) => s.theme.theme)
    return(
        <Pressable onPress={onPress} style={({pressed}) => [s(theme).button, pressed && s(theme).pressed,style]} >
               <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={s(theme).container} colors={  theme === 'dark' ?['#6E1DD5','#5C0DF6','#BB04FD' ] : ['#FFB000','#FFB000']}>
                 <Text style={[s(theme).text, isBold && {fontFamily : 'Gilroy-700'}]}>
                {children}
                </Text>
               </LinearGradient>
        </Pressable>
    )
}

const s = (theme) => StyleSheet.create({

    button :{
        width : '100%',
        maxWidth : 330,
        height : 66,
    },
    pressed :{ 
        opacity : 0.7,
    },
    text : {
        fontFamily : 'Gilroy-400',
        color : theme === 'light' ? '#0E2B4F' : 'white',
        fontSize : 23,
    },
    container : {
        flex: 1,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center'
    }
}) 