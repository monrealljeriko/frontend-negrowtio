import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Successful = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.successful}>
      <Image
        style={[styles.successfulChild, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Image
        style={styles.successfulItem}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <View style={styles.submited}>
        <Text style={[styles.submittedSuccessfully, styles.doneTypo]}>
          Submitted Successfully
        </Text>
        <Text
          style={[styles.subloremIpsumDolor, styles.doneTypo]}
        >{`SubLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore `}</Text>
      </View>
      <Pressable
        style={[styles.submit, styles.submitLayout]}
        onPress={() => navigation.navigate("Welcome")}
      >
        <View style={[styles.submitChild, styles.submitLayout]} />
        <Text style={[styles.done, styles.doneTypo]}>Done</Text>
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    top: 0,
    left: 0,
  },
  doneTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  submitLayout: {
    height: 48,
    width: 244,
    position: "absolute",
  },
  groupChildLayout: {
    height: 100,
    width: 100,
    position: "absolute",
  },
  successfulChild: {
    width: 428,
    height: 397,
    left: 0,
    position: "absolute",
  },
  successfulItem: {
    top: 366,
    width: 429,
    height: 560,
    left: 0,
    position: "absolute",
  },
  submittedSuccessfully: {
    fontSize: FontSize.size_9xl,
    lineHeight: 37,
    color: Color.colorSlategray,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    width: 381,
    left: 0,
    top: 0,
  },
  subloremIpsumDolor: {
    top: 53,
    left: 17,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    width: 331,
    color: Color.colorSlategray,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  submited: {
    top: 568,
    left: 31,
    height: 113,
    width: 381,
    position: "absolute",
  },
  submitChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: "#4bb543",
    left: 0,
    top: 0,
  },
  done: {
    top: 14,
    left: 100,
    fontSize: FontSize.size_base,
    lineHeight: 21,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  submit: {
    top: 754,
    left: 92,
  },
  groupChild: {
    borderRadius: 59,
    backgroundColor: "#cadcef",
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: "81.91%",
    width: "81.91%",
    top: "9%",
    right: "9.09%",
    bottom: "9.09%",
    left: "9%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 461,
    left: 172,
  },
  successful: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Successful;
