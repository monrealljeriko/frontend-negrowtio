import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const ListOfRequirements = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listOfRequirements}>
      <Image
        style={[styles.listOfRequirementsChild, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <Image
        style={styles.listOfRequirementsItem}
        contentFit="cover"
        source={require("../assets/rectangle-62.png")}
      />
      <View style={[styles.x1, styles.x1Layout]}>
        <View style={[styles.personalInfo, styles.x1Layout]}>
          <Text style={[styles.text, styles.textTypo]}>4/4</Text>
          <Text style={[styles.x1PicId, styles.textTypo]}>1x1 pic ID</Text>
        </View>
      </View>
      <View style={[styles.x2, styles.x1Layout]}>
        <View style={[styles.personalInfo, styles.x1Layout]}>
          <Text style={[styles.text, styles.textTypo]}>3/4</Text>
          <Text style={[styles.x1PicId, styles.textTypo]}>2x2 ID pic</Text>
        </View>
      </View>
      <View style={[styles.brgyClearance, styles.x1Layout]}>
        <View style={[styles.personalInfo, styles.x1Layout]}>
          <Text style={[styles.text, styles.textTypo]}>2/4</Text>
          <Text style={[styles.x1PicId, styles.textTypo]}>
            Barangay Clearance
          </Text>
        </View>
      </View>
      <View style={[styles.membership, styles.x1Layout]}>
        <View style={[styles.personalInfo, styles.x1Layout]}>
          <Text style={[styles.text, styles.textTypo]}>1/4</Text>
          <Text style={[styles.x1PicId, styles.textTypo]}>Membership form</Text>
        </View>
      </View>
      <Text style={[styles.listOfRequiements, styles.completedFlexBox]}>
        List of Requiements
      </Text>
      <Pressable
        style={[styles.requirement, styles.requirementLayout]}
        onPress={() => navigation.navigate("PersonalInfo1")}
      >
        <View style={[styles.requirementChild, styles.requirementLayout]} />
        <Text style={[styles.completed, styles.completedFlexBox]}>
          Completed
        </Text>
        <Image
          style={styles.requirementItem}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    top: 0,
    left: 0,
  },
  x1Layout: {
    height: 27,
    width: 329,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    color: Color.colorSlategray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  completedFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  requirementLayout: {
    height: 48,
    width: 244,
    position: "absolute",
  },
  listOfRequirementsChild: {
    width: 428,
    height: 344,
    left: 0,
    position: "absolute",
  },
  listOfRequirementsItem: {
    top: 156,
    width: 429,
    height: 800,
    left: 0,
    position: "absolute",
  },
  text: {
    left: 295,
    width: 34,
  },
  x1PicId: {
    width: 220,
    left: 0,
  },
  personalInfo: {
    left: 0,
    top: 0,
  },
  x1: {
    top: 400,
    left: 53,
    width: 329,
  },
  x2: {
    top: 344,
    left: 53,
    width: 329,
  },
  brgyClearance: {
    top: 288,
    left: 53,
    width: 329,
  },
  membership: {
    top: 223,
    left: 53,
    width: 329,
  },
  listOfRequiements: {
    top: 172,
    left: 91,
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorSlategray,
    textAlign: "center",
  },
  requirementChild: {
    borderRadius: Border.br_6xl,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 2,
    left: 0,
    top: 0,
  },
  completed: {
    top: 14,
    left: 78,
    fontSize: FontSize.size_base,
    lineHeight: 21,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  requirementItem: {
    top: 15,
    left: 27,
    width: 23,
    height: 18,
    position: "absolute",
  },
  requirement: {
    top: 60,
    left: 92,
  },
  listOfRequirements: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default ListOfRequirements;
