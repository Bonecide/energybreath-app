import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from 'react-redux';


export default function FriendCard({item}) {

    const theme = useSelector((s) => s.theme.theme)
    return(
        <View style={s(theme).container}>

            <Image style={s(theme).image} source={require(`../../../assets/FriendImage.png`)}/>
            <Text style={s(theme).text}>{item.username.toUpperCase()}</Text>
        </View>
    )
}

const s = (theme) => StyleSheet.create({

    container : {
        marginRight : 17,
        alignItems : 'center',
    },
    image : {
        width : 80,
        height : 80,
        resizeMode : 'cover',
        borderRadius : 999
    },
    text : {
        marginTop : 20,
        fontFamily : 'Bebas-light',
        fontSize : 24,
        color : theme === 'dark' ? 'orange' : 'black',

    }
})