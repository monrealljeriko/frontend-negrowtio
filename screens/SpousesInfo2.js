import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const SpousesInfo2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.spousesInfo2}>
      <Image
        style={styles.spousesInfo2Child}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Image
        style={styles.spousesInfo2Item}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <View style={[styles.next, styles.nextLayout]}>
        <Pressable
          style={[styles.nextChild, styles.nextLayout]}
          onPress={() => navigation.navigate("References1")}
        />
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("SpousesInfo1")}
        >
          <Text style={[styles.back1, styles.next1Typo]}>Back</Text>
        </Pressable>
      </View>
      <View style={[styles.lengthOfService, styles.specifyLayout]}>
        <View style={[styles.specifyWrapper, styles.specifyLayout]}>
          <View style={[styles.specifyWrapper, styles.specifyLayout]}>
            <View style={[styles.specifyChild, styles.childPosition]} />
            <Text
              style={[styles.lengthOfServicedate, styles.monthlyIncomeInTypo]}
            >
              Length of service/date started
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.empStattus, styles.specifyLayout]}>
        <View style={[styles.specifyChild, styles.childPosition]} />
        <Text style={[styles.lengthOfServicedate, styles.monthlyIncomeInTypo]}>
          Employment status
        </Text>
      </View>
      <View style={[styles.mohtlyIncome, styles.mohtlyLayout]}>
        <View style={[styles.mohtlyIncomeChild, styles.mohtlyLayout]} />
        <Text style={[styles.monthlyIncomeIn, styles.monthlyIncomeInTypo]}>
          Monthly income in pesos
        </Text>
      </View>
      <View style={styles.spouses}>
        <Text style={[styles.text, styles.textTypo]}>2/2</Text>
        <Text style={[styles.spousesInformation, styles.textTypo]}>
          Spouse’s Information
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextLayout: {
    height: 48,
    position: "absolute",
  },
  next1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_base,
  },
  specifyLayout: {
    width: 333,
    height: 48,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  monthlyIncomeInTypo: {
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    top: 15,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  mohtlyLayout: {
    width: 332,
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
  spousesInfo2Child: {
    width: 428,
    height: 325,
    left: 0,
    top: 0,
    position: "absolute",
  },
  spousesInfo2Item: {
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
    top: 13,
    left: 0,
    position: "absolute",
  },
  next: {
    top: 830,
    left: 107,
    width: 261,
  },
  specifyChild: {
    width: 333,
    height: 48,
    position: "absolute",
  },
  lengthOfServicedate: {
    left: 23,
    width: 285,
  },
  specifyWrapper: {
    left: 0,
    top: 0,
  },
  lengthOfService: {
    top: 374,
    left: 51,
  },
  empStattus: {
    top: 314,
    left: 51,
  },
  mohtlyIncomeChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  monthlyIncomeIn: {
    left: 22,
    width: 284,
  },
  mohtlyIncome: {
    top: 254,
    left: 51,
  },
  text: {
    left: 294,
    width: 35,
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
  spousesInfo2: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default SpousesInfo2;
