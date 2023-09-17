import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const EmpBusinessInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.empBusinessInfo}>
      <Image
        style={styles.empBusinessInfoChild}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Image
        style={styles.empBusinessInfoItem}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <View style={styles.next}>
        <Pressable
          style={[styles.nextChild, styles.childBorder]}
          onPress={() => navigation.navigate("SpousesInfo1")}
        />
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("PersonalInfo3")}
        >
          <Text style={[styles.back1, styles.next1Typo]}>Back</Text>
        </Pressable>
      </View>
      <View style={[styles.employementStatus, styles.listLayout]}>
        <Text style={[styles.employmentStatus, styles.whichOfTheTypo]}>
          Employment Status
        </Text>
        <View style={[styles.list, styles.listLayout]}>
          <View style={[styles.no, styles.yesLayout]}>
            <Text style={[styles.contractual, styles.othersTypo]}>
              Contractual
            </Text>
            <View style={[styles.noChild, styles.childBorder]} />
          </View>
          <View style={[styles.yes, styles.yesLayout]}>
            <Text style={[styles.regularOrPermanent, styles.othersTypo]}>
              Regular or permanent
            </Text>
            <View style={[styles.noChild, styles.childBorder]} />
          </View>
          <View style={[styles.yes1, styles.yesLayout]}>
            <Text style={[styles.others, styles.othersTypo]}>Others</Text>
            <View style={[styles.noChild, styles.childBorder]} />
          </View>
        </View>
      </View>
      <View style={[styles.monthlyIncome, styles.incomeLayout]}>
        <Text style={[styles.whichOfThe, styles.whichOfTheTypo]}>
          Which of the following come closest to your monthly income in
          Philippine Pesos?
        </Text>
        <View style={[styles.listIncome, styles.incomeLayout]}>
          <View style={[styles.above, styles.k50kLayout]}>
            <Text style={[styles.above100000, styles.textTypo]}>
              Above 100,000
            </Text>
            <View style={[styles.noChild, styles.childBorder]} />
          </View>
          <View style={[styles.k100k, styles.k30kLayout]}>
            <Text style={[styles.text, styles.textTypo]}>50,001 - 100,000</Text>
            <View style={[styles.noChild, styles.childBorder]} />
          </View>
          <View style={[styles.k50k, styles.k50kLayout]}>
            <Text style={[styles.above100000, styles.textTypo]}>
              30,001 - 50,000
            </Text>
            <View style={[styles.noChild, styles.childBorder]} />
          </View>
          <View style={[styles.k30k, styles.k30kLayout]}>
            <Text style={[styles.text, styles.textTypo]}>15,000 - 30,000</Text>
            <View style={[styles.noChild, styles.childBorder]} />
          </View>
          <View style={[styles.k15k, styles.k50kLayout]}>
            <Text style={[styles.above100000, styles.textTypo]}>
              8,000 - 15,000
            </Text>
            <View style={[styles.noChild, styles.childBorder]} />
          </View>
          <View style={[styles.under8k, styles.k30kLayout]}>
            <Text style={[styles.text, styles.textTypo]}>Under 8,000</Text>
            <View style={[styles.noChild, styles.childBorder]} />
          </View>
        </View>
      </View>
      <View style={[styles.contactNum, styles.businessLayout]}>
        <View style={[styles.specifyWrapper, styles.businessLayout]}>
          <View style={[styles.specifyWrapper, styles.businessLayout]}>
            <View style={[styles.specifyChild, styles.childPosition]} />
            <Text style={[styles.contactNumbers, styles.occupation1Typo]}>
              Contact number/s
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.businessAdd, styles.businessLayout]}>
        <View style={[styles.specifyWrapper, styles.businessLayout]}>
          <View style={[styles.specifyWrapper, styles.businessLayout]}>
            <View style={[styles.specifyChild, styles.childPosition]} />
            <Text style={[styles.contactNumbers, styles.occupation1Typo]}>
              Employer or business address
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.businessName, styles.businessLayout]}>
        <View style={[styles.specifyWrapper, styles.businessLayout]}>
          <View style={[styles.specifyWrapper, styles.businessLayout]}>
            <View style={[styles.specifyChild, styles.childPosition]} />
            <Text style={[styles.contactNumbers, styles.occupation1Typo]}>
              Employer or business name
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.lengthOfService, styles.businessLayout]}>
        <View style={[styles.specifyChild, styles.childPosition]} />
        <Text style={[styles.contactNumbers, styles.occupation1Typo]}>
          Length of service or date started
        </Text>
      </View>
      <View style={[styles.occupation, styles.occupationLayout]}>
        <View style={[styles.occupationChild, styles.occupationLayout]} />
        <Text style={[styles.occupation1, styles.occupation1Typo]}>
          Occupation
        </Text>
      </View>
      <View style={styles.empBusiness}>
        <Text style={[styles.text4, styles.text4Typo]}>1/1</Text>
        <Text
          style={[styles.employmentOrBusiness, styles.text4Typo]}
        >{`Employment or
Business Information`}</Text>
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
  listLayout: {
    width: 344,
    position: "absolute",
  },
  whichOfTheTypo: {
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  yesLayout: {
    height: 17,
    position: "absolute",
  },
  othersTypo: {
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
  incomeLayout: {
    width: 329,
    position: "absolute",
  },
  k50kLayout: {
    width: 149,
    left: 180,
    height: 17,
    position: "absolute",
  },
  textTypo: {
    left: 20,
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  k30kLayout: {
    width: 147,
    height: 17,
    left: 0,
    position: "absolute",
  },
  businessLayout: {
    width: 331,
    height: 48,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  occupation1Typo: {
    left: 22,
    top: 15,
    textAlign: "left",
    color: Color.colorDarkgray,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  occupationLayout: {
    width: 328,
    height: 48,
    position: "absolute",
  },
  text4Typo: {
    color: Color.colorSlategray,
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  empBusinessInfoChild: {
    width: 428,
    height: 325,
    left: 0,
    top: 0,
    position: "absolute",
  },
  empBusinessInfoItem: {
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
    left: 172,
    color: Color.colorDarkslateblue_200,
    top: 14,
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
  employmentStatus: {
    width: 330,
  },
  contractual: {
    width: 133,
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
    width: 154,
    top: 27,
    left: 0,
  },
  regularOrPermanent: {
    width: 151,
  },
  yes: {
    width: 172,
    left: 0,
    top: 0,
  },
  others: {
    width: 135,
  },
  yes1: {
    left: 188,
    width: 156,
    top: 0,
  },
  list: {
    height: 44,
    top: 27,
    left: 0,
  },
  employementStatus: {
    top: 724,
    height: 71,
    left: 51,
  },
  whichOfThe: {
    width: 316,
  },
  above100000: {
    width: 129,
  },
  above: {
    top: 54,
  },
  text: {
    width: 127,
  },
  k100k: {
    top: 54,
  },
  k50k: {
    top: 27,
  },
  k30k: {
    top: 27,
  },
  k15k: {
    top: 0,
  },
  under8k: {
    top: 0,
  },
  listIncome: {
    top: 44,
    height: 71,
    left: 0,
  },
  monthlyIncome: {
    top: 586,
    height: 115,
    left: 51,
  },
  specifyChild: {
    width: 331,
    height: 48,
    position: "absolute",
  },
  contactNumbers: {
    width: 283,
  },
  specifyWrapper: {
    left: 0,
    top: 0,
  },
  contactNum: {
    top: 521,
    left: 51,
  },
  businessAdd: {
    top: 460,
    left: 51,
  },
  businessName: {
    top: 399,
    left: 51,
  },
  lengthOfService: {
    top: 338,
    left: 51,
  },
  occupationChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  occupation1: {
    width: 281,
  },
  occupation: {
    top: 277,
    left: 50,
  },
  text4: {
    left: 296,
    top: 14,
  },
  employmentOrBusiness: {
    left: 0,
    top: 0,
  },
  empBusiness: {
    top: 201,
    width: 319,
    height: 54,
    left: 51,
    position: "absolute",
  },
  empBusinessInfo: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default EmpBusinessInfo;
