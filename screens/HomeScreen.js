import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  View,
  ScrollView,
  Alert,
  Dimensions,
  Modal
 } from 'react-native';
{/*import {db} from '../config/Firebase';*/}

import { Ionicons } from '@expo/vector-icons';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

export default function HomeScreen({navigation}) {
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [invalidModalVisible, setInvalidModalVisible] = useState(false);
  const [oopsModalVisible, setOopsModalVisible] = useState(false);

  {/*const codeText = db.collection("barcodes").doc("barcode").get()
    .then(doc => {
      doc.data('codetext');
      console.log(doc.data('codetext'));
    })
  .catch(err => {
    console.log('Error getting codeText', err);
  });
  const description = db.collection("barcodes").doc("barcode").get()
    .then(doc => {
      doc.data('descrption');
      console.log(doc.data('description'));
    })
  .catch(err => {
    console.log('Error getting descrption', err);
  });*/}

  return (
    <ScrollView style={styles.container}>
          <Text style={styles.bigText}>Scan. Verify. Use.</Text>
          <Text style={styles.mediumText}>Let's Help You Verify Drugs Validity!</Text>
          <TextInput
            style={styles.searchBox}
            placeholder='E.g 60078430975'
            onChangeText={text => setSearchText(text)} />

           <View style={styles.rowContainer}>
              <TouchableOpacity
                style={styles.btn}
          onPress={() => {

              Alert.alert(
                "Results",
                `Drug with data ${searchText} has been searched!`,
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "Check Validity", onPress: () => {
                    if(searchText === "6009641350080"){
                      setModalVisible(true);
                      setInvalidModalVisible(false);
                    }else if(searchText === "794811571940"){
                      setInvalidModalVisible(true);
                      setModalVisible(false);
                    }else{
                      setOopsModalVisible(true);
                      setModalVisible(false);
                      setInvalidModalVisible(false);
                    }
                  } }
                ],
                { cancelable: false }
              );
          } }>
                  <Text style={styles.btnText}>Search</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}
              onPress={()=> navigation.navigate('Scan')}>
              <Text style={styles.btnText}>Scan</Text>
              </TouchableOpacity>
      </View>
     

          <View style={{flex: 1, height: fullHeight/3, width: fullWidth}}>
          <ScrollView
             horizontal={true}
                  showsHorizontalScrollIndicator={false}
              style={{flexWrap: 'wrap', }}>

          {/*<Card
              Icon='ios-paper'
              title='Report Corrupt Attempts'
              description='Report to any corrupt attempt while getting medical services.'
              buttonText="Report"
              action={() => {
                  navigation.navigate('Report');
              }}
              />
            */}

              <Card
              Icon='ios-pin'
              title='Pharmacy Location'
              description='Get nearby and verified pharmacies and reduce the risk of acquiring fake drugs.'
              buttonText="Go"
              action={() => {
                  navigation.navigate('Map')
              }}
              />
              {/*<Card
              Icon='ios-hand'
              title='Stop Fake Drugs'
              description='Committed to pharmaceutical excellence, we helping you scan drugs barcode to verify their validity.'
              buttonText="Take Action"
              action={() => {
                  navigation.navigate('Report');
              }}
            />*/}
              </ScrollView>
              </View>
              <Modal
        animationType="slide"
        visible={invalidModalVisible}
        transparent={true}
        onRequestClose={() => {Alert.alert("Scan again")}}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={{...styles.validText, color: "red" }}> INVALID </Text>
                <Text style={styles.modalText}> Drug Name: Tresor Hand Sanitizer</Text>
                <Text style={styles.modalText}> Mnfg Date: Feb 2020 </Text>
                <Text style={styles.modalText}> Exp Date: Feb 2024 </Text>

                <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "#c8e9ee" }}
                      onPress={() => {
                        setInvalidModalVisible(!invalidModalVisible);
                      }}>
                  <Text style={styles.textStyle}>Hide</Text>
                </TouchableHighlight>
            </View>
        </View>
        </Modal>
              <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {Alert.alert("Scan again")}}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={{...styles.validText, color: "green" }}> VALID </Text>
                <Text style={styles.modalText}> Drug Name: Diclopar MR</Text>
                <Text style={styles.modalText}> Mnfg Date: Sept 2020 </Text>
                <Text style={styles.modalText}> Exp Date: Aug 2022 </Text>

                <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "#c8e9ee" }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}>
                  <Text style={styles.textStyle}>Hide</Text>
                </TouchableHighlight>
            </View>
        </View>
        </Modal>
        <Modal
        animationType="slide"
        visible={oopsModalVisible}
        transparent={true}
        onRequestClose={() => {Alert.alert("Scan again")}}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={{...styles.validText, color: "orange" }}> Ooops! </Text>
                <Text style={styles.modalText}> Something went wrong!</Text>
                <Text style={styles.modalText}> We might not have that on our database yet.</Text>
                

                <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "#c8e9ee" }}
                      onPress={() => {
                        setOopsModalVisible(!oopsModalVisible);
                      }}>
                  <Text style={styles.textStyle}>Hide</Text>
                </TouchableHighlight>
            </View>
        </View>
        </Modal>
        
    </ScrollView>
  );
}
{/*
HomeScreen.navigationOptions = {
  header: null,
};*/}

