import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const References3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.references3}>
      <Image
        style={styles.references3Child}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Image
        style={styles.references3Item}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <Pressable
        style={styles.next}
        onPress={() => navigation.navigate("Successful")}
      >
        <Pressable
          style={[styles.nextChild, styles.childBorder]}
          onPress={() => navigation.navigate("Successful")}
        />
        <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
        <Pressable
          style={styles.cancel}
          onPress={() => navigation.navigate("PersonalInfo1")}
        >
          <Text style={[styles.cancel1, styles.submitTypo]}>Cancel</Text>
        </Pressable>
      </Pressable>
      <View style={[styles.aMember, styles.aMemberPosition]}>
        <View style={styles.namesOfCoop}>
          <View style={[styles.namesOfCoopChild, styles.othersItemPosition]} />
          <Text style={[styles.namesOfCooperatives, styles.youTypo]}>
            Name/s of Cooperative/s
          </Text>
        </View>
        <Text style={[styles.areYouA, styles.youTypo]}>
          Are you a member of other cooperative?
        </Text>
        <View style={[styles.no, styles.noLayout]}>
          <Text style={[styles.no1, styles.youTypo]}>No</Text>
          <View style={[styles.noChild, styles.childBorder]} />
        </View>
        <View style={[styles.yes, styles.noLayout]}>
          <Text style={[styles.no1, styles.youTypo]}>Yes</Text>
          <View style={[styles.noChild, styles.childBorder]} />
        </View>
      </View>
      <View style={[styles.howDiYouHear, styles.aMemberPosition]}>
        <Text style={[styles.howDidYou, styles.youTypo]}>
          How did you hear about San Jose Public Market Vendors Credit
          Cooperative?
        </Text>
        <View style={[styles.others, styles.othersLayout1]}>
          <Text style={[styles.others1, styles.youTypo]}>Others</Text>
          <View style={[styles.noChild, styles.childBorder]} />
          <View style={[styles.others2, styles.othersLayout]}>
            <View style={[styles.othersItem, styles.othersLayout]} />
            <Text style={[styles.specify, styles.youTypo]}>Specify</Text>
          </View>
        </View>
        <View style={[styles.referredBy, styles.othersLayout1]}>
          <Text style={[styles.others1, styles.youTypo]}>Referred by</Text>
          <View style={[styles.noChild, styles.childBorder]} />
          <View style={[styles.others2, styles.othersLayout]}>
            <View style={[styles.othersItem, styles.othersLayout]} />
            <Text style={[styles.specify, styles.youTypo]}>Specify</Text>
          </View>
        </View>
        <View style={[styles.internet, styles.noLayout]}>
          <Text style={[styles.internetSearchOr, styles.youTypo]}>
            Internet search or social media
          </Text>
          <View style={[styles.noChild, styles.childBorder]} />
        </View>
        <View style={[styles.fliers, styles.noLayout]}>
          <Text style={[styles.fliersOfInformation, styles.youTypo]}>
            Fliers of information drive
          </Text>
          <View style={[styles.noChild, styles.childBorder]} />
        </View>
        <View style={[styles.events, styles.adsLayout]}>
          <Text style={[styles.others1, styles.youTypo]}>
            Events or trade fair
          </Text>
          <View style={[styles.noChild, styles.childBorder]} />
        </View>
        <View style={[styles.ads, styles.adsLayout]}>
          <Text style={[styles.others1, styles.youTypo]}>Advertisement</Text>
          <View style={[styles.noChild, styles.childBorder]} />
        </View>
      </View>
      <View style={styles.references}>
        <Text style={[styles.text, styles.textTypo]}>1/1</Text>
        <Text style={[styles.references1, styles.textTypo]}>References</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  submitTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_base,
  },
  aMemberPosition: {
    left: 48,
    width: 332,
    position: "absolute",
  },
  othersItemPosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  youTypo: {
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  noLayout: {
    height: 17,
    position: "absolute",
  },
  othersLayout1: {
    height: 72,
    width: 252,
    left: 1,
    position: "absolute",
  },
  othersLayout: {
    width: 231,
    height: 48,
    position: "absolute",
  },
  adsLayout: {
    width: 155,
    height: 17,
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
  references3Child: {
    width: 428,
    height: 325,
    left: 0,
    top: 0,
    position: "absolute",
  },
  references3Item: {
    top: 149,
    width: 429,
    height: 777,
    left: 0,
    position: "absolute",
  },
  nextChild: {
    left: 128,
    borderRadius: Border.br_6xl,
    borderColor: Color.colorDarkslateblue_200,
    borderWidth: 2,
    width: 141,
    height: 48,
    top: 0,
  },
  submit: {
    top: 14,
    left: 169,
    color: Color.colorDarkslateblue_200,
    position: "absolute",
  },
  cancel1: {
    color: Color.colorIndianred,
  },
  cancel: {
    top: 13,
    left: 0,
    position: "absolute",
  },
  next: {
    top: 831,
    left: 97,
    width: 269,
    height: 48,
    position: "absolute",
  },
  namesOfCoopChild: {
    width: 332,
    height: 48,
    position: "absolute",
  },
  namesOfCooperatives: {
    left: 22,
    width: 296,
    top: 15,
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
  },
  namesOfCoop: {
    top: 63,
    width: 332,
    height: 48,
    left: 0,
    position: "absolute",
  },
  areYouA: {
    width: 283,
    left: 0,
    top: 0,
  },
  no1: {
    width: 40,
    left: 21,
    top: 0,
  },
  noChild: {
    top: 3,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorSlategray,
    borderWidth: 1,
    width: 12,
    height: 12,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  no: {
    left: 62,
    width: 61,
    top: 28,
    height: 17,
  },
  yes: {
    left: 1,
    width: 61,
    top: 28,
    height: 17,
  },
  aMember: {
    top: 591,
    height: 111,
    width: 332,
  },
  howDidYou: {
    width: 332,
    left: 0,
    top: 0,
  },
  others1: {
    width: 134,
    left: 21,
    top: 0,
  },
  othersItem: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  specify: {
    left: 23,
    width: 188,
    top: 15,
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
  },
  others2: {
    top: 24,
    left: 21,
  },
  others: {
    top: 240,
  },
  referredBy: {
    top: 156,
  },
  internetSearchOr: {
    width: 225,
    left: 21,
    top: 0,
  },
  internet: {
    top: 130,
    width: 246,
    left: 0,
  },
  fliersOfInformation: {
    width: 198,
    left: 21,
    top: 0,
  },
  fliers: {
    top: 101,
    width: 219,
    left: 1,
  },
  events: {
    top: 73,
    left: 1,
  },
  ads: {
    top: 47,
    left: 0,
  },
  howDiYouHear: {
    top: 251,
    height: 312,
    width: 332,
  },
  text: {
    left: 300,
    width: 29,
  },
  references1: {
    width: 223,
    left: 0,
  },
  references: {
    top: 201,
    left: 51,
    width: 329,
    height: 27,
    position: "absolute",
  },
  references3: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default References3;
