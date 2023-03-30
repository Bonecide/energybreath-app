
import CoursesCard from "../components/Courses/UI/CoursesCard";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllCourses from "../components/Courses/AllCourses/AllCourses";
import Course from "../components/Courses/Course/Course";


const Stack = createNativeStackNavigator() 
export default function CoursesPage() {
 
  return (
    
      <Stack.Navigator screenOptions={{
        headerShown : false,
        presentation : 'card'
      }}>
        <Stack.Screen  name="AllCourses" component={AllCourses}/>
        <Stack.Screen name="Course" component={Course} />
      </Stack.Navigator>
    
  );
}
