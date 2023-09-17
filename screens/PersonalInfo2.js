import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const PersonalInfo2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalInfo2}>
      <Image
        style={styles.personalInfo2Child}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Image
        style={styles.personalInfo2Item}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <View style={styles.next}>
        <Pressable
          style={[styles.nextChild, styles.childBorder]}
          onPress={() => navigation.navigate("PersonalInfo3")}
        />
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("PersonalInfo1")}
        >
          <Text style={[styles.back1, styles.next1Typo]}>Back</Text>
        </Pressable>
      </View>
      <View style={[styles.levelEduc, styles.levelLayout]}>
        <View style={[styles.levelEducChild, styles.childLayout]} />
        <Text style={styles.highestCompletedLevel}>
          Highest completed level of education/course
        </Text>
      </View>
      <View style={[styles.dependents, styles.levelLayout]}>
        <View style={[styles.width, styles.widthLayout]}>
          <View style={[styles.widthChild, styles.widthLayout]} />
          <Text style={[styles.ages, styles.numberTypo]}>Ages</Text>
        </View>
        <View style={[styles.height, styles.heightLayout]}>
          <View style={[styles.heightChild, styles.heightLayout]} />
          <Text style={[styles.count, styles.numberTypo]}>Count</Text>
        </View>
        <Text style={[styles.dependents1, styles.dependents1Typo]}>
          Dependents
        </Text>
      </View>
      <View style={[styles.otherid, styles.otheridLayout]}>
        <View style={[styles.idNoParent, styles.otheridLayout]}>
          <View style={[styles.idNo, styles.levelLayout]}>
            <View style={[styles.levelEducChild, styles.childLayout]} />
            <Text style={[styles.idNumber, styles.numberTypo]}>ID number</Text>
          </View>
          <View style={[styles.specify, styles.specifyPosition]}>
            <View style={[styles.levelEducChild, styles.childLayout]} />
            <Text style={[styles.idNumber, styles.numberTypo]}>Specify ID</Text>
          </View>
          <Text style={[styles.otherId, styles.numberTypo]}>Other ID?</Text>
          <View style={[styles.groupChild, styles.childBorder]} />
        </View>
      </View>
      <View style={[styles.sssid, styles.sssidLayout]}>
        <View style={[styles.sssidChild, styles.sssidLayout]} />
        <Text style={[styles.sssIdNumber, styles.dependents1Typo]}>
          SSS ID number
        </Text>
      </View>
      <View style={[styles.taxid, styles.taxidLayout]}>
        <View style={[styles.taxidChild, styles.taxidLayout]} />
        <Text style={[styles.taxIdNumber, styles.numberTypo]}>
          Tax ID number
        </Text>
        <Text style={[styles.identification, styles.numberTypo]}>
          Identification
        </Text>
      </View>
      <View style={[styles.width1, styles.width1Layout]}>
        <View style={[styles.heightChild, styles.heightLayout]} />
        <Text style={[styles.weightKg, styles.numberTypo]}>Weight (kg)</Text>
      </View>
      <View style={[styles.height1, styles.height1Position]}>
        <View style={[styles.heightChild, styles.heightLayout]} />
        <Text style={[styles.count, styles.numberTypo]}>Height (cm/ft)</Text>
      </View>
      <View style={[styles.personalInfo, styles.height1Position]}>
        <Text style={[styles.text, styles.textTypo]}>2/3</Text>
        <Text style={[styles.personalInformation, styles.textTypo]}>
          Personal Information
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  next1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_base,
  },
  levelLayout: {
    width: 329,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  widthLayout: {
    width: 159,
    height: 48,
    position: "absolute",
  },
  numberTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  heightLayout: {
    width: 155,
    height: 48,
    left: 0,
    position: "absolute",
  },
  dependents1Typo: {
    width: 278,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  otheridLayout: {
    height: 133,
    width: 329,
    position: "absolute",
  },
  specifyPosition: {
    top: 24,
    height: 48,
    left: 0,
  },
  sssidLayout: {
    width: 325,
    height: 48,
    position: "absolute",
  },
  taxidLayout: {
    width: 328,
    position: "absolute",
  },
  width1Layout: {
    top: 250,
    width: 155,
    height: 48,
  },
  height1Position: {
    left: 51,
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
  personalInfo2Child: {
    width: 428,
    height: 325,
    left: 0,
    top: 0,
    position: "absolute",
  },
  personalInfo2Item: {
    top: 149,
    width: 429,
    height: 777,
    left: 0,
    position: "absolute",
  },
  nextChild: {
    left: 120,
    borderRadius: Border.br_6xl,
    borderColor: Color.colorDarkslateblue_200,
    borderWidth: 2,
    width: 141,
    height: 48,
    top: 0,
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
    top: 8,
    left: 0,
    position: "absolute",
  },
  next: {
    top: 829,
    left: 109,
    width: 261,
    height: 48,
    position: "absolute",
  },
  levelEducChild: {
    width: 329,
    position: "absolute",
    height: 48,
    left: 0,
    top: 0,
  },
  highestCompletedLevel: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    width: 281,
    textAlign: "left",
    color: Color.colorDarkgray,
    left: 22,
    top: 15,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  levelEduc: {
    top: 311,
    left: 49,
    height: 48,
  },
  widthChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  ages: {
    width: 115,
    left: 22,
    top: 15,
  },
  width: {
    left: 170,
    top: 27,
  },
  heightChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  count: {
    width: 117,
    left: 22,
    top: 15,
  },
  height: {
    top: 27,
  },
  dependents1: {
    left: 0,
    top: 0,
  },
  dependents: {
    top: 673,
    height: 75,
    left: 49,
  },
  idNumber: {
    width: 281,
    left: 22,
    top: 15,
  },
  idNo: {
    top: 85,
    height: 48,
    left: 0,
  },
  specify: {
    width: 329,
    position: "absolute",
  },
  otherId: {
    left: 20,
    width: 281,
    top: 0,
  },
  groupChild: {
    top: 3,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorSlategray,
    borderWidth: 1,
    width: 12,
    height: 12,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  idNoParent: {
    left: 0,
    top: 0,
  },
  otherid: {
    top: 528,
    left: 49,
  },
  sssidChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  sssIdNumber: {
    left: 22,
    top: 15,
  },
  sssid: {
    top: 463,
    left: 49,
  },
  taxidChild: {
    top: 24,
    height: 48,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  taxIdNumber: {
    top: 39,
    width: 281,
    left: 22,
  },
  identification: {
    left: 3,
    width: 281,
    top: 0,
  },
  taxid: {
    top: 379,
    height: 72,
    left: 49,
  },
  weightKg: {
    left: 21,
    width: 112,
    top: 15,
  },
  width1: {
    left: 223,
    position: "absolute",
  },
  height1: {
    top: 250,
    width: 155,
    height: 48,
  },
  text: {
    left: 296,
  },
  personalInformation: {
    left: 0,
  },
  personalInfo: {
    top: 201,
    width: 327,
    height: 27,
  },
  personalInfo2: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default PersonalInfo2;
