import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Shares = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.shares}>
      <View style={styles.amountParent}>
        <Text style={styles.amount}>{`Amount `}</Text>
        <Text style={[styles.php5150700, styles.textTypo]}>Php 51,507.00</Text>
      </View>
      <View style={styles.sharesParent}>
        <Text style={styles.shares1}>Shares</Text>
        <Image
          style={styles.editAddPlusCircle}
          contentFit="cover"
          source={require("../assets/edit--add-plus-circle1.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupLayout2]} />
        <Pressable
          style={[styles.userUser02, styles.userLayout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/user--user-022.png")}
          />
        </Pressable>
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={[styles.groupItem, styles.groupLayout1]} />
          <Image
            style={[styles.interfaceCreditCard02, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/interface--credit-card-021.png")}
          />
          <Text style={styles.wallet}>Wallet</Text>
        </View>
        <Pressable
          style={styles.iconHomeOutline}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-home-outline1.png")}
          />
        </Pressable>
      </View>
      <Text style={styles.breakdwon}>Breakdwon</Text>
      <View style={[styles.parent, styles.groupLayout]}>
        <Text style={[styles.text, styles.textPosition]}>+2000</Text>
        <Text style={[styles.text1, styles.textPosition]}>06/20/2023</Text>
        <Text style={[styles.txt, styles.txtTypo]}>txt</Text>
        <Text style={[styles.txt1, styles.txtTypo]}>txt</Text>
        <Text style={[styles.txt1, styles.txtTypo]}>txt</Text>
      </View>
      <View style={[styles.group, styles.groupLayout]}>
        <Text style={[styles.text, styles.textPosition]}>+2000</Text>
        <Text style={[styles.text1, styles.textPosition]}>06/20/2023</Text>
        <Text style={[styles.txt, styles.txtTypo]}>txt</Text>
        <Text style={[styles.txt1, styles.txtTypo]}>txt</Text>
        <Text style={[styles.txt1, styles.txtTypo]}>txt</Text>
      </View>
      <Pressable
        style={styles.interfaceTrendingDown}
        onPress={() => navigation.navigate("Credit")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/interface--trending-down.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: 0,
    textAlign: "left",
  },
  groupChildLayout: {
    height: 68,
    width: 428,
    position: "absolute",
  },
  groupLayout2: {
    borderRadius: Border.br_3xs,
    left: 0,
  },
  userLayout: {
    height: 34,
    width: 26,
    position: "absolute",
  },
  groupLayout1: {
    width: 121,
    height: 68,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  groupLayout: {
    height: 39,
    width: 355,
    left: 39,
    position: "absolute",
  },
  textPosition: {
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
    color: Color.colorGray,
    top: 0,
    position: "absolute",
  },
  txtTypo: {
    top: 23,
    color: Color.colorBlack,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  amount: {
    left: 2,
    textAlign: "left",
    color: Color.colorGray,
    lineHeight: 32,
    letterSpacing: 1.9,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratRegular,
    top: 0,
    position: "absolute",
  },
  php5150700: {
    top: 32,
    lineHeight: 43,
    letterSpacing: 2.6,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    color: Color.colorGray,
    position: "absolute",
  },
  amountParent: {
    top: 161,
    left: 32,
    width: 254,
    height: 75,
    position: "absolute",
  },
  shares1: {
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 43,
    letterSpacing: 2.6,
    fontSize: FontSize.size_13xl,
    left: 0,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  editAddPlusCircle: {
    top: 4,
    left: 322,
    width: 36,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  sharesParent: {
    top: 64,
    width: 358,
    height: 43,
    left: 36,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorSlategray,
    height: 68,
    width: 428,
    position: "absolute",
    top: 0,
    borderRadius: Border.br_3xs,
  },
  userUser02: {
    left: 380,
    top: 15,
  },
  groupItem: {
    backgroundColor: Color.colorLightsteelblue,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  interfaceCreditCard02: {
    top: 16,
    left: 13,
    overflow: "hidden",
  },
  wallet: {
    top: 21,
    left: 47,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    width: 47,
    height: 18,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    left: 113,
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconHomeOutline: {
    left: "5.96%",
    top: "36.03%",
    right: "89.37%",
    bottom: "36.56%",
    width: "4.67%",
    height: "27.41%",
    position: "absolute",
  },
  rectangleParent: {
    top: 865,
    left: 0,
  },
  breakdwon: {
    top: 266,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 36,
    textAlign: "left",
    lineHeight: 32,
    letterSpacing: 1.9,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: 0,
    textAlign: "left",
  },
  text1: {
    left: 255,
    textAlign: "right",
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
  },
  txt: {
    left: 0,
  },
  txt1: {
    left: 251,
  },
  parent: {
    top: 322,
  },
  group: {
    top: 369,
  },
  interfaceTrendingDown: {
    left: 292,
    top: 879,
    width: 34,
    height: 31,
    position: "absolute",
  },
  shares: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default Shares;
