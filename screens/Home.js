import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, styles.homeLayout1]}>
      <View style={[styles.userDetails, styles.userLayout1]}>
        <Image
          style={[styles.userDetailsChild, styles.home1Position]}
          contentFit="cover"
          source={require("../assets/ellipse-31.png")}
        />
        <Text style={styles.mingMing}>Ming Ming</Text>
      </View>
      <LinearGradient
        style={styles.homeChild}
        locations={[0, 0.53, 1]}
        colors={["#57708c", "#57708c", "#57708c"]}
      />
      <View style={styles.balanceParent}>
        <Text style={[styles.balance, styles.balanceTypo]}>Balance</Text>
        <Text style={[styles.php1150700, styles.nameTypo]}>Php. 11,507.00</Text>
      </View>
      <Text style={[styles.summary, styles.balanceTypo]}>Summary</Text>
      <Pressable
        style={styles.viewAll}
        onPress={() => navigation.navigate("Total")}
      >
        <Text style={[styles.viewAll1, styles.home1Layout]}>View All</Text>
      </Pressable>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.groupItem, styles.groupBg]} />
        <View style={styles.weekParent}>
          <Text style={[styles.week, styles.weekTypo]}>Week</Text>
          <Text style={[styles.month, styles.yearTypo]}>Month</Text>
          <Text style={[styles.year, styles.yearTypo]}>Year</Text>
        </View>
      </View>
      <View style={[styles.nameOfPurposeParent, styles.nameLayout]}>
        <Text style={[styles.nameOfPurpose, styles.nameTypo]}>
          Name of Purpose
        </Text>
        <Text style={[styles.php181000, styles.phpLayout]}>php. 1,810.00</Text>
        <Text style={[styles.overdue, styles.paidPosition]}>Overdue</Text>
      </View>
      <View style={[styles.nameOfPurposeGroup, styles.nameLayout]}>
        <Text style={[styles.nameOfPurpose1, styles.nameTypo]}>
          Name of Purpose
        </Text>
        <Text style={[styles.php200000, styles.phpLayout]}>php 2,000.00</Text>
        <Text style={[styles.paid, styles.paidPosition]}>Paid</Text>
      </View>
      <View style={[styles.nameOfPurposeContainer, styles.nameLayout]}>
        <Text style={[styles.nameOfPurpose1, styles.nameTypo]}>
          Name of Purpose
        </Text>
        <Text style={[styles.php575000, styles.phpLayout]}>php 5,750.00</Text>
        <Text style={[styles.paid, styles.paidPosition]}>Paid</Text>
      </View>
      <Image
        style={styles.removebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/254967removebgpreview-1.png")}
      />
      <Image
        style={[styles.iconNotifications, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-notifications.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={styles.interfaceCreditCard02Parent}>
          <Pressable
            style={[styles.interfaceCreditCard02, styles.userLayout]}
            onPress={() => navigation.navigate("Loans")}
          >
            <Image
              style={[styles.icon, styles.homeLayout1]}
              contentFit="cover"
              source={require("../assets/interface--credit-card-023.png")}
            />
          </Pressable>
          <Pressable
            style={styles.interfaceTrendingDown}
            onPress={() => navigation.navigate("Credit")}
          >
            <Image
              style={[styles.icon, styles.homeLayout1]}
              contentFit="cover"
              source={require("../assets/interface--trending-down.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.userUser02, styles.userLayout]}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={[styles.icon, styles.homeLayout1]}
              contentFit="cover"
              source={require("../assets/user--user-024.png")}
            />
          </Pressable>
          <View style={styles.rectanglePosition}>
            <View style={[styles.rectangleView, styles.rectanglePosition]} />
            <View style={[styles.homeWrapper, styles.homeLayout]}>
              <Text style={[styles.home1, styles.homeLayout]}>Home</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.iconHomeOutline, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-home-outline2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  userLayout1: {
    height: 50,
    position: "absolute",
  },
  home1Position: {
    left: 0,
    top: 0,
  },
  balanceTypo: {
    lineHeight: 32,
    letterSpacing: 1.9,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  nameTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  home1Layout: {
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
  },
  groupLayout1: {
    borderRadius: Border.br_5xl,
    height: 40,
    left: 0,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.colorSlategray,
    top: 0,
  },
  weekTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    textAlign: "left",
  },
  yearTypo: {
    marginLeft: 77,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
  },
  nameLayout: {
    height: 39,
    width: 355,
    left: 37,
    position: "absolute",
  },
  phpLayout: {
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
  },
  paidPosition: {
    top: 23,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 69,
    width: 428,
    left: 0,
    position: "absolute",
  },
  userLayout: {
    height: 30,
    width: 25,
    top: 16,
    position: "absolute",
  },
  rectanglePosition: {
    width: 138,
    height: 65,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeLayout: {
    height: 24,
    width: 46,
    position: "absolute",
  },
  userDetailsChild: {
    width: 50,
    height: 50,
    position: "absolute",
  },
  mingMing: {
    top: 15,
    left: 65,
    textTransform: "uppercase",
    color: Color.colorDarkslateblue_200,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  userDetails: {
    top: 63,
    width: 172,
    left: 34,
    height: 50,
  },
  homeChild: {
    top: 136,
    height: 102,
    backgroundColor: "transparent",
    width: 428,
    left: 0,
    position: "absolute",
  },
  balance: {
    left: 2,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    top: 0,
  },
  php1150700: {
    top: 32,
    fontSize: FontSize.size_13xl,
    letterSpacing: 2.6,
    lineHeight: 43,
    color: Color.colorWhite,
  },
  balanceParent: {
    top: 150,
    left: 32,
    width: 258,
    height: 75,
    position: "absolute",
  },
  summary: {
    top: 342,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 32,
    letterSpacing: 1.9,
    fontSize: FontSize.size_5xl,
    left: 34,
  },
  viewAll1: {
    textAlign: "right",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
  },
  viewAll: {
    left: 331,
    top: 362,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro,
    width: 356,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  groupItem: {
    width: 119,
    borderRadius: Border.br_5xl,
    height: 40,
    left: 0,
    position: "absolute",
  },
  week: {
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
  },
  month: {
    textAlign: "center",
  },
  year: {
    textAlign: "right",
  },
  weekParent: {
    marginLeft: -149,
    top: 7,
    left: "50%",
    height: 27,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 274,
    height: 40,
    left: 37,
    width: 356,
    position: "absolute",
  },
  nameOfPurpose: {
    color: Color.colorRed,
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
    top: 0,
  },
  php181000: {
    left: 239,
    color: Color.colorRed,
    textAlign: "right",
    fontFamily: FontFamily.montserratRegular,
    top: 0,
    position: "absolute",
  },
  overdue: {
    color: Color.colorRed,
  },
  nameOfPurposeParent: {
    top: 409,
  },
  nameOfPurpose1: {
    color: Color.colorBlack,
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
    top: 0,
  },
  php200000: {
    left: 235,
    color: Color.colorGray,
    textAlign: "right",
    fontFamily: FontFamily.montserratRegular,
    top: 0,
    position: "absolute",
  },
  paid: {
    color: Color.colorBlack,
  },
  nameOfPurposeGroup: {
    top: 456,
  },
  php575000: {
    left: 238,
    textAlign: "right",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
    top: 0,
    position: "absolute",
  },
  nameOfPurposeContainer: {
    top: 503,
  },
  removebgPreview1Icon: {
    top: 628,
    left: -180,
    width: 94,
    height: 80,
    position: "absolute",
  },
  iconNotifications: {
    height: "2.27%",
    width: "4.21%",
    top: "8.53%",
    right: "10.51%",
    bottom: "89.2%",
    left: "85.28%",
    opacity: 0.7,
  },
  groupInner: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSlategray,
    top: 0,
  },
  icon: {
    height: "100%",
  },
  interfaceCreditCard02: {
    left: 171,
  },
  interfaceTrendingDown: {
    left: 270,
    width: 34,
    height: 31,
    top: 16,
    position: "absolute",
  },
  userUser02: {
    left: 377,
  },
  rectangleView: {
    borderRadius: 8,
    backgroundColor: Color.colorLightsteelblue,
  },
  home1: {
    display: "flex",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    textAlign: "left",
    alignItems: "center",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
  },
  homeWrapper: {
    top: 19,
    left: 58,
  },
  interfaceCreditCard02Parent: {
    width: 402,
    height: 65,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    top: 867,
  },
  iconHomeOutline: {
    height: "2.07%",
    width: "4.79%",
    top: "95.49%",
    right: "89.31%",
    bottom: "2.44%",
    left: "5.9%",
  },
  home: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 926,
  },
});

export default Home;
