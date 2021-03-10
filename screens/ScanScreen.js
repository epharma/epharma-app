import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    StatusBar,
    Modal,
  TouchableHighlight,
    
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';
import '../data/barcodes.json';
{/*import {db} from '../config/Firebase'*/}

import ReportScreen from './ReportScreen';

 const fullWidth = Dimensions.get('window').width;
 const fullHeight = Dimensions.get('window').height;

export default function ScanScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [invalidModalVisible, setInvalidModalVisible] = useState(false);
  const [oopsModalVisible, setOopsModalVisible] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');

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
      
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    Alert.alert(
        "Results",
        `Barcode with data ${data} has been scanned!`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Check Validity", onPress: () => { 
            if(data === "6009641350080"){
              setModalVisible(true);
              setInvalidModalVisible(false);
            }else if(data === "794811571940"){
              setInvalidModalVisible(true);
              setModalVisible(false);
            }else{
              setOopsModalVisible(true);
              setModalVisible(false);
              setInvalidModalVisible(false);
            }
            
            /*
            if (data == barcodes.barcode){
              setModalVisible(true) 
            }
            */
            
            }
          }
        ],
        { cancelable: false }
      );
    };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={styles.container}>
          <View style={styles.barcodeArea}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{width: fullWidth, height: fullHeight}}
      />
      </View>
      <View>{scanned &&
      <TouchableOpacity
      onPress={() => setScanned(false)}
      style={styles.button} >
          <Text style={styles.buttonText}>Scan Again</Text>
          </TouchableOpacity>}
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

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 80,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: fullWidth,
        height: fullHeight,
        backgroundColor: '#c8e9ee',
      },
      barcodeArea: {
        flex: 1,
        justifyContent: 'center',
        width: fullWidth,
        height: fullHeight,
      },
      button: {
        flexDirection: 'row',
        width: fullWidth / 2,
        height: fullHeight / 15,
        justifyContent: 'center',
        bottom: 200,
        alignSelf: 'center',
        backgroundColor: '#000',
        borderWidth: 2,
        borderColor: '#c8e9ee',
        borderRadius: 5,
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          },
          android: {
            elevation: 20,
          },
        }),
      },
      buttonText: {
        fontSize: 24,
        color: '#c8e9ee',
        textAlign: 'center',
        padding: 10,
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
