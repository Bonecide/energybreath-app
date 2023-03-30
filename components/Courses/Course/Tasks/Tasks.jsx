import { StyleSheet, Text, View } from "react-native";
import Title from './../../../../UI/Text/Title';
import TaskCard from "./TaskCard";


export default function Tasks() {

    const tasks = [{
        id : 1,
        title : 'Стакан воды',
        body : 'Выпейте стакан чистой воды, утром, натощак',
        isComplete : false,
    },
    {
        id : 2,
        title : 'Зарядка',
        body : 'Важно зарядиться положительными эмоциями',
        isComplete : false,
    },
    {
        id : 3,
        title : 'Дыхание',
        body : 'Выполните курс энергодыхания',
        isComplete : true,
    }]
    return(
        <View style={s.container}>

            <Title>Задачи</Title>

            <View>
                {tasks.map((info,idx) => {
                    
                    return (
                        <TaskCard key={info.id} info={info}/>
                    )
                })}
            </View>
        </View>

    )
}

const s = StyleSheet.create({
  
})