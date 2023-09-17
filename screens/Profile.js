import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={styles.userDetails}>
        <Image
          style={[styles.userDetailsChild, styles.profile1Position]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Text style={[styles.mingMing, styles.mingFlexBox]}>Ming Ming</Text>
        <Text style={[styles.memberSince, styles.mingFlexBox]}>
          Member Since
        </Text>
        <Image
          style={[styles.userDetailsItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
      </View>
      <View style={styles.profileWrapper}>
        <Text style={[styles.profile1, styles.mingTypo]}>Profile</Text>
      </View>
      <Text style={[styles.address, styles.emailTypo]}>Address</Text>
      <Text style={[styles.birthday, styles.emailTypo]}>Birthday</Text>
      <Text style={[styles.number, styles.emailTypo]}>Number</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.account, styles.emailTypo]}>Account</Text>
      <Pressable
        style={[styles.logout, styles.emailPosition]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.emailTypo}>Logout</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={[styles.groupItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/vector-3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  profile1Position: {
    top: 0,
    position: "absolute",
  },
  mingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  itemLayout: {
    height: 13,
    position: "absolute",
  },
  mingTypo: {
    color: Color.colorSlategray,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 0,
  },
  emailTypo: {
    width: 257,
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 27,
    fontSize: FontSize.size_xl,
  },
  emailPosition: {
    left: 85,
    position: "absolute",
  },
  groupChildLayout: {
    height: 45,
    width: 45,
    position: "absolute",
  },
  userDetailsChild: {
    left: 47,
    width: 150,
    height: 150,
  },
  mingMing: {
    top: 172,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    height: 26,
    color: Color.colorSlategray,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 0,
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    width: 234,
  },
  memberSince: {
    top: 198,
    left: 24,
    fontSize: FontSize.size_mini,
    letterSpacing: 1.2,
    lineHeight: 20,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorBlack,
    width: 184,
    height: 25,
  },
  userDetailsItem: {
    top: 179,
    left: 199,
    width: 14,
  },
  userDetails: {
    top: 143,
    left: 97,
    height: 223,
    width: 234,
    position: "absolute",
  },
  profile1: {
    fontSize: FontSize.size_13xl,
    letterSpacing: 2.6,
    lineHeight: 43,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  profileWrapper: {
    top: 61,
    left: 152,
    width: 123,
    height: 43,
    position: "absolute",
  },
  address: {
    top: 405,
    left: 85,
    position: "absolute",
  },
  birthday: {
    top: 463,
    left: 85,
    position: "absolute",
  },
  number: {
    top: 521,
    left: 85,
    position: "absolute",
  },
  email: {
    top: 573,
    left: 85,
    position: "absolute",
  },
  account: {
    top: 628,
    left: 85,
    position: "absolute",
  },
  logout: {
    top: 675,
  },
  groupChild: {
    borderRadius: 23,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    left: 0,
    width: 45,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupItem: {
    top: 17,
    left: 8,
    width: 26,
  },
  rectangleParent: {
    top: 777,
    left: 195,
  },
  profile: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Profile;
