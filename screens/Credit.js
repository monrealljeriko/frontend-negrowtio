import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Credit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.credit}>
      <View style={styles.balanceParent}>
        <Text style={styles.balance}>Balance</Text>
        <Text style={[styles.text, styles.textTypo]}>300</Text>
      </View>
      <View style={styles.creditParent}>
        <Text style={styles.credit1}>Credit</Text>
        <Image
          style={styles.editAddPlusCircle}
          contentFit="cover"
          source={require("../assets/edit--add-plus-circle1.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <Pressable
          style={[styles.userUser02, styles.userLayout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/user--user-023.png")}
          />
        </Pressable>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupItem, styles.groupLayout1]} />
          <Pressable
            style={[styles.interfaceCreditCard02, styles.interfacePosition]}
            onPress={() => navigation.navigate("Loans")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/interface--credit-card-021.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.interfaceTrendingDown, styles.interfacePosition]}
            onPress={() => navigation.navigate("Credit")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/interface--trending-down.png")}
            />
          </Pressable>
          <Text style={styles.credits}>Credits</Text>
        </View>
        <Pressable
          style={styles.iconHomeOutline}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-home-outline1.png")}
          />
        </Pressable>
      </View>
      <Text style={styles.breakdwon}>Breakdwon</Text>
      <View style={[styles.parent, styles.groupLayout]}>
        <Text style={[styles.text1, styles.textPosition]}>+20</Text>
        <Text style={[styles.text2, styles.textPosition]}>06/20/2023</Text>
        <Text style={[styles.txt, styles.txtTypo]}>txt</Text>
        <Text style={[styles.txt1, styles.txtTypo]}>txt</Text>
        <Text style={[styles.txt1, styles.txtTypo]}>txt</Text>
      </View>
      <View style={[styles.group, styles.groupLayout]}>
        <Text style={[styles.text1, styles.textPosition]}>+2000</Text>
        <Text style={[styles.text2, styles.textPosition]}>06/20/2023</Text>
        <Text style={[styles.txt, styles.txtTypo]}>txt</Text>
        <Text style={[styles.txt1, styles.txtTypo]}>txt</Text>
        <Text style={[styles.txt1, styles.txtTypo]}>txt</Text>
      </View>
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
  rectangleLayout: {
    height: 68,
    position: "absolute",
  },
  groupLayout1: {
    borderRadius: Border.br_3xs,
    height: 68,
    top: 0,
    position: "absolute",
  },
  userLayout: {
    height: 34,
    width: 26,
  },
  interfacePosition: {
    top: 16,
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
  balance: {
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
  text: {
    top: 32,
    lineHeight: 43,
    letterSpacing: 2.6,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.colorGray,
    position: "absolute",
  },
  balanceParent: {
    top: 161,
    left: 32,
    width: 111,
    height: 75,
    position: "absolute",
  },
  credit1: {
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
  creditParent: {
    top: 64,
    width: 358,
    height: 43,
    left: 36,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorSlategray,
    width: 428,
    left: 0,
  },
  userUser02: {
    left: 366,
    top: 15,
    position: "absolute",
  },
  groupItem: {
    left: 80,
    backgroundColor: Color.colorLightsteelblue,
    width: 121,
  },
  interfaceCreditCard02: {
    height: 34,
    width: 26,
    left: 0,
  },
  interfaceTrendingDown: {
    left: 95,
    width: 34,
    height: 31,
  },
  credits: {
    top: 24,
    left: 135,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    width: 62,
    height: 18,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    left: 126,
    width: 201,
    top: 0,
    height: 68,
  },
  icon3: {
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
    width: 428,
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
  text1: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: 0,
    textAlign: "left",
  },
  text2: {
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
  credit: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default Credit;
