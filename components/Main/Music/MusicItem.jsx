import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from 'react-redux';


export default function MusicItem({item}) {
    const theme = useSelector((s) => s.theme.theme)
    return(
        <LinearGradient style={s(theme).container} colors={theme === 'dark' ? ['#8916FE','#CF03FE'] : ['white','white']}>
            <Image style={s(theme).image} source={require('../../../assets/musicBG/MusicBG1.png')}/>
        </LinearGradient>
    )
}

const s = (theme) => StyleSheet.create({
    container : {
        width : 106,
        height : 106,
        borderRadius : 999,
        padding : 10,
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 15,
        elevation : theme === 'light' ?  2 : 0,
        shadowColor :  theme === 'light' && 'rgba(0, 0, 0, 0.25)',
        shadowOffset : {height : 0, width : 8},
        shadowOpacity : theme ==='light' ? 1 : 0,
        shadowRadius : 6
    },
    image : {
        width : 95,
        resizeMode : 'cover',
        height : 95,
        borderRadius : 999,
     
    }
})