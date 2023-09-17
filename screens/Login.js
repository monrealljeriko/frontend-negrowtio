import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Image
        style={[styles.loginChild, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/group-49.png")}
      />
      <Text style={styles.helloWelcomeBack}>{`Hello,
welcome back`}</Text>
      <Text style={[styles.forgotPassword, styles.rememberMeTypo]}>
        Forgot password ?
      </Text>
      <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
        Remember me
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <LinearGradient
          style={[styles.groupChild, styles.groupChildLayout]}
          locations={[0, 0]}
          colors={["#57708c", "#57708c"]}
        />
        <Text style={[styles.login1, styles.backTypo]}>Login</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.groupItem} />
        <Text style={[styles.emailOrUsername, styles.backTypo]}>
          Email or username
        </Text>
      </Pressable>
      <Text style={[styles.forgotPassword, styles.rememberMeTypo]}>
        Forgot password ?
      </Text>
      <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
        Remember me
      </Text>
      <Pressable
        style={styles.backWrapper}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.groupItem} />
        <Text style={[styles.emailOrUsername, styles.backTypo]}>Password</Text>
      </Pressable>
      <Image
        style={styles.loginItem}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    top: 0,
  },
  rememberMeTypo: {
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 48,
    width: 166,
    position: "absolute",
  },
  backTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleLayout: {
    height: 80,
    left: 49,
    width: 331,
    position: "absolute",
  },
  loginChild: {
    width: 537,
    height: 401,
    position: "absolute",
  },
  helloWelcomeBack: {
    top: 303,
    left: 103,
    fontSize: FontSize.size_9xl,
    lineHeight: 37,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorSlategray,
    textAlign: "center",
    position: "absolute",
  },
  forgotPassword: {
    top: 624,
    left: 237,
    textAlign: "left",
  },
  rememberMe: {
    top: 623,
    left: 76,
    textAlign: "left",
  },
  groupChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  login1: {
    top: 14,
    left: 21,
    color: Color.colorWhite,
    width: 118,
    letterSpacing: 1.3,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  rectangleParent: {
    top: 710,
    left: 214,
  },
  groupItem: {
    top: 32,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorSlategray,
    borderWidth: 2,
    width: 331,
    height: 48,
    left: 0,
    position: "absolute",
  },
  emailOrUsername: {
    color: Color.colorBlack,
    width: 229,
    letterSpacing: 1.3,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  rectangleGroup: {
    top: 434,
  },
  back: {
    color: Color.colorDarkslateblue_100,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  backWrapper: {
    top: 723,
    left: 106,
    width: 41,
    height: 21,
    position: "absolute",
  },
  rectangleContainer: {
    top: 529,
  },
  loginItem: {
    top: 628,
    left: 59,
    width: 9,
    height: 9,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Login;
