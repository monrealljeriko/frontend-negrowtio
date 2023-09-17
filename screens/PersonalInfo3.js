import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const PersonalInfo3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalInfo3}>
      <Image
        style={styles.personalInfo3Child}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Image
        style={styles.personalInfo3Item}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <View style={styles.next}>
        <Pressable
          style={[styles.nextChild, styles.childBorder]}
          onPress={() => navigation.navigate("EmpBusinessInfo")}
        />
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("PersonalInfo2")}
        >
          <Text style={[styles.back1, styles.next1Typo]}>Back</Text>
        </Pressable>
      </View>
      <View style={[styles.email, styles.emailChildLayout]}>
        <View style={[styles.emailChild, styles.childLayout]} />
        <Text style={[styles.contactNumber, styles.doYouOwnTypo]}>
          Contact number
        </Text>
      </View>
      <View style={[styles.contact, styles.emailChildLayout]}>
        <View style={[styles.emailChild, styles.childLayout]} />
        <Text style={[styles.contactNumber, styles.doYouOwnTypo]}>
          Email Address
        </Text>
      </View>
      <View style={styles.vehicle}>
        <View style={[styles.plateNumber, styles.plateLayout]}>
          <View style={[styles.plateNumberChild, styles.plateLayout]} />
          <Text style={[styles.plateNumber1, styles.specifyTypo]}>
            Plate number
          </Text>
        </View>
        <View style={[styles.type, styles.typeLayout]}>
          <View style={[styles.typeChild, styles.typeLayout]} />
          <Text style={[styles.plateNumber1, styles.specifyTypo]}>Type</Text>
        </View>
        <Text style={[styles.doYouOwn, styles.doYouOwnTypo]}>
          Do you own a vehicle?
        </Text>
        <View style={[styles.no, styles.noLayout]}>
          <Text style={[styles.no1, styles.no1Typo]}>No</Text>
          <View style={[styles.noChild, styles.childBorder]} />
        </View>
        <View style={[styles.yes, styles.noLayout]}>
          <Text style={[styles.no1, styles.no1Typo]}>Yes</Text>
          <View style={[styles.noChild, styles.childBorder]} />
        </View>
      </View>
      <View style={[styles.length, styles.emailChildLayout]}>
        <View style={[styles.emailChild, styles.childLayout]} />
        <Text style={[styles.contactNumber, styles.doYouOwnTypo]}>
          Length of time at present address
        </Text>
      </View>
      <View style={[styles.provincial, styles.emailChildLayout]}>
        <View style={[styles.emailChild, styles.childLayout]} />
        <Text style={[styles.contactNumber, styles.doYouOwnTypo]}>
          Provincial address
        </Text>
      </View>
      <View style={[styles.presentAddress, styles.emailChildLayout]}>
        <View style={[styles.presentAddressChild, styles.childLayout]} />
        <View style={[styles.others, styles.othersLayout]}>
          <View style={[styles.othersChild, styles.othersLayout]} />
          <Text style={[styles.specify, styles.specifyTypo]}>Specify</Text>
        </View>
        <Text style={[styles.presentAddress1, styles.addressTypo]}>
          Present address
        </Text>
        <View style={[styles.rented, styles.rentedLayout]}>
          <Text style={[styles.others1, styles.specifyTypo]}>Others</Text>
          <View style={[styles.noChild, styles.childBorder]} />
        </View>
        <View style={[styles.mort, styles.noLayout]}>
          <Text style={[styles.mortraged, styles.no1Typo]}>Mortraged</Text>
          <View style={[styles.noChild, styles.childBorder]} />
        </View>
        <View style={[styles.rented1, styles.rentedLayout]}>
          <Text style={[styles.others1, styles.specifyTypo]}>Rented</Text>
          <View style={[styles.noChild, styles.childBorder]} />
        </View>
        <View style={[styles.owned, styles.rentedLayout]}>
          <Text style={[styles.others1, styles.specifyTypo]}>Owned</Text>
          <View style={[styles.noChild, styles.childBorder]} />
        </View>
        <Text style={[styles.address, styles.addressTypo]}>Address</Text>
      </View>
      <View style={styles.personalInfo}>
        <Text style={[styles.text, styles.textTypo]}>3/3</Text>
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
  emailChildLayout: {
    width: 331,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  doYouOwnTypo: {
    width: 283,
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  plateLayout: {
    width: 161,
    height: 48,
    position: "absolute",
  },
  specifyTypo: {
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  typeLayout: {
    width: 154,
    height: 48,
    position: "absolute",
  },
  noLayout: {
    height: 17,
    position: "absolute",
  },
  no1Typo: {
    left: 21,
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  othersLayout: {
    width: 221,
    height: 48,
    position: "absolute",
  },
  addressTypo: {
    width: 278,
    textAlign: "left",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rentedLayout: {
    width: 82,
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
  personalInfo3Child: {
    width: 428,
    height: 325,
    left: 0,
    top: 0,
    position: "absolute",
  },
  personalInfo3Item: {
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
  emailChild: {
    width: 331,
    position: "absolute",
    height: 48,
    top: 0,
  },
  contactNumber: {
    left: 22,
    top: 15,
  },
  email: {
    top: 639,
    left: 48,
    width: 331,
    height: 48,
  },
  contact: {
    top: 697,
    left: 48,
    width: 331,
    height: 48,
  },
  plateNumberChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  plateNumber1: {
    width: 116,
    left: 22,
    top: 15,
  },
  plateNumber: {
    left: 169,
    top: 28,
  },
  typeChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  type: {
    left: 1,
    top: 28,
  },
  doYouOwn: {
    left: 0,
    top: 0,
  },
  no1: {
    width: 40,
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
    width: 61,
    height: 17,
    top: 0,
    left: 230,
  },
  yes: {
    width: 61,
    height: 17,
    top: 0,
    left: 169,
  },
  vehicle: {
    top: 553,
    left: 50,
    width: 330,
    height: 76,
    position: "absolute",
  },
  length: {
    top: 489,
    left: 48,
    width: 331,
    height: 48,
  },
  provincial: {
    top: 426,
    left: 48,
    width: 331,
    height: 48,
  },
  presentAddressChild: {
    top: 26,
    width: 331,
    position: "absolute",
    height: 48,
  },
  othersChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  specify: {
    width: 180,
    left: 22,
    top: 15,
  },
  others: {
    top: 112,
    left: 110,
  },
  presentAddress1: {
    top: 41,
    left: 28,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
  },
  others1: {
    left: 20,
    width: 62,
    top: 0,
  },
  rented: {
    top: 127,
    left: 6,
  },
  mortraged: {
    width: 80,
  },
  mort: {
    top: 84,
    width: 101,
    left: 230,
  },
  rented1: {
    top: 86,
    left: 118,
  },
  owned: {
    top: 83,
    left: 6,
  },
  address: {
    left: 6,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    width: 278,
    top: 0,
  },
  presentAddress: {
    top: 251,
    left: 49,
    height: 160,
  },
  text: {
    left: 296,
  },
  personalInformation: {
    left: 0,
  },
  personalInfo: {
    top: 201,
    left: 51,
    width: 326,
    height: 27,
    position: "absolute",
  },
  personalInfo3: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default PersonalInfo3;
