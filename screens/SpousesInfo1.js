import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const SpousesInfo1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.spousesInfo1}>
      <Image
        style={styles.spousesInfo1Child}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Image
        style={styles.spousesInfo1Item}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <View style={styles.next}>
        <Pressable
          style={styles.nextChild}
          onPress={() => navigation.navigate("SpousesInfo2")}
        />
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("EmpBusinessInfo")}
        >
          <Text style={[styles.back1, styles.next1Typo]}>Back</Text>
        </Pressable>
      </View>
      <View style={[styles.empOrBusiness, styles.specifyChildLayout]}>
        <View style={[styles.specifyWrapper, styles.specifyChildLayout]}>
          <View style={[styles.specifyWrapper, styles.specifyChildLayout]}>
            <View style={[styles.specifyChild, styles.childLayout]} />
            <Text style={[styles.employerOrBusiness, styles.lastNameTypo]}>
              Employer or business
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.empOrBusiness1, styles.specifyChildLayout]}>
        <View style={[styles.specifyWrapper, styles.specifyChildLayout]}>
          <View style={[styles.specifyWrapper, styles.specifyChildLayout]}>
            <View style={[styles.specifyChild, styles.childLayout]} />
            <Text
              style={[
                styles.businessemployersAddressco,
                styles.dateOfBirthTypo,
              ]}
            >
              Business/employer’s address/contact nmbers
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.occupation, styles.specifyChildLayout]}>
        <View style={[styles.specifyFrame, styles.specifyChildLayout]}>
          <View style={[styles.specifyWrapper, styles.specifyChildLayout]}>
            <View style={[styles.specifyChild, styles.childLayout]} />
            <Text style={[styles.employerOrBusiness, styles.lastNameTypo]}>
              Occupation
            </Text>
          </View>
        </View>
        <Text style={[styles.work, styles.workTypo]}>Work</Text>
      </View>
      <View style={[styles.contactNumbers, styles.viewLayout]}>
        <View style={[styles.groupView, styles.viewLayout]}>
          <View style={[styles.groupView, styles.viewLayout]}>
            <View style={[styles.rectangleView, styles.viewLayout]} />
            <Text style={[styles.contactNumbers1, styles.dateOfBirthTypo]}>
              Contact number/s
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.placeofbirth, styles.groupChildLayout]}>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.dateOfBirth, styles.dateOfBirthTypo]}>
            Date of birth mm/dd/yy
          </Text>
          <Image
            style={styles.iconCalendarClearOutline}
            contentFit="cover"
            source={require("../assets/-icon-calendar-clear-outline.png")}
          />
        </View>
      </View>
      <View style={[styles.middleName, styles.nameLayout]}>
        <View style={[styles.specifyWrapper1, styles.nameLayout]}>
          <View style={[styles.specifyWrapper1, styles.nameLayout]}>
            <View style={[styles.specifyChild1, styles.nameLayout]} />
            <Text style={[styles.middleName1, styles.dateOfBirthTypo]}>
              Middle name
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.firstName, styles.nameLayout]}>
        <View style={[styles.specifyChild1, styles.nameLayout]} />
        <Text style={[styles.middleName1, styles.dateOfBirthTypo]}>
          First name
        </Text>
      </View>
      <View style={styles.lastname}>
        <View style={[styles.lastnameChild, styles.childLayout]} />
        <Text style={[styles.lastName, styles.lastNameTypo]}>Last name</Text>
        <Text style={[styles.basicInformation, styles.workTypo]}>
          Basic information
        </Text>
      </View>
      <View style={styles.spouses}>
        <Text style={[styles.text, styles.textTypo]}>1/2</Text>
        <Text style={[styles.spousesInformation, styles.textTypo]}>
          Spouse’s Information
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  next1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_base,
  },
  specifyChildLayout: {
    width: 332,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  lastNameTypo: {
    width: 284,
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    left: 22,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  dateOfBirthTypo: {
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    top: 15,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  workTypo: {
    width: 330,
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  viewLayout: {
    width: 331,
    height: 48,
    position: "absolute",
  },
  groupChildLayout: {
    width: 327,
    height: 48,
    position: "absolute",
  },
  nameLayout: {
    width: 333,
    height: 48,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorSlategray,
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  spousesInfo1Child: {
    width: 428,
    height: 325,
    left: 0,
    top: 0,
    position: "absolute",
  },
  spousesInfo1Item: {
    top: 149,
    width: 429,
    height: 777,
    left: 0,
    position: "absolute",
  },
  nextChild: {
    left: 120,
    borderRadius: Border.br_6xl,
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue_200,
    borderWidth: 2,
    width: 141,
    height: 48,
    top: 0,
    position: "absolute",
  },
  next1: {
    top: 14,
    left: 172,
    color: Color.colorDarkslateblue_200,
    position: "absolute",
  },
  back1: {
    color: Color.colorIndianred,
  },
  back: {
    top: 13,
    left: 0,
    position: "absolute",
  },
  next: {
    top: 830,
    left: 107,
    width: 261,
    height: 48,
    position: "absolute",
  },
  specifyChild: {
    width: 332,
    position: "absolute",
    height: 48,
    top: 0,
  },
  employerOrBusiness: {
    top: 15,
    width: 284,
  },
  specifyWrapper: {
    height: 48,
    left: 0,
    top: 0,
  },
  empOrBusiness: {
    top: 655,
    left: 50,
    height: 48,
  },
  businessemployersAddressco: {
    width: 310,
    left: 22,
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
  },
  empOrBusiness1: {
    top: 715,
    left: 48,
    height: 48,
  },
  specifyFrame: {
    top: 22,
    height: 48,
    left: 0,
  },
  work: {
    left: 2,
  },
  occupation: {
    top: 573,
    left: 47,
    height: 70,
  },
  rectangleView: {
    borderRadius: Border.br_3xs,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  contactNumbers1: {
    width: 283,
    left: 22,
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
  },
  groupView: {
    left: 0,
    top: 0,
  },
  contactNumbers: {
    top: 509,
    left: 48,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  dateOfBirth: {
    width: 280,
    left: 22,
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
  },
  iconCalendarClearOutline: {
    height: "60.42%",
    width: "8.3%",
    top: "18.75%",
    right: "6.46%",
    bottom: "20.83%",
    left: "85.23%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  placeofbirth: {
    top: 449,
    left: 51,
  },
  specifyChild1: {
    borderRadius: Border.br_3xs,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  middleName1: {
    left: 23,
    width: 285,
  },
  specifyWrapper1: {
    left: 0,
    top: 0,
  },
  middleName: {
    top: 389,
    left: 52,
    width: 333,
  },
  firstName: {
    top: 329,
    left: 52,
    width: 333,
  },
  lastnameChild: {
    top: 23,
    width: 332,
    position: "absolute",
    height: 48,
  },
  lastName: {
    top: 38,
  },
  basicInformation: {
    left: 4,
  },
  lastname: {
    top: 246,
    width: 334,
    height: 71,
    left: 51,
    position: "absolute",
  },
  text: {
    left: 300,
    width: 29,
  },
  spousesInformation: {
    width: 223,
    left: 0,
  },
  spouses: {
    top: 201,
    width: 329,
    height: 27,
    left: 51,
    position: "absolute",
  },
  spousesInfo1: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default SpousesInfo1;
