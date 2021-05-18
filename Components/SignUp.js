import React, { useState } from "react";
import { Container, Text, Grid, Col, View, Content } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";

function SignUp({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor="#222222" />
      <Container>
        <ScrollView>
          <Content>
            <Grid>
              <Col style={styles.col1}>
                <LinearGradient
                  colors={["#222222", "#152B42", "#222222"]}
                  style={styles.linearGradient}
                >
                  <View style={styles.rect1}>
                    <View style={styles.iconview}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.goBack();
                        }}
                      >
                        <View>
                          <Icon
                            name="chevron-left"
                            size={18}
                            color="#fff"
                            style={styles.backicon}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/*Image View*/}
                  <View style={styles.rect2}>
                    <Image
                      source={require("../assets/image/logo.png")}
                      resizeMode="contain"
                      style={styles.img}
                    ></Image>
                    <Text style={styles.txt1}>
                      Hazir alicilar, mutlu saticilar
                    </Text>
                  </View>

                  {/*Text View*/}
                  <View style={styles.rect3}>
                    <Text style={styles.txt01}>Kayit Olun</Text>
                  </View>

                  {/*Text Input View*/}
                  <View style={styles.rect3}>
                    <View style={styles.inputView}>
                      <TextInput
                        style={styles.textArea1}
                        placeholder="Ad"
                        placeholderTextColor="grey"
                      />
                    </View>
                  </View>
                  {/*Text Input View*/}
                  <View style={styles.rect3}>
                    <View style={styles.inputView}>
                      <TextInput
                        style={styles.textArea1}
                        placeholder="Soyad"
                        placeholderTextColor="grey"
                      />
                    </View>
                  </View>
                  {/*Text Input View*/}
                  <View style={styles.rect3}>
                    <View style={styles.inputView}>
                      <TextInput
                        style={styles.textArea1}
                        placeholder="il"
                        placeholderTextColor="grey"
                      />
                    </View>
                  </View>
                  {/*Text Input View*/}
                  <View style={styles.rect3}>
                    <View style={styles.inputView}>
                      <TextInput
                        style={styles.textArea1}
                        placeholder="ilce"
                        placeholderTextColor="grey"
                      />
                    </View>
                  </View>
                  {/*Text Input View*/}
                  <View style={styles.rect3}>
                    <View style={styles.inputView0}>
                      <View style={styles.flagiconview}>
                        <Image
                          source={require("../assets/image/flag.png")}
                          resizeMode="contain"
                          style={styles.flagimg}
                        ></Image>
                      </View>
                      <View style={styles.inputrect}>
                        <TextInput
                          style={styles.textArea0}
                          placeholder="Turkiye"
                          placeholderTextColor="grey"
                        />
                      </View>
                      <View style={styles.downiconview}>
                        <Icon
                          name="chevron-down"
                          size={18}
                          color="#fff"
                          style={styles.downicon}
                        />
                      </View>
                    </View>
                    <View style={styles.inputView00}>
                      <View style={styles.noview}>
                        <Text style={styles.notxt}>+90</Text>
                      </View>
                      <View style={{ width: "85%" }}>
                        <TextInput
                          style={styles.textArea00}
                          placeholder="530 700 00 00"
                          placeholderTextColor="grey"
                        />
                      </View>
                    </View>
                  </View>

                  {/*Button View*/}
                  <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={styles.rect4}>
                      <View style={styles.btn}>
                        <Text style={styles.txt2}>Oturum Ac</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  {/*Hr View*/}
                  <View style={styles.recthr1}>
                    <View style={styles.recthr2}>
                      <View style={styles.recthr3}>
                        <View style={styles.recthr4} />
                        <View>
                          <Text style={styles.hrtxt}>veya</Text>
                        </View>
                        <View style={styles.recthr4} />
                      </View>
                    </View>
                  </View>

                  {/*Next View*/}
                  <View style={styles.rect4}>
                    <Text style={styles.txt1}>Yani Hesap Olustrun</Text>
                  </View>
                  <View style={styles.rect6}>
                    <View style={styles.rect7}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("SignUp")}
                      >
                        <Text style={styles.txt3}>
                          Kaydolarak veya giris yeparak{" "}
                          <Text style={styles.txt4}>Sartlar ve kosullar</Text>{" "}
                          ve{" "}
                          <Text style={styles.txt4}>Gizlilik Plitikasini</Text>{" "}
                          kabul etmis olursunuz
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </LinearGradient>
              </Col>
            </Grid>
          </Content>
        </ScrollView>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
  },
  col1: {
    width: "100%",
    alignItems: "center",
  },
  rect1: {
    alignItems: "center",
    marginTop: "5%",
  },
  iconview: {
    width: "90%",
  },
  backicon: {
    margin: 4,
    backgroundColor: "#646464",
    width: "10%",
    padding: 5,
    borderRadius: 8,
    paddingLeft: "2%",
    paddingRight: "3%",
    textAlign: "center",
  },
  rect2: {
    width: "100%",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "5%",
  },
  img: {
    width: "50%",
  },
  txt1: {
    color: "#898D93",
    fontSize: RFValue(13, 580),
    textAlign: "center",
  },
  txt01: {
    color: "#FBFFFF",
    fontSize: RFValue(15, 580),
    textAlign: "center",
  },
  rect3: {
    width: "100%",
    alignItems: "center",
  },
  inputView: {
    width: "90%",
    marginTop: "3%",
    backgroundColor: "#424E5C",
    borderRadius: 6,
  },
  flagiconview: {
    width: "15%",
    alignItems: "center",
  },
  flagimg: {
    width: 100,
    height: 40,
    top: 2,
  },
  inputrect: {
    width: "75%",
  },
  downiconview: {
    width: "10%",
    alignItems: "center",
  },
  downicon: {
    top: 10,
  },
  inputView0: {
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "#898D93",
    marginTop: "3%",
    flexDirection: "row",
    backgroundColor: "#424E5C",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  inputView00: {
    width: "90%",
    borderColor: "#898D93",
    flexDirection: "row",
    backgroundColor: "#424E5C",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  noview: {
    width: "15%",
    borderRightWidth: 1,
    alignItems: "center",
    borderColor: "#898D93",
  },
  notxt: {
    color: "#898D93",
    fontSize: RFValue(15, 580),
    margin: 10,
  },
  textArea1: {
    width: "100%",
    paddingLeft: 15,
    height: 42,
    fontSize: RFValue(12, 580),
    justifyContent: "flex-start",
    color: "#fff",
  },
  textArea0: {
    width: "100%",
    paddingLeft: 15,
    height: 42,
    fontSize: RFValue(12, 580),
    justifyContent: "flex-start",
    color: "#fff",
  },
  textArea00: {
    width: "100%",
    paddingLeft: 15,
    height: 42,
    fontSize: RFValue(12, 580),
    justifyContent: "flex-start",
    color: "#fff",
  },
  rect4: {
    width: "100%",
    marginTop: "3%",
    alignItems: "center",
  },
  btn: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#12354B",
    padding: 9,
    borderRadius: 4,
    opacity: 6,
  },
  txt2: {
    color: "#898D93",
    fontSize: RFValue(12, 580),
  },
  recthr1: {
    width: "100%",
    alignItems: "center",
    marginTop: "5%",
  },
  recthr2: {
    width: "90%",
    alignItems: "center",
  },
  recthr3: {
    flexDirection: "row",
    alignItems: "center",
  },
  recthr4: {
    flex: 1,
    height: 1,
    backgroundColor: "#898D93",
  },
  hrtxt: {
    width: 50,
    textAlign: "center",
    color: "#898D93",
  },

  rect6: {
    width: "100%",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "10%",
  },
  rect7: {
    width: "80%",
    alignItems: "center",
  },
  txt3: {
    color: "#898D93",
    lineHeight: 22,
    fontSize: RFValue(12, 580),
    textAlign: "center",
  },
  txt4: {
    color: "#1B99CC",
    fontSize: RFValue(13, 580),
  },
});

export default SignUp;
