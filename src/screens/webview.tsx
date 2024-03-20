import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "types";
import WebView from "react-native-webview";

function Webview({
  route,
}: NativeStackScreenProps<RootStackParamList, "Webview">) {
  const { uri } = route.params;
  return <WebView source={{ uri }} />;
}

export default Webview;
