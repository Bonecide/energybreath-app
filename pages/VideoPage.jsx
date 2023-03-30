import Header from "../components/Layout/Header/Header";
import SwipeableModal from "../UI/Modal/SwipableModal";
import { SafeAreaView } from "react-native";
import VideoComponent from "../components/VideoComponent/VideoComponent";
export default function VideoPage() {
  
  return (
    <SafeAreaView>
      <Header videoPage={true} />
        <VideoComponent/>
       <SwipeableModal />
    </SafeAreaView>

  );
}

