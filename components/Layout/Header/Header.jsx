import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

export default function Header({videoPage}) {
  const user = useSelector((s) => s.user.user);
  const theme = useSelector((s) => s.theme.theme);
  let date = new Date();
  let hours = date.getHours();
  const getTime = () => {
    if (hours < 12 && hours > 4) {
        return 'Доброе утро'
    }
    else if (hours >= 12 && hours < 17) {
        return 'Добрый день'
    }
    else if (hours >=17 && hours < 21) {
        return 'Добрый вечер'
    }
    else if (hours >= 21 || hours < 4) {
        return 'Доброй ночи'
    }
  }
  return (
    <View style={s(theme,videoPage).container}>
      <View style ={s(theme,videoPage).mainInfo}>
        <Image style={s(theme,videoPage).image} source={require('../../../assets/Avatar.png')} />
        <View style={s(theme,videoPage).hello}>
            <Text style={s(theme,videoPage).username}>{user.login}</Text>
            <Text style={s(theme,videoPage).goodTime}>{getTime()}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={theme === 'light' && !videoPage ? require('../../../assets/LightSearch.png') : require('../../../assets/DarkSearch.png')}/>
      </TouchableOpacity>
    </View>
  );
}

const s = (theme,videoPage) => StyleSheet.create({

    container : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 30,
        position : videoPage ? 'absolute' : undefined, 
        top : videoPage ? 10 : 0,
        backgroundColor : 'transparent',
        zIndex : 3,

    },
    mainInfo : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    image : {
        width : 50,
        height : 50,
        resizeMode : 'cover',
        borderRadius : 900,

    },
    hello : {
        marginHorizontal : 15,

    },
    username : {
        fontFamily : 'Bebas',
        fontSize : 24,
        color : theme == 'light' && !videoPage? '#0E2B4F' : (theme === 'dark'? '#FFB000' : 'white'),
        marginBottom : 3,


    },
    goodTime : {
        fontFamily : 'Gilroy-700',
        fontSize : 14,
        color : theme === 'light' && !videoPage? '#B3B3B3' : 'white'
    }

})