import React, { Component } from "react";
import { TouchableOpacity, View, StatusBar, ScrollView } from "react-native";
import Container from "AppLevelComponents/UI/Container";
import { Colors } from "UIProps/Colors";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomText from "AppLevelComponents/UI/CustomText";
import Divider from "AppLevelComponents/UI/Divider";
import Header from "AppLevelComponents/UI/Header";
import SubHeader from "../../AppLevelComponents/UI/SubHeader";
import Fonts from "UIProps/Fonts";
import ProfilePic from "AppLevelComponents/UI/ProfilePic";
import Constants from "Helpers/Constants";
import ProfileLabel from "./components/ProfileLabel";
import HelperMethods from 'Helpers/Methods'
import InfoItem from "./components/InfoItem";
import { Row, Grid, Col } from "react-native-easy-grid";
import Icons from "../../AppLevelComponents/UI/Icons";
import { UserInfoConsumer } from "../../AppLevelComponents/Contexts/CxtUserInfo";

export class Profile extends Component {
  state = {
    selectProfilePicSource: false
  };
  openBS_sourceSelection() {}

  render() {
    return (
      <UserInfoConsumer>
          {context => {
            const {userData} = context
                          return(
                              
                      
      <Container padding={0}>
        <Header>
          <View>
            <SubHeader
              title="My Profile"
              type={Constants.header_back_middle_right}
            />
            <View style={styles.headerContent}>
              <ProfilePic
                showCameraIcon
                style={{ marginTop: 10 }}
                size={80}
                pic={userData.pic_path == '' ? "https://images.pexels.com/photos/1877913/pexels-photo-1877913.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500": userData.pic_path}
              />
              <CustomText
                text={userData.name}
                style={{ marginVertical: 8 }}
                color={Colors.black}
                font={Fonts.heavy}
              />
              <ProfileLabel label={userData.role} />
            </View>
          </View>

          <View style={[styles.pencilCircle, { bottom: -13 }]}>
            <TouchableOpacity>
              <Icons
                lib="EvilIcons"
                name="pencil"
                size={25.5}
                color={Colors.accent}
              />
            </TouchableOpacity>
          </View>
        </Header>
        <ScrollView contentContainerStyle={{ width: "100%" }}>
          <Grid
            style={{
              alignItems: "center",
              // padding: 40,
              paddingTop: 30,
              flex: 1,
              width: "100%"
            }}
          >
            <Row style={styles.infoContainer}>
              <Col style={{}}>
                <InfoItem title="Roll Number" info={userData.student_code} />
                <InfoItem title="Subject" info={userData.section.class.group} />
              </Col>

              <Col style={styles.colRight}>
                <InfoItem title="Course" info={'missing'} />
                <InfoItem title="Batch" info={userData.student_info.session} />
              </Col>
            </Row>
            <Row style={[styles.infoContainer, { paddingLeft: 0 }]}>
              <Divider style={{ marginVertical: 13 }} color="#E8E8EA" />

              <View style={styles.pencilCircle}>
                <TouchableOpacity>
                  <Icons
                    lib="EvilIcons"
                    name="pencil"
                    size={25.5}
                    color={Colors.accent}
                  />
                </TouchableOpacity>
              </View>
            </Row>

            <Row style={styles.infoContainer}>
              <Col style={{}}>
                <InfoItem title="Date of Birth" info={HelperMethods.formatDate_DMY(userData.student_info.birthday)} />
                <InfoItem title="Address" info={userData.address} />
              </Col>

              <Col style={styles.colRight}>
                <InfoItem title="Email" info={userData.email} />
                <InfoItem title="Batch" info="missing" />
              </Col>
            </Row>

            <Row style={styles.infoContainer}>
              <Col style={{}}>
                <InfoItem title="State" info="missing" />
              </Col>

              <Col style={styles.colRight}>
                <InfoItem title="Pin" info="missing" />
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </Container>
      )
                      }}
      </UserInfoConsumer>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  headerContent: {
    width: "100%",
    // height: "100%",
    alignItems: "center"
  },

  infoContainer: {
    flex: 0,
    paddingLeft: 40,
    width: "100%",
    alignItems: "center"
  },

  colRight: {
    paddingLeft: 20,
    paddingRight: 10,
    height: "100%"
  },

  infoRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25
  },

  pencilCircle: {
    width: 29,
    height: 29,
    right: 30,
    position: "absolute",
    borderRadius: 100 / 2,
    backgroundColor: "#f7f7f9",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(112, 112, 112, 0.29)",
    alignItems: "center",
    justifyContent: "center",
    elevation: 19,
    shadowColor: "#000",
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 5
  }
});
export default Profile;
