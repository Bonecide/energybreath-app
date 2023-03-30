
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import { Link } from '@react-navigation/native';

export default function ShortPublication({item}) {

    const theme = useSelector((s) => s.theme.theme )
    return(
        <View style={s(theme).container}>
            <Image source={require('../../../assets/MyPublication.png')} style={s(theme).image}/>
            <View style={s(theme).info}>
                    <Text style={s(theme).title}>{item.title}</Text>
                    <Text style={s(theme).description}>{item.description}</Text>
                    <Link to={'/publication'} style={s(theme).more}>Читать</Link>
            </View>
        </View>
    )
}

const width = Dimensions.get('window').width

const s = (theme) => StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginVertical : 30,
        alignItems : 'center',
        maxWidth : width-20,
        marginRight : 15,

    },
    image : {
        width : 158,
        height : 145,
        borderRadius : 20,
        marginRight : 15,

    },
    title : {
        fontFamily : 'Bebas-light',
        color : theme === 'light' ? '#0E2B4F' : 'white',
        fontSize : 24,

    },
    description : {
        marginTop : 4,
        fontFamily : 'Gilroy-400',
        fontSize : 16,
        color : theme === 'light' ? 'black' : 'white',

    },
    more : {
        fontFamily : 'Gilroy-700',
        fontSize : 16,
        color : '#C6C6C6',
        alignSelf : 'flex-end',
    },
    info : {
        width : '49%'
    }
})