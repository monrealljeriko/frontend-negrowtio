import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Start = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.start}>
      <Text style={styles.manageYourLoans}>{`Manage
Your
Loans`}</Text>
      <Pressable
        style={[styles.getStarted, styles.getLayout]}
        onPress={() => navigation.navigate("Welcome")}
      >
        <View style={[styles.getStartedChild, styles.getPosition]} />
        <View style={styles.arrowArrowLeftLgParent}>
          <Image
            style={styles.arrowArrowLeftLg}
            contentFit="cover"
            source={require("../assets/arrow--arrow-left-lg.png")}
          />
          <Text style={[styles.getStarted1, styles.getPosition]}>
            Get Started
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  getLayout: {
    height: 48,
    width: 316,
  },
  getPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  manageYourLoans: {
    top: 350,
    left: 113,
    fontSize: 48,
    lineHeight: 64,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorSlategray,
    textAlign: "center",
    position: "absolute",
  },
  getStartedChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorSlategray,
    height: 48,
    width: 316,
  },
  arrowArrowLeftLg: {
    top: 4,
    left: 208,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  getStarted1: {
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  arrowArrowLeftLgParent: {
    top: 8,
    left: 42,
    width: 232,
    height: 32,
    position: "absolute",
  },
  getStarted: {
    top: 826,
    left: 57,
    position: "absolute",
  },
  start: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Start;
