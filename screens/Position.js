import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";

export function Position1() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.parent}>
        <View style={styles.pro}>{/* <Text>Hello World</Text> */}</View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.white}></View>
        <View style={styles.pro}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
        <View style={styles.child}></View>
        <View style={styles.pro}></View>
      </View>
        <Text style={styles.mode}>MY CHESSBOARD DESIGN</Text>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    //backgroundColor: "gray",
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
    
  },
  parent: {
    //backgroundColor: "#65656584",
    backgroundColor: "black",
    width: "100%",
    height: 400,
    //paddingTop: 15,
    //paddingRight: 0,
    flexWrap: "wrap-reverse",
  },
  child: {
    backgroundColor: "white",
    width: 45,
    height: 45,
    //margin: 15,
    //marginBottom: 6
    //position: "absolute",
    //bottom: 0,
    // right: 0
  },
  pro: {
    backgroundColor: "black",
    width: 45,
    height: 45,
    marginBottom: 10,
  },
  mode: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
  },
});
