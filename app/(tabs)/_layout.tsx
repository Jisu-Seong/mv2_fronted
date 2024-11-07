import { GestureHandlerRootView } from "react-native-gesture-handler";
import {Drawer} from 'expo-router/drawer';
import SigninPage from "../(signin)/signin";
import { View } from "@/components/Themed";

const isSignedin = true;

export default function Layout() {
  return (
    <GestureHandlerRootView style= {{flex: 1}}>
      {isSignedin ? (
        <Drawer>
        <Drawer.Screen 
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
        }}
         />
      </Drawer>
      ) : (
        <SigninPage />
      )}
    </GestureHandlerRootView>
  );
}