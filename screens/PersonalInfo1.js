import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const PersonalInfo1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalInfo1}>
      <Image
        style={styles.personalInfo1Child}
        contentFit="cover"
        source={require("../assets/rectangle-63.png")}
      />
      <Pressable
        style={styles.alreadyAMemberContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.alreadyAMember}>Already a member?</Text>
      </Pressable>
      <Pressable
        style={[styles.next, styles.nextLayout]}
        onPress={() => navigation.navigate("PersonalInfo2")}
      >
        <View style={[styles.nextChild, styles.childLayout]} />
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
      </Pressable>
      <View style={[styles.placeofbirth, styles.groupChildLayout]}>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.dateOfBirth, styles.firstNameTypo]}>
            Date of birth mm/dd/yy
          </Text>
          <Image
            style={styles.iconCalendarClearOutline}
            contentFit="cover"
            source={require("../assets/-icon-calendar-clear-outline1.png")}
          />
        </View>
      </View>
      <View style={[styles.placeofbith, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.dateOfBirth, styles.firstNameTypo]}>
          Place of Birth
        </Text>
      </View>
      <View style={[styles.middlename, styles.groupChildLayout]}>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.dateOfBirth, styles.firstNameTypo]}>
            Middle name
          </Text>
        </View>
      </View>
      <View style={[styles.firstanme, styles.lastnameLayout]}>
        <View style={[styles.rectangleContainer, styles.lastnameLayout]}>
          <View style={[styles.groupInner, styles.lastnameLayout]} />
          <Text style={[styles.firstName, styles.firstNameTypo]}>
            First name
          </Text>
        </View>
      </View>
      <View style={[styles.lastname, styles.lastnameLayout]}>
        <View style={[styles.rectangleContainer, styles.lastnameLayout]}>
          <View style={[styles.groupInner, styles.lastnameLayout]} />
          <Text style={[styles.firstName, styles.firstNameTypo]}>
            Last name
          </Text>
        </View>
      </View>
      <View style={[styles.personalInfo, styles.groupChildLayout]}>
        <Text style={[styles.text, styles.textClr]}>1/3</Text>
        <Text style={[styles.personalInformation, styles.textClr]}>
          Personal Information
        </Text>
        <Text style={[styles.basicInformation, styles.firstNameTypo]}>
          Basic Information
        </Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupChild1Position]}>
        <Image
          style={[styles.rectangleParent1, styles.groupChild1Position]}
          contentFit="cover"
          source={require("../assets/rectangle-33.png")}
        />
        <View style={[styles.groupChild1, styles.groupChild1Position]} />
      </View>
      <Text
        style={[styles.membershipApplicationForm, styles.textClr]}
      >{`Membership
Application Form`}</Text>
      <Pressable
        style={[styles.requirement, styles.nextLayout]}
        onPress={() => navigation.navigate("ListOfRequirements")}
      >
        <View style={[styles.requirementChild, styles.childLayout]} />
        <Text style={[styles.viewRequirements, styles.next1Typo]}>
          View Requirements
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  nextLayout: {
    width: 244,
    height: 48,
    position: "absolute",
  },
  childLayout: {
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_6xl,
    top: 0,
    height: 48,
    width: 244,
    left: 0,
    position: "absolute",
  },
  next1Typo: {
    top: 14,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupChildLayout: {
    width: 329,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  firstNameTypo: {
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  lastnameLayout: {
    width: 332,
    height: 48,
    position: "absolute",
  },
  textClr: {
    color: Color.colorSlategray,
    position: "absolute",
  },
  groupChild1Position: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  personalInfo1Child: {
    top: 319,
    width: 429,
    height: 607,
    left: 0,
    position: "absolute",
  },
  alreadyAMember: {
    textDecoration: "underline",
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_base,
  },
  alreadyAMemberContainer: {
    left: 141,
    top: 865,
    position: "absolute",
  },
  nextChild: {
    borderColor: Color.colorDarkslateblue_200,
  },
  next1: {
    left: 103,
    color: Color.colorDarkslateblue_200,
  },
  next: {
    top: 805,
    left: 100,
    height: 48,
  },
  groupChild: {
    width: 329,
    position: "absolute",
    height: 48,
  },
  dateOfBirth: {
    width: 281,
    left: 22,
    top: 15,
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
  },
  iconCalendarClearOutline: {
    height: "60.42%",
    width: "8.3%",
    top: "18.75%",
    right: "6.47%",
    bottom: "20.83%",
    left: "85.23%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 0,
    height: 48,
    left: 0,
  },
  placeofbirth: {
    top: 727,
    left: 50,
    height: 48,
  },
  placeofbith: {
    top: 667,
    left: 50,
    height: 48,
  },
  middlename: {
    top: 607,
    left: 50,
    height: 48,
  },
  groupInner: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  firstName: {
    width: 284,
    left: 22,
    top: 15,
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
  },
  rectangleContainer: {
    top: 0,
    left: 0,
  },
  firstanme: {
    top: 547,
    left: 50,
  },
  lastname: {
    top: 487,
    left: 50,
  },
  text: {
    left: 302,
    width: 27,
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    color: Color.colorSlategray,
    textAlign: "left",
    top: 0,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  personalInformation: {
    width: 220,
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    color: Color.colorSlategray,
    textAlign: "left",
    top: 0,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    left: 0,
  },
  basicInformation: {
    top: 49,
    left: 3,
    width: 278,
  },
  personalInfo: {
    top: 414,
    height: 66,
    left: 50,
  },
  rectangleParent1: {
    height: 344,
    top: 0,
  },
  groupChild1: {
    top: 312,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: "#f7f7f7",
    height: 32,
  },
  membershipApplicationForm: {
    top: 328,
    left: 105,
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
  },
  requirementChild: {
    borderColor: Color.colorWhite,
  },
  viewRequirements: {
    left: 42,
    color: Color.colorWhite,
  },
  requirement: {
    top: 138,
    left: 92,
    height: 48,
  },
  personalInfo1: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default PersonalInfo1;
