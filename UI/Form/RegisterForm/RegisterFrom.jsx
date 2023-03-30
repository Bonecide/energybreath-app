import { useForm } from "react-hook-form";
import { Button, View } from "react-native";
import Input from "../../Input/Input";
import { useSelector } from 'react-redux';
import CommonButton from "../../Buttons/CommonButton";
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from "../../../store/slices/userSlice";

export default function RegisterForm({  }) {

    const theme = useSelector((state) => state.theme.theme)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(setUser(data))
    dispatch(setAuth())
  };
  return (
    <View>
      <Input
        theme={theme}
        setValue={setValue}
        name="first_name"
        register={register}
        required
        error={errors.name}
        placeholder="Имя"
      />
      <Input
        theme={theme}
        setValue={setValue}
        name="last_name"
        register={register}
        required
        error={errors.last_name}
        placeholder="Фамилия"
      />
      <Input
        theme={theme}
        setValue={setValue}
        name="login"
        register={register}
        required
        error={errors.login}
        placeholder="Логин"
      />
      <Input
        theme={theme}
        setValue={setValue}
        name="password"
        register={register}
        required
        error={errors.password}
        placeholder="Пароль"
        secureTextEntry={true}
      />
      <Input
        theme={theme}
        setValue={setValue}
        name="re_password"
        register={register}
        required
        error={errors.re_password}
        placeholder="Повторите пароль"
        secureTextEntry={true}
      />
     <CommonButton style={{marginTop : 23}} onPress={handleSubmit(onSubmit)} >Зарегистрироваться</CommonButton>
    </View>
  );
}
