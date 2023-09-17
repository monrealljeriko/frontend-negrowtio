import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcome}>
      <View style={[styles.sanjose1Parent, styles.sanjose1Layout]}>
        <Image
          style={[styles.sanjose1Icon, styles.sanjose1Layout]}
          contentFit="cover"
          source={require("../assets/sanjose-1.png")}
        />
        <Image
          style={styles.removebgPreview2Icon}
          contentFit="cover"
          source={require("../assets/19removebgpreview-2.png")}
        />
      </View>
      <Pressable
        style={styles.welcomeChild}
        onPress={() => navigation.navigate("Login")}
      />
      <Text style={styles.welcomeToNegrowtio}>{`Welcome  to
NeGrowTio`}</Text>
      <Text style={styles.sanJoseBatangas}>{`San Jose Batangas Public Market 
Vendor and Community 
Credit Cooperative`}</Text>
      <Pressable
        style={[styles.notAMem, styles.notLayout]}
        onPress={() => navigation.navigate("PersonalInfo1")}
      >
        <View style={[styles.notAMemChild, styles.notLayout]} />
        <View style={styles.notAMemItem} />
        <Text style={[styles.notAMember, styles.login1Typo]}>
          Not a member?
        </Text>
      </Pressable>
      <Pressable
        style={[styles.login, styles.loginLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        <LinearGradient
          style={[styles.wrapper, styles.loginLayout]}
          locations={[0, 0]}
          colors={["#57708c", "#57708c"]}
        >
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("Login")}
          />
        </LinearGradient>
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sanjose1Layout: {
    height: 400,
    width: 427,
    top: 0,
    position: "absolute",
  },
  notLayout: {
    height: 48,
    width: 217,
    position: "absolute",
  },
  login1Typo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    letterSpacing: 1.3,
    top: 14,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  loginLayout: {
    width: 155,
    height: 48,
    position: "absolute",
  },
  sanjose1Icon: {
    left: 0,
  },
  removebgPreview2Icon: {
    left: 4,
    width: 423,
    height: 201,
    top: 0,
    position: "absolute",
  },
  sanjose1Parent: {
    left: 1,
  },
  welcomeChild: {
    top: 361,
    borderRadius: 38,
    width: 428,
    height: 570,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  welcomeToNegrowtio: {
    top: 476,
    left: 59,
    fontSize: 47,
    lineHeight: 63,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: "#b2d19a",
    textAlign: "center",
    position: "absolute",
  },
  sanJoseBatangas: {
    top: 614,
    left: 79,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorSlategray,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  notAMemChild: {
    backgroundColor: Color.colorSlategray,
    borderRadius: Border.br_6xl,
    left: 0,
    top: 0,
  },
  notAMemItem: {
    top: 2,
    width: 215,
    height: 44,
    borderRadius: Border.br_6xl,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  notAMember: {
    left: 51,
    width: 157,
    color: Color.colorSlategray,
  },
  notAMem: {
    left: 163,
    top: 711,
  },
  pressable: {
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: Border.br_6xl,
    width: "100%",
  },
  wrapper: {
    left: 0,
    top: 0,
  },
  login1: {
    left: 19,
    color: Color.colorWhite,
    width: 110,
  },
  login: {
    left: 50,
    top: 711,
  },
  welcome: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Welcome;
