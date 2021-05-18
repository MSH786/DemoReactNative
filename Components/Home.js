import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";

function Home({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor="#0E151F" />
      <View style={styles.container}>
        <View
          style={{ width: wp("100%"), height: hp("17%"), alignItems: "center" }}
        >
          <View style={styles.rect1}>
            <View
              style={{
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ width: "80%" }}>
                <View style={styles.searchView}>
                  <View style={styles.searchiconview}>
                    <Icon
                      name="search"
                      size={20}
                      color="#898D93"
                      style={styles.searchIcon}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.textArea1}
                      placeholder="Eposta Veya Cep Telefonu"
                      placeholderTextColor="grey"
                    />
                  </View>
                </View>
              </View>
              <View style={{ width: "20%", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#1E2832",
                    width: "90%",
                    alignItems: "center",
                    paddingTop: 12,
                    paddingBottom: 12,
                    borderRadius: 6,
                    margin: 5,
                  }}
                >
                  <Icon name="prescription-bottle" size={20} color="#898D93" />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.rect2}>
            <View style={styles.rect02}>
              <View style={styles.rect0201}>
                <Icon
                  name="th-large"
                  size={20}
                  color="#2197C9"
                  style={styles.icon}
                />
                <Text style={styles.txt}>Tumu</Text>
              </View>
              <View style={styles.rect0202}>
                <Icon
                  name="car"
                  size={20}
                  color="#898D93"
                  style={styles.icon}
                />
                <Text style={styles.txt1}>Sedan</Text>
              </View>
              <View style={styles.rect0203}>
                <Icon
                  name="car"
                  size={20}
                  color="#898D93"
                  style={styles.icon}
                />
                <Text style={styles.txt1}>Arazi & SUV</Text>
              </View>
              <View style={styles.rect0204}>
                <Icon
                  name="car"
                  size={20}
                  color="#898D93"
                  style={styles.icon}
                />
                <Text style={styles.txt1}>Hatchback</Text>
              </View>
              <View style={styles.rect0205}>
                <Icon
                  name="car"
                  size={20}
                  color="#898D93"
                  style={styles.icon}
                />
                <Text style={styles.txt1}>Ticari</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={{ width: wp("100%"), height: hp("70%") }}>
            <View style={styles.rect3}>
              <LinearGradient
                colors={["#2D5A6F", "#0B2C4D", "#0E254E"]}
                style={styles.linearGradient}
              >
                <View style={styles.rect03}>
                  <View style={styles.rect0301}>
                    <Text style={styles.txt03View}>
                      Studio Ozeligi ili{" "}
                      <Text style={styles.txt003View}>
                        aracinizi in eyi sekilde sergiliyen
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.rect0302}>
                    <Image
                      source={require("../assets/image/car.png")}
                      resizeMode="contain"
                      style={styles.img}
                    ></Image>
                  </View>
                </View>
              </LinearGradient>
            </View>

            <ScrollView>
              <View style={styles.rect4}>
                <View style={styles.rect04}>
                  <View style={styles.row1}>
                    <View style={styles.col01}>
                      <View style={styles.card}>
                        <Image
                          source={require("../assets/image/carr.jpg")}
                          resizeMode="contain"
                          style={styles.img1}
                        ></Image>
                        <View style={styles.minirect}>
                          <View style={styles.minirect1}>
                            <Text style={styles.audi}>Audi A4</Text>
                          </View>
                          <View style={styles.minirect2}>
                            <Text style={styles.number}>271.000</Text>
                          </View>
                        </View>
                        <View style={styles.minirect}>
                          <View style={styles.minirect1}>
                            <Text style={styles.audi1}>
                              <Icon name="road" size={14} color="#8794A5" />{" "}
                              75000
                            </Text>
                          </View>
                          <View style={styles.minirect2}>
                            <Text style={styles.number1}>
                              <Icon
                                name="map-marker"
                                size={14}
                                color="#8794A5"
                              />{" "}
                              Maltepe
                            </Text>
                          </View>
                        </View>
                        <View style={styles.minirect}>
                          <View style={styles.minirect1}>
                            <Text style={styles.audi1}>
                              <Icon name="road" size={14} color="#8794A5" />{" "}
                              Otomatik
                            </Text>
                          </View>
                          <View style={styles.minirect2}>
                            <Text style={styles.number1}>
                              <Icon
                                name="map-marker"
                                size={14}
                                color="#8794A5"
                              />{" "}
                              Dizel
                            </Text>
                          </View>
                        </View>
                      </View>
                      <Image
                        source={require("../assets/image/caar.png")}
                        resizeMode="contain"
                        style={styles.img02}
                      ></Image>
                    </View>
                    <View style={styles.col2}>
                      <Image
                        source={require("../assets/image/coin.png")}
                        resizeMode="contain"
                        style={styles.img2}
                      ></Image>

                      <View style={styles.card}>
                        <Image
                          source={require("../assets/image/carr.jpg")}
                          resizeMode="contain"
                          style={styles.img1}
                        ></Image>
                        <View style={styles.minirect}>
                          <View style={styles.minirect1}>
                            <Text style={styles.audi}>Audi A4</Text>
                          </View>
                          <View style={styles.minirect2}>
                            <Text style={styles.number}>271.000</Text>
                          </View>
                        </View>
                        <View style={styles.minirect}>
                          <View style={styles.minirect1}>
                            <Text style={styles.audi1}>
                              <Icon name="road" size={14} color="#8794A5" />{" "}
                              75000
                            </Text>
                          </View>
                          <View style={styles.minirect2}>
                            <Text style={styles.number1}>
                              <Icon
                                name="map-marker"
                                size={14}
                                color="#8794A5"
                              />{" "}
                              Maltepe
                            </Text>
                          </View>
                        </View>
                        <View style={styles.minirect}>
                          <View style={styles.minirect1}>
                            <Text style={styles.audi1}>
                              <Icon name="road" size={14} color="#8794A5" />{" "}
                              Otomatik
                            </Text>
                          </View>
                          <View style={styles.minirect2}>
                            <Text style={styles.number1}>
                              <Icon
                                name="map-marker"
                                size={14}
                                color="#8794A5"
                              />{" "}
                              Dizel
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.tabView}>
          <View style={styles.col001}>
            <Text style={styles.tab1text}>
              <Icon name="car" size={15} color="#898D93" style={styles.icon} />{" "}
              Vitrin
            </Text>
          </View>
          <View style={styles.col002}>
            <Icon name="user" size={22} color="#898D93" style={styles.icon} />
          </View>
          <View style={styles.col003}>
            <Icon name="camera" size={22} color="#898D93" style={styles.icon} />
          </View>
          <View style={styles.col004}>
            <Icon
              name="comments"
              size={22}
              color="#898D93"
              style={styles.icon}
            />
          </View>
          <View style={styles.col005}>
            <Image
              source={require("../assets/image/tabimg.png")}
              resizeMode="contain"
              style={styles.tabimgg}
            ></Image>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E151F",
  },
  linearGradient: {
    width: "92%",
    padding: 5,
    borderRadius: 6,
    paddingTop: "3%",
    paddingBottom: "3%",
  },
  main: {
    width: wp("100%"),
  },

  rect1: {
    width: "92%",
    alignItems: "center",
    marginTop: "2%",
  },
  searchView: {
    width: "98%",
    padding: 4,
    borderRadius: 8,
    backgroundColor: "#1E2832",
    flexDirection: "row",
    elevation: 6,
  },
  searchiconview: {
    width: "12%",
    alignItems: "center",
  },
  searchIcon: {
    top: 8,
  },
  inputView: {
    width: "88%",
  },

  textArea1: {
    width: "100%",
    paddingLeft: 15,
    height: 40,
    fontSize: RFValue(12, 580),
    justifyContent: "flex-start",
    color: "#fff",
  },
  rect2: {
    width: "100%",
    alignItems: "center",
    marginTop: "3%",
    alignSelf: "center",
  },
  rect02: {
    width: "92%",
    flexDirection: "row",
  },
  rect0201: {
    width: "12%",
    alignItems: "center",
  },
  rect0202: {
    width: "22%",
    alignItems: "center",
  },
  rect0203: {
    width: "22%",
    alignItems: "center",
  },
  rect0204: {
    width: "22%",
    alignItems: "center",
  },
  rect0205: {
    width: "22%",
    alignItems: "center",
  },
  icon: {
    margin: 4,
  },
  txt: {
    color: "#2197C9",
    fontSize: RFValue(11, 580),
  },
  txt1: {
    color: "#898D93",
    fontSize: RFValue(11, 580),
  },
  rect3: {
    width: "100%",
    marginBottom: "2%",
    marginTop: "1%",
    alignItems: "center",
  },
  rect03: {
    width: "100%",
    flexDirection: "row",
  },
  rect0301: {
    width: "50%",
    padding: 7,
    paddingTop: "8%",
  },
  rect0302: {
    width: "50%",
    alignItems: "center",
  },
  img: {
    width: "90%",
    height: 120,
  },
  txt03View: {
    color: "#898D93",
    fontSize: RFValue(14, 580),
  },
  txt003View: {
    color: "#D4D8DB",
    fontSize: RFValue(14, 580),
  },
  rect4: {
    width: "100%",
    marginTop: "5%",
    alignItems: "center",
  },
  rect04: {
    width: "92%",
  },
  row1: {
    width: "100%",
    flexDirection: "row",
  },
  col01: {
    width: "50%",
    alignItems: "center",
  },
  col2: {
    width: "50%",
    alignItems: "center",
  },
  card: {
    width: "94%",
    alignItems: "center",
    paddingBottom: "4%",
    borderRadius: 6,
    elevation: 6,
    backgroundColor: "#1E2832",
  },
  img1: {
    width: 300,
    height: 117,
    borderRadius: 10,
    marginBottom: "3%",
  },
  minirect: {
    width: "100%",
    flexDirection: "row",
    marginTop: "2%",
    paddingLeft: 6,
    padding: 2,
  },
  minirect1: {
    width: "50%",
  },
  minirect2: {
    width: "50%",
  },
  audi: {
    color: "#898D93",
    fontSize: RFValue(12, 580),
  },
  number: {
    color: "#2C799F",
    fontSize: RFValue(12, 580),
  },
  audi1: {
    color: "#8794A5",
    fontSize: RFValue(12, 580),
  },
  number1: {
    color: "#8794A5",
    fontSize: RFValue(12, 580),
  },
  img2: {
    width: 400,
    height: 170,
    top: -5,
  },
  img02: {
    width: 400,
    height: 170,
    top: 5,
  },
  tabView: {
    height: hp("8%"),
    width: wp("100%"),
    borderColor: "#000",
    marginBottom: 0,
    backgroundColor: "#0E151F",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
  },
  col001: {
    width: "20%",
    paddingTop: "2%",
    alignItems: "center",
  },
  col002: {
    width: "20%",
    alignItems: "center",
    paddingTop: "2%",
  },
  col003: {
    width: "20%",
    alignItems: "center",
    paddingTop: "2%",
  },
  col004: {
    width: "20%",
    alignItems: "center",
    paddingTop: "2%",
  },
  col005: {
    width: "20%",
    alignItems: "center",
    paddingTop: "2%",
  },
  icon: {
    margin: 4,
  },
  tab1text: {
    backgroundColor: "#2C799F",
    padding: 6,
    borderRadius: 10,
  },
  tabimgg: {
    width: 50,
    height: 40,
  },
});

export default Home;
