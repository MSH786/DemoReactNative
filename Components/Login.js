import React, { useState } from "react";
import { Container, Text, Grid, Col, View, Content } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";

function Login({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const abbas = () => {
    setModalVisible(true);
  };

  const zuhair = () => {
    setModalVisible(false);
  };

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
                  <View style={styles.rect1}></View>

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
                    <Text style={styles.txt1}>Uye Girisi</Text>
                  </View>

                  {/*Text Input View*/}
                  <View style={styles.rect3}>
                    <View style={styles.inputView}>
                      <TextInput
                        style={styles.textArea1}
                        placeholder="Eposta Veya Cep Telefonu"
                        placeholderTextColor="grey"
                      />
                    </View>
                  </View>

                  {/*Button View*/}
                  <TouchableOpacity
                    onPress={() => {
                      abbas();
                    }}
                  >
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

                  {/*Icons View*/}
                  <View style={styles.rect5}>
                    <View style={styles.recthr3}>
                      <Icon
                        name="apple"
                        size={22}
                        color="#000"
                        style={styles.icon}
                      />
                      <Icon
                        name="google"
                        size={22}
                        color="#1B99CC"
                        style={styles.icon}
                      />
                      <Icon
                        name="facebook"
                        size={22}
                        color="#3F5184"
                        style={styles.icon}
                      />
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

                {/* Modal start */}

                <View
                  style={styles.centeredView}
                  onStartShouldSetResponder={() => zuhair()}
                >
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(false);
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <View style={styles.modalviewbox}>
                          <Icon
                            name="male"
                            size={28}
                            color="#1B99CC"
                            style={styles.modalicon}
                          />
                          <Text style={styles.modaltext}>Bireysel</Text>
                        </View>

                        <View style={styles.recthr1}>
                          <View style={styles.recthr3}>
                            <View style={styles.recthr4} />
                            <View>
                              <Text style={styles.hrtxt}>veya</Text>
                            </View>
                            <View style={styles.recthr4} />
                          </View>
                        </View>

                        <View style={styles.modalviewbox}>
                          <Icon
                            name="male"
                            size={28}
                            color="#1B99CC"
                            style={styles.modalicon}
                          />
                          <Text style={styles.modaltext}>Kurumsal</Text>
                        </View>
                      </View>
                    </View>
                  </Modal>
                </View>
                {/* Modal end */}
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
    height: hp("100%"),
    width: "100%",
  },
  col1: {
    width: "100%",
    alignItems: "center",
  },
  rect1: {
    flex: 0.3,
  },
  rect2: {
    width: "100%",
    alignItems: "center",
    flex: 0.6,
  },
  img: {
    width: "50%",
  },
  txt1: {
    color: "#898D93",
    fontSize: RFValue(13, 580),
    textAlign: "center",
  },
  rect3: {
    width: "100%",
    alignItems: "center",
  },
  inputView: {
    width: "90%",
    marginTop: "2%",
    backgroundColor: "#424E5C",
    borderRadius: 6,
  },
  textArea1: {
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
    backgroundColor: "#1B99CC",
    padding: 9,
    borderRadius: 4,
    opacity: 6,
  },
  txt2: {
    color: "#fff",
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
  rect5: {
    width: "100%",
    alignItems: "center",
    marginTop: "4%",
  },
  icon: {
    backgroundColor: "#D4D8DB",
    width: "10%",
    borderRadius: 50,
    padding: 10,
    margin: 5,
    textAlign: "center",
  },
  rect6: {
    width: "100%",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "5%",
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
  centeredView: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E2432",
    opacity: 0.9,
  },
  modalView: {
    margin: 0,
    width: wp("55%"),
    height: hp("39%"),
    backgroundColor: "#252724",
    borderRadius: 10,
    padding: 15,
    paddingTop: "5%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
  },
  modalviewbox: {
    width: "100%",
    borderRadius: 14,
    paddingTop: "18%",
    paddingBottom: "18%",
    backgroundColor: "#1F1F1F",
    padding: 20,
    flexDirection: "row",
  },
  modalicon: {
    marginTop: 2,
  },
  modaltext: {
    fontSize: RFValue(14, 580),
    color: "#1B99CC",
    top: 6,
    left: 30,
  },
});

export default Login;
