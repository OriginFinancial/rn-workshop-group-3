import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "types";

function Pokemon({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "Pokemon">) {
  const { id } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: id });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pokemon: {id}</Text>
      <Button
        title="Go to webview"
        onPress={() =>
          navigation.navigate("Webview", {
            uri: "https://br.search.yahoo.com/",
          })
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Pokemon;
