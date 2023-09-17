import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Active = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.active, styles.iconLayout]}>
      <View style={styles.totalLoansParent}>
        <Text style={[styles.totalLoans, styles.weekTypo]}>Total Loans</Text>
        <Text style={[styles.php5150700, styles.php5150700Typo]}>
          Php 51,507.00
        </Text>
      </View>
      <View style={styles.totalLoansGroup}>
        <Text style={[styles.totalLoans1, styles.detailsTypo]}>
          Total Loans
        </Text>
        <Image
          style={styles.editAddPlusCircle}
          contentFit="cover"
          source={require("../assets/edit--add-plus-circle1.png")}
        />
      </View>
      <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
      <View style={[styles.nameOfPurposeParent, styles.groupParentLayout]}>
        <Text style={[styles.nameOfPurpose, styles.weekLayout]}>
          Name of Purpose
        </Text>
        <Text style={[styles.php181000, styles.yearTypo]}>php. 1,810.00</Text>
        <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
        <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
        <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
        <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
      </View>
      <View style={[styles.nameOfPurposeGroup, styles.groupParentLayout]}>
        <Text style={[styles.nameOfPurpose, styles.weekLayout]}>
          Name of Purpose
        </Text>
        <Text style={[styles.php181000, styles.yearTypo]}>php. 1,810.00</Text>
        <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
        <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
        <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
        <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
      </View>
      <View style={[styles.nameOfPurposeContainer, styles.nameLayout]}>
        <Text style={[styles.nameOfPurpose, styles.weekLayout]}>
          Name of Purpose
        </Text>
        <Text style={[styles.php181000, styles.yearTypo]}>php. 1,810.00</Text>
        <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
        <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
        <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
        <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <Text style={[styles.nameOfPurpose, styles.weekLayout]}>
            Name of Purpose
          </Text>
          <Text style={[styles.php181000, styles.yearTypo]}>php. 1,810.00</Text>
          <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
          <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
          <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
          <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
        </View>
        <View style={[styles.nameOfPurposeParent1, styles.groupParentLayout]}>
          <Text style={[styles.nameOfPurpose, styles.weekLayout]}>
            Name of Purpose
          </Text>
          <Text style={[styles.php181000, styles.yearTypo]}>php. 1,810.00</Text>
          <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
          <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
          <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
          <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
        </View>
      </View>
      <View style={[styles.nameOfPurposeParent2, styles.nameLayout]}>
        <Text style={[styles.nameOfPurpose, styles.weekLayout]}>
          Name of Purpose
        </Text>
        <Text style={[styles.php181000, styles.yearTypo]}>php. 1,810.00</Text>
        <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
        <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
        <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
        <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <Text style={[styles.nameOfPurpose, styles.weekLayout]}>
            Name of Purpose
          </Text>
          <Text style={[styles.php181000, styles.yearTypo]}>php. 1,810.00</Text>
          <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
          <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
          <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
          <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
        </View>
        <View style={[styles.nameOfPurposeParent1, styles.groupParentLayout]}>
          <Text style={[styles.nameOfPurpose, styles.weekLayout]}>
            Name of Purpose
          </Text>
          <Text style={[styles.php181000, styles.yearTypo]}>php. 1,810.00</Text>
          <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
          <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
          <Text style={[styles.paid, styles.paidTypo]}>Paid</Text>
          <Text style={[styles.credits, styles.paidTypo]}>+credits</Text>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.groupItem, styles.groupBg]} />
        <View style={[styles.weekParent, styles.walletFlexBox]}>
          <Text style={[styles.week, styles.weekLayout]}>Week</Text>
          <Text style={[styles.month, styles.yearSpaceBlock]}>Month</Text>
          <Text style={[styles.year, styles.yearSpaceBlock]}>Year</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Pressable
          style={[styles.userUser02, styles.userLayout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user--user-022.png")}
          />
        </Pressable>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Pressable
            style={[styles.interfaceCreditCard02, styles.userLayout]}
            onPress={() => navigation.navigate("Loans")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/interface--credit-card-021.png")}
            />
          </Pressable>
          <Text style={[styles.wallet, styles.monthTypo]}>Wallet</Text>
        </View>
        <Image
          style={styles.iconHomeOutline}
          contentFit="cover"
          source={require("../assets/-icon-home-outline.png")}
        />
      </View>
      <Pressable
        style={styles.interfaceTrendingDown}
        onPress={() => navigation.navigate("Credit")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/interface--trending-down.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  weekTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
  },
  php5150700Typo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: 0,
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  detailsTypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  groupParentLayout: {
    height: 39,
    width: 355,
    position: "absolute",
  },
  weekLayout: {
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
  },
  yearTypo: {
    textAlign: "right",
    fontFamily: FontFamily.montserratRegular,
  },
  paidTypo: {
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  nameLayout: {
    height: 174,
    width: 355,
    left: 37,
    position: "absolute",
  },
  groupLayout1: {
    borderRadius: Border.br_5xl,
    height: 40,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.colorSlategray,
    top: 0,
  },
  walletFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  yearSpaceBlock: {
    marginLeft: 77,
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
  },
  groupLayout: {
    height: 68,
    width: 428,
    position: "absolute",
  },
  groupInnerLayout: {
    borderRadius: Border.br_3xs,
    left: 0,
  },
  userLayout: {
    height: 34,
    width: 26,
    position: "absolute",
  },
  rectangleLayout: {
    width: 121,
    height: 68,
    top: 0,
    position: "absolute",
  },
  monthTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  totalLoans: {
    left: 2,
    color: Color.colorGray,
    top: 0,
    position: "absolute",
    lineHeight: 32,
    letterSpacing: 1.9,
    fontSize: FontSize.size_5xl,
  },
  php5150700: {
    top: 32,
    lineHeight: 43,
    letterSpacing: 2.6,
    fontSize: FontSize.size_13xl,
  },
  totalLoansParent: {
    top: 161,
    left: 32,
    width: 254,
    height: 75,
    position: "absolute",
  },
  totalLoans1: {
    color: Color.colorDarkslateblue_200,
    lineHeight: 43,
    letterSpacing: 2.6,
    fontSize: FontSize.size_13xl,
    left: 0,
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
  totalLoansGroup: {
    top: 64,
    left: 36,
    width: 358,
    height: 43,
    position: "absolute",
  },
  details: {
    top: 345,
    left: 34,
    color: Color.colorBlack,
    lineHeight: 32,
    letterSpacing: 1.9,
    fontSize: FontSize.size_5xl,
  },
  nameOfPurpose: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: 0,
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
    top: 0,
  },
  php181000: {
    left: 239,
    lineHeight: 21,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
    color: Color.colorGray,
    top: 0,
    position: "absolute",
  },
  paid: {
    top: 23,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
    left: 0,
  },
  credits: {
    left: 251,
    top: 23,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  nameOfPurposeParent: {
    top: 398,
    left: 37,
    width: 355,
  },
  nameOfPurposeGroup: {
    top: 443,
    left: 37,
    width: 355,
  },
  groupView: {
    top: 90,
    left: 0,
  },
  nameOfPurposeParent1: {
    top: 135,
    left: 0,
  },
  nameOfPurposeContainer: {
    top: 488,
  },
  nameOfPurposeParent2: {
    top: 533,
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro,
    width: 356,
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  groupItem: {
    left: 125,
    width: 119,
    borderRadius: Border.br_5xl,
    height: 40,
    position: "absolute",
  },
  week: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
  },
  month: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  year: {
    textAlign: "right",
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorBlack,
  },
  weekParent: {
    marginLeft: -149,
    top: 7,
    left: "50%",
    height: 27,
    flexDirection: "row",
    justifyContent: "center",
  },
  rectangleParent: {
    top: 274,
    height: 40,
    width: 356,
    left: 37,
    position: "absolute",
  },
  groupInner: {
    height: 68,
    width: 428,
    position: "absolute",
    backgroundColor: Color.colorSlategray,
    top: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  userUser02: {
    left: 380,
    top: 15,
  },
  rectangleView: {
    backgroundColor: Color.colorLightsteelblue,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  interfaceCreditCard02: {
    left: 13,
    top: 16,
  },
  wallet: {
    top: 21,
    left: 47,
    display: "flex",
    width: 47,
    height: 18,
    alignItems: "center",
    position: "absolute",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  rectangleContainer: {
    left: 113,
  },
  iconHomeOutline: {
    height: "27.41%",
    width: "4.67%",
    top: "36.03%",
    right: "89.37%",
    bottom: "36.56%",
    left: "5.96%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 865,
    left: 0,
  },
  interfaceTrendingDown: {
    left: 293,
    top: 880,
    width: 34,
    height: 31,
    position: "absolute",
  },
  active: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 926,
    overflow: "hidden",
  },
});

export default Active;
