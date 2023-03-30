import { SafeAreaView } from "react-native";
import Layout from "../../Layout/Layout";
import CoursesCard from "../UI/CoursesCard";

export default function AllCourses() {
  const data = [
    {
      id: 1,
      title: "Курс Энергодыхания 1",
      progress: 87,
    },
    {
      id: 2,
      title: "Курс Энергодыхания 2",
      progress: 100,
    },
    {
        id: 3,
        title: "Курс Энергодыхания 2",
        progress: 19,
      },
  ];
  return (
    <Layout>
      <SafeAreaView style={{ paddingHorizontal: 20, marginTop: 30 }}>
        {data.map((info) => (
          <CoursesCard key={info.id} data={info} />
        ))}
      </SafeAreaView>
    </Layout>
  );
}
