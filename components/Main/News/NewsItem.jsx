import { StyleSheet } from "react-native";
import { Image, ImageBackground, Text, View } from "react-native";
import { useSelector } from 'react-redux';


export default function NewsItem({item}) {
    const theme = useSelector((s) => s.theme.theme)
    return (
        <View style={s(theme).container}>
            <Image style={s(theme).image} source={require(`../../../assets/newsBG/News1.png`)}/>
            <Text style={s(theme).title}>{item.title.toUpperCase()}</Text>
            <Text style={s(theme).read}>Читать</Text>
        </View>
    )
}

const s = (theme) => StyleSheet.create ({
    container : {
        marginRight : 18,
    },
    image : {
        width : 158,
        height : 145,
        resizeMode : 'contain',
        borderRadius : 20,

    },
    title : {
        fontFamily : 'Bebas',
        fontSize : 24,
        marginTop : 10,
        color : theme === 'light' ? 'black' : 'white',

    },
    read : {
        fontFamily : 'Gilroy-700',
        fontSize : 16,
        marginTop : 5,
        color : theme === 'light' ? '#C6C6C6' : '#BD00FF'
    }
})