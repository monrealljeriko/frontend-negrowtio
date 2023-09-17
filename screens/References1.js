import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const References1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.references1}>
      <Image
        style={styles.references1Child}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Image
        style={styles.references1Item}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <View style={styles.next}>
        <Pressable
          style={styles.nextChild}
          onPress={() => navigation.navigate("References3")}
        />
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("SpousesInfo2")}
        >
          <Text style={[styles.back1, styles.next1Typo]}>Back</Text>
        </Pressable>
      </View>
      <View style={styles.relation}>
        <View style={styles.specifyWrapper}>
          <View style={styles.specifyWrapper}>
            <View style={[styles.specifyChild, styles.childLayout]} />
            <Text style={[styles.relation1, styles.name1Typo]}>relation</Text>
          </View>
        </View>
        <View style={styles.iconAddCircleOutline}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <Text style={styles.addReference}>Add reference</Text>
        </View>
      </View>
      <View style={[styles.telNunber, styles.namePosition]}>
        <View style={styles.specifyWrapper}>
          <View style={styles.specifyWrapper}>
            <View style={[styles.specifyChild, styles.childLayout]} />
            <Text style={[styles.relation1, styles.name1Typo]}>
              Telephone number
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.address, styles.namePosition]}>
        <View style={[styles.specifyChild, styles.childLayout]} />
        <Text style={[styles.relation1, styles.name1Typo]}>Address</Text>
      </View>
      <View style={[styles.name, styles.namePosition]}>
        <View style={[styles.nameChild, styles.childLayout]} />
        <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
        <Text style={[styles.person1, styles.name1Typo]}>Person 1</Text>
      </View>
      <View style={[styles.references, styles.namePosition]}>
        <Text style={[styles.text, styles.textTypo]}>1/1</Text>
        <Text style={[styles.references2, styles.textTypo]}>References</Text>
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
  childLayout: {
    borderRadius: Border.br_3xs,
    height: 48,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  name1Typo: {
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  namePosition: {
    left: 51,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    color: Color.colorSlategray,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  references1Child: {
    width: 428,
    height: 325,
    left: 0,
    top: 0,
    position: "absolute",
  },
  references1Item: {
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
    width: 333,
    top: 0,
  },
  relation1: {
    top: 15,
    left: 23,
    width: 285,
  },
  specifyWrapper: {
    width: 333,
    height: 48,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupIcon: {
    height: "95%",
    width: "12.93%",
    top: "-5%",
    right: "87.73%",
    bottom: "10%",
    left: "-0.66%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  addReference: {
    left: 25,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    width: 126,
    color: Color.colorSlategray,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  iconAddCircleOutline: {
    height: "22.99%",
    width: "45.35%",
    top: "77.01%",
    right: "53.15%",
    bottom: "0%",
    left: "1.5%",
    position: "absolute",
  },
  relation: {
    top: 454,
    left: 49,
    height: 87,
    width: 333,
    position: "absolute",
  },
  telNunber: {
    top: 394,
    width: 333,
    height: 48,
  },
  address: {
    top: 334,
    width: 333,
    height: 48,
  },
  nameChild: {
    top: 26,
    width: 332,
  },
  name1: {
    top: 41,
    left: 22,
    width: 284,
  },
  person1: {
    left: 3,
    width: 330,
    top: 0,
  },
  name: {
    top: 248,
    height: 74,
    width: 333,
  },
  text: {
    left: 300,
    width: 29,
  },
  references2: {
    width: 223,
    left: 0,
  },
  references: {
    top: 201,
    width: 329,
    height: 27,
  },
  references1: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default References1;
