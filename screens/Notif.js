import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Notif = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notif}>
      <View style={styles.notificationsWrapper}>
        <Text style={[styles.notifications, styles.walletFlexBox]}>
          Notifications
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
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
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Pressable
            style={[styles.interfaceCreditCard02, styles.userLayout]}
            onPress={() => navigation.navigate("Loans")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/interface--credit-card-02.png")}
            />
          </Pressable>
          <Text style={[styles.wallet, styles.walletFlexBox]}>Wallet</Text>
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
      <View style={styles.notifChild} />
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
  );
};

const styles = StyleSheet.create({
  walletFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 68,
    width: 428,
    position: "absolute",
  },
  groupLayout1: {
    borderRadius: Border.br_3xs,
    left: 0,
  },
  userLayout: {
    width: 26,
    position: "absolute",
  },
  groupLayout: {
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
  notifications: {
    fontSize: FontSize.size_13xl,
    letterSpacing: 2.6,
    lineHeight: 43,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorDarkslateblue_200,
    left: 0,
    top: 0,
  },
  notificationsWrapper: {
    top: 64,
    left: 36,
    width: 244,
    height: 43,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorSlategray,
    height: 68,
    width: 428,
    position: "absolute",
    top: 0,
  },
  userUser02: {
    left: 380,
    top: 15,
    height: 34,
  },
  groupItem: {
    backgroundColor: Color.colorLightsteelblue,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  interfaceCreditCard02: {
    left: 13,
    top: 14,
    height: 36,
  },
  wallet: {
    top: 19,
    left: 47,
    fontSize: FontSize.size_xs,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    width: 47,
    height: 19,
  },
  rectangleGroup: {
    left: 113,
  },
  interfaceTrendingDown: {
    left: 270,
    top: 16,
    width: 34,
    height: 31,
    position: "absolute",
  },
  rectangleParent: {
    top: 865,
    left: 0,
  },
  notifChild: {
    top: 139,
    left: 62,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 309,
    height: 372,
    position: "absolute",
  },
  icon3: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconHomeOutline: {
    left: "7.59%",
    top: "95.84%",
    right: "87.73%",
    bottom: "2.14%",
    width: "4.67%",
    height: "2.01%",
    position: "absolute",
  },
  notif: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default Notif;