function Card({ Icon, title, description, buttonText, action }) {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#c8e9ee',
            margin: 10,
            width: fullWidth - 40,
            height: fullHeight/4 + 10,
            ...Platform.select({
                ios: {
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: -3 },
                  shadowOpacity: 0.1,
                  shadowRadius: 3,
                },
                android: {
                  elevation: 10,
                },
              }),
        }}>
            <Ionicons
              name={Icon}
              style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  padding: 20, margin: 10,
                  color: 'black',
                  borderRadius: 5,
              }}
              size={100}
            />
            <View style={{ flex: 1, width: fullWidth}}>
                <Text style={styles.cardTitleText}>{title}</Text>
                <Text style={styles.cardDescriptionText}>{description}</Text>
                <TouchableOpacity onPress={action} style={styles.cardBtn}><Text style={styles.cardBtnText}>{buttonText}</Text></TouchableOpacity>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: fullWidth,
    height: fullHeight,
    backgroundColor: '#e6f5f8',
    padding: 10,
  },
    rowContainer: {
        flex: 1,
        width: fullWidth,
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-around',

  },
    bigText: {
        fontSize: 50,
        paddingHorizontal: 30,
        paddingTop: 30,
        fontWeight: 'bold'
    },
    mediumText: {
        fontSize: 20,
        paddingHorizontal: 30,
        paddingTop: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4689A3'
    },
    cardTitleText: {
        fontSize: 18,
        paddingHorizontal: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#4689A3'
    },
    cardDescriptionText: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingTop: 5,
        textAlign: 'left',
        color: '#000'
    },
  searchBox: {
    width: fullWidth / 1.5,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#4689A3',
    borderRadius: 5,
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  searchText: {
    fontSize: 24,
    color: '#ddd',
    textAlign: 'left',
    padding: 10,
    alignSelf: 'center'
    },
    btn: {
        backgroundColor: '#4689A3',
        width: fullWidth/3,
        height: 40,
        marginHorizontal: 40,
        borderRadius: 5,
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: -3 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
            },
            android: {
              elevation: 5,
            },
          }),
    },
    cardBtn: {
        backgroundColor: '#4689A3',
        width: fullWidth/3,
        height: 40,
        marginTop: 5,
        position: 'absolute',
        bottom: 8,
        marginHorizontal: 10,
        borderRadius: 5,
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: -3 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
            },
            android: {
              elevation: 5,
            },
          }),
    },
    btnText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        padding: 10,
        alignSelf: 'center'
    },
    cardBtnText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        padding: 5,
        alignSelf: 'center'
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
         backgroundColor: "#c8e9ee",
         borderRadius: 5,
         paddingVertical: 10,
         paddingHorizontal: 20,
         elevation: 2
       },
       textStyle: {
         color: "#000",
         fontWeight: "bold",
         textAlign: "center"
       },
       modalText: {
         marginBottom: 15,
         textAlign: "center"
       },
       validText: {
         fontSize: 20,
         fontWeight: "bold",
         padding: 20,
         color: "green",
       }
});
