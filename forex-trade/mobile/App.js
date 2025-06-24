import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { auth } from "./services/firebase";
import LoginScreen from "./screens/LoginScreen";
import Dashboard from "./screens/MobileDashboard";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {user ? <Dashboard /> : <LoginScreen />}
    </View>
  );
}