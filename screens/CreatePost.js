import React, { Component } from 'react';
import { Text, View,StyleSheet,ScrollView,SafeAreaView,Platform,Image,TextInput } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker"
import { RFValue } from "react-native-responsive-fontsize";

export default class CreatePost extends Component {
  constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
        previewImage: "image_1",
        dropdownHeight: 40

      };
  }
    render() {
      let preview_images= {
       image_1 : require("../post_image_1.jpg"),
       image_2 : require("../post_image_2.jpg"),
       image_3 : require("../post_image_3.jpg"),
       image_4 : require("../post_image_4.jpg"),
       image_5 : require("../post_image_5.jpg")
     }
     return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>New Post</Text>
                    </View>
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <Image
                            source={preview_images[this.state.previewImage]}
                            style={styles.previewImage}
                        ></Image>
                        <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                            <DropDownPicker
                                items={[
                                    { label: "Image 1", value: "image_1" },
                                    { label: "Image 2", value: "image_2" },
                                    { label: "Image 3", value: "image_3" },
                                    { label: "Image 4", value: "image_4" },
                                    { label: "Image 5", value: "image_5" }
                                ]}
                                defaultValue={this.state.previewImage}
                                containerStyle={{
                                    height: 40,
                                    borderRadius: 20,
                                    marginBottom: 10
                                }}
                                onOpen={() => {
                                    this.setState({ dropdownHeight: 170 });
                                }}
                                onClose={() => {
                                    this.setState({ dropdownHeight: 40 });
                                }}
                                style={{ backgroundColor: "transparent" }}
                                itemStyle={{
                                    justifyContent: "flex-start"
                                }}
                                dropDownStyle={{ backgroundColor: "#2a2a2a" }}
                                labelStyle={{
                                    color: "white"
                                }}
                                arrowStyle={{
                                    color: "white"
                                }}
                                onChangeItem={item =>
                                    this.setState({
                                        previewImage: item.value
                                    })
                                }
                            />
                        </View>

                        <TextInput
                            style={styles.inputFont}
                            onChangeText={caption => this.setState({ caption })}
                            placeholder={"Caption"}
                            placeholderTextColor="white"
                        />
                    </ScrollView>
                </View>
                <View style={{ flex: 0.08 }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    fieldsContainer: {
        flex: 0.85
    },
    previewImage: {
        width: "93%",
        height: RFValue(250),
        alignSelf: "center",
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        resizeMode: "contain"
    },
    inputFont: {
        height: RFValue(40),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: "white"
    }
});
