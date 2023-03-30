import { StyleSheet, TextInput, View } from "react-native";


export default function Input({theme = 'light',setValue,placeholder,style,error,required,register,name,...props}) {

    return(
        <View style={s(theme,error).container}>
            <TextInput
                placeholderTextColor={error ? 'red' : (theme === 'light' ? 'black' : 'white')}
                placeholder={placeholder}
                 style={[s(theme,error).input,style]}
                 onChangeText={text => setValue(name, text)}
                 ref={register(name, { required: !!required  })}
                 {...props}
            />
        </View>
    )
}

const s = (theme,error) => StyleSheet.create({
    
    container : {

    },
    input : {
        padding : 15,
        color : error ? 'red' : (theme === 'light' ? 'black' : 'white'),
        fontFamily : 'Gilroy-400',
        fontSize : 24,
        borderBottomColor :error ? 'red' : ( theme === 'light' ? 'black' : 'white'),
        borderBottomWidth : 1,
        marginVertical : 25,
    }
})