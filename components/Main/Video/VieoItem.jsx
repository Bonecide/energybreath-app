import { StyleSheet, Text } from "react-native";
import { ImageBackground, View } from "react-native";



    export default function VideoItem({item}) {


        return(
            <ImageBackground resizeMode="cover" style={s.container} source={require('../../../assets/videoBG/VideoBG1.png')}>
                    <View>
                        <Text style={s.title}>
                            {item.title}
                        </Text>
                        <Text style={s.desc}>
                            {item.desc}
                        </Text>
                    </View>
            </ImageBackground>
        )
    }

    const s = StyleSheet.create({


        container : {
            width : 141,
            height : 201,
            marginRight : 20,
            borderRadius : 20,
            justifyContent : 'flex-end',
            paddingHorizontal : 7,
            paddingVertical : 10,

        },
        title : {
            marginBottom : 5,
            fontFamily : 'Gilroy-700',
            fontSize : 12,
            color : 'white',

        },
        desc : {
            fontFamily : 'Gilroy-400',
            fontSize : 12,
            color : 'white',
        }
    })