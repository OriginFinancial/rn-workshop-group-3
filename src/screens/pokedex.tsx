import { StatusBar } from "expo-status-bar";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackParamList } from "types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

function Pokedex({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Pokedex">) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => (
          <Button
            title={item.key}
            onPress={() => navigation.navigate("Pokemon", { id: item.key })}
          />
        )}
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

export default Pokedex;
