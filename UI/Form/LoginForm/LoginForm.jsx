import { useForm } from "react-hook-form";
import { Button, TextInput, View } from "react-native";
import Input from "../../Input/Input";
import CommonButton from './../../Buttons/CommonButton';
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from "../../../store/slices/userSlice";


export default function LoginForm({theme}) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        mode : 'all'
    });
    const dispatch = useDispatch()
    const onSubmit = data => {

        dispatch(setUser(data))
        dispatch(setAuth())
    };
    return(
        <View>
                <Input
                theme={theme}
                setValue={setValue}
                name='login'
                register={register}
                required
                error={errors.login}
                placeholder = 'Логин'
                />
                <Input
                 theme={theme}
                 setValue={setValue}
                 name='password'
                 register={register}
                 required
                 error={errors.password}
                 placeholder = 'Пароль'
                 secureTextEntry={true}
                />
                 <CommonButton style={{marginTop : 23}} onPress={handleSubmit(onSubmit)}>Вдох</CommonButton>
        </View>

    )
}   