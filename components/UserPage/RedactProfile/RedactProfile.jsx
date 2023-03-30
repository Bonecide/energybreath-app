import UserLayout from "../UserLayout";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import Input from "../../../UI/Input/Input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import CommonButton from "../../../UI/Buttons/CommonButton";

export default function RedactProfile() {
  const theme = useSelector((s) => s.theme.theme);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <UserLayout title={"ЛИЧНЫЙ КАБИНЕТ"}>
      <Input
        setValue={setValue}
        name="first_name"
        register={register}
        required
        error={errors.name}
        placeholder="Имя"
        theme={theme}
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
      <View>
        <View style={s(theme).smallInputs}>
          <TextInput
            style={s(theme).smallInput}
            keyboardType="numeric"
            placeholder="число"
            maxLength={2}
            placeholderTextColor={"#B3B3B3"}
          />
          <TextInput
            style={s(theme).smallInput}
            keyboardType="numeric"
            placeholder="месяц"
            maxLength={2}
            placeholderTextColor={"#B3B3B3"}
          />
          <TextInput
            style={s(theme).smallInput}
            keyboardType="numeric"
            placeholder="год"
            maxLength={4}
            placeholderTextColor={"#B3B3B3"}
          />
        </View>
        <TextInput
          textAlignVertical="top"
          style={s(theme).bigInput}
          placeholderTextColor={"#B3B3B3"}
          placeholder="немного о себе"
          multiline
          numberOfLines={10}
        />
      </View>
      <View>
        <Input
          style={{marginTop : 50}}  
          theme={theme}
          setValue={setValue}
          name="login"
          register={register}
          required
          error={errors.login}
          placeholder="Логин"
        />
      </View>
      <Input
       style={{marginTop : 30}} 
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
      <CommonButton style={{alignSelf : 'center',marginVertical : 50}}>Сохранить</CommonButton>
    </UserLayout>
  );
}

const s = (theme) =>
  StyleSheet.create({
    smallInputs: {
      flexDirection: "row",
      marginTop: 30,
      justifyContent: "space-between",
      marginBottom: 27,
    },
    smallInput: {
      width: 92,
      height: 50,
      textAlign: "center",
      color: theme === "light" ? "black" : "white",
      borderRadius: 10,
      borderColor: "#C6C6C6",
      borderWidth: 1,
      fontFamily: "Gilroy-700",
      fontSize: 16,
    },
    bigInput: {
      paddingTop: 18,
      padding: 18,
      fontFamily: "Gilroy-700",
      fontSize: 16,
      color: theme === "light" ? "black" : "white",
      borderRadius: 10,
      borderColor: "#C6C6C6",
      borderWidth: 1,
      height: 158,
    },
  });
