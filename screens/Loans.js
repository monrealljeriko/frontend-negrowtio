import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Loans = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loans}>
      <View style={styles.balanceParent}>
        <Text style={[styles.balance, styles.balanceClr]}>Balance</Text>
        <Text style={[styles.php1150700, styles.overviewPosition]}>
          Php 11,507.00
        </Text>
      </View>
      <View style={styles.overviewParent}>
        <Text style={[styles.overview, styles.overviewTypo]}>Overview</Text>
        <Image
          style={styles.editAddPlusCircle}
          contentFit="cover"
          source={require("../assets/edit--add-plus-circle1.png")}
        />
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout1]}
        onPress={() => navigation.navigate("Total")}
      >
        <View style={[styles.groupChild, styles.groupChildBg]} />
        <Text style={[styles.totalLoans, styles.textClr]}>Total Loans</Text>
        <Text style={[styles.text, styles.textTypo]}>50,000.00</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout1]}
        onPress={() => navigation.navigate("Active")}
      >
        <View style={[styles.groupItem, styles.groupLayout1]} />
        <Text style={[styles.totalLoans, styles.textClr]}>Active Loans</Text>
        <Text style={[styles.text1, styles.text1Typo]}>+2</Text>
        <Text style={[styles.text2, styles.textPosition]}>5,000.00</Text>
        <Text style={[styles.text3, styles.textPosition]}>12/25</Text>
      </Pressable>
      <View style={[styles.rectangleContainer, styles.groupLayout1]}>
        <View style={[styles.groupInner, styles.groupLayout1]} />
        <Text style={[styles.totalLoans, styles.textClr]}>Overdue</Text>
        <Text style={[styles.text1, styles.text1Typo]}>+2</Text>
        <Text style={[styles.text5, styles.textPosition]}>25,500.00</Text>
        <Text style={[styles.text3, styles.textPosition]}>03/24</Text>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout1]}
        onPress={() => navigation.navigate("Shares")}
      >
        <View style={[styles.rectangleView, styles.groupLayout1]} />
        <Text style={[styles.totalLoans, styles.textClr]}>Shares</Text>
        <Text style={[styles.text1, styles.text1Typo]}>1251515215</Text>
        <Text style={[styles.text8, styles.textPosition]}>21,007.00</Text>
        <Text style={[styles.text3, styles.textPosition]}>05/25</Text>
      </Pressable>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <Pressable
          style={[styles.userUser02, styles.userLayout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/user--user-021.png")}
          />
        </Pressable>
        <View style={[styles.rectangleParent1, styles.groupChild2Layout]}>
          <View style={[styles.groupChild2, styles.groupChild2Layout]} />
          <Pressable
            style={[styles.interfaceCreditCard02, styles.interfacePosition]}
            onPress={() => navigation.navigate("Loans")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/interface--credit-card-022.png")}
            />
          </Pressable>
          <Text style={[styles.loans1, styles.text1Typo]}>Loans</Text>
        </View>
        <Pressable
          style={styles.iconHomeOutline}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-home-outline2.png")}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceClr: {
    color: Color.colorGray,
    textAlign: "left",
  },
  overviewPosition: {
    lineHeight: 43,
    letterSpacing: 2.6,
    fontSize: FontSize.size_13xl,
    left: 0,
    position: "absolute",
  },
  overviewTypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
  },
  groupChildLayout1: {
    height: 122,
    width: 356,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.colorSlategray,
    top: 0,
  },
  textClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  groupLayout1: {
    height: 146,
    width: 356,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  textPosition: {
    top: 104,
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    position: "absolute",
  },
  groupLayout: {
    height: 68,
    width: 428,
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_3xs,
    left: 0,
  },
  userLayout: {
    height: 34,
    width: 26,
  },
  groupChild2Layout: {
    width: 121,
    height: 68,
    top: 0,
    position: "absolute",
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
  balance: {
    left: 2,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 32,
    letterSpacing: 1.9,
    fontSize: FontSize.size_5xl,
    top: 0,
    position: "absolute",
  },
  php1150700: {
    top: 32,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    textAlign: "left",
    color: Color.colorGray,
  },
  balanceParent: {
    top: 161,
    left: 32,
    width: 248,
    height: 75,
    position: "absolute",
  },
  overview: {
    color: Color.colorDarkslateblue_200,
    lineHeight: 43,
    letterSpacing: 2.6,
    fontSize: FontSize.size_13xl,
    left: 0,
    position: "absolute",
    top: 0,
  },
  editAddPlusCircle: {
    top: 4,
    left: 322,
    width: 36,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  overviewParent: {
    top: 64,
    width: 358,
    height: 43,
    left: 36,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_mini,
    left: 0,
    height: 122,
    width: 356,
    position: "absolute",
  },
  totalLoans: {
    top: 24,
    left: 25,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 32,
    letterSpacing: 1.9,
    fontSize: FontSize.size_5xl,
  },
  text: {
    top: 72,
    left: 239,
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleParent: {
    top: 290,
    left: 36,
  },
  groupItem: {
    backgroundColor: "#90bb6f",
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  text1: {
    top: 70,
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
    left: 25,
  },
  text2: {
    left: 251,
    textAlign: "right",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  text3: {
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
  },
  rectangleGroup: {
    top: 436,
    left: 36,
  },
  groupInner: {
    backgroundColor: Color.colorIndianred,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  text5: {
    left: 241,
    textAlign: "right",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  rectangleContainer: {
    top: 606,
    left: 36,
  },
  rectangleView: {
    backgroundColor: "#535353",
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  text8: {
    left: 245,
    textAlign: "right",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  groupPressable: {
    top: 776,
    left: 36,
  },
  groupChild1: {
    height: 68,
    width: 428,
    position: "absolute",
    backgroundColor: Color.colorSlategray,
    top: 0,
  },
  userUser02: {
    left: 380,
    top: 15,
    position: "absolute",
  },
  groupChild2: {
    backgroundColor: Color.colorLightsteelblue,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  interfaceCreditCard02: {
    left: 13,
    height: 34,
    width: 26,
  },
  loans1: {
    top: 21,
    left: 47,
    fontSize: FontSize.size_xs,
    letterSpacing: 1,
    lineHeight: 16,
    display: "flex",
    alignItems: "center",
    width: 47,
    height: 18,
  },
  rectangleParent1: {
    left: 113,
  },
  icon2: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconHomeOutline: {
    left: "5.9%",
    top: "28.31%",
    right: "89.31%",
    bottom: "43.54%",
    width: "4.79%",
    height: "28.15%",
    position: "absolute",
  },
  interfaceTrendingDown: {
    left: 294,
    width: 34,
    height: 31,
  },
  groupView: {
    top: 867,
    left: 0,
    height: 68,
    width: 428,
  },
  loans: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default Loans;
