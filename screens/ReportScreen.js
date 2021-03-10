import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert
}from 'react-native';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

const ReportScreen = () => {
    return(
        <View style={styles.container}>
        <Text style={styles.bigText}>Report Fake Drugs</Text>
        <ScrollView>
        <Text style={styles.normalText}>Name of the hospital/pharmacy</Text>
        <TextInput
            style={styles.searchBox}
            placeholder="E.g Ocean Road Hospiatl"/>

        <Text style={styles.normalText}>Location</Text>
        <TextInput
            style={styles.searchBox}
            placeholder="E.g Mafeke Road, Kinondoni, Dar Es Salam"/>

        <Text style={styles.normalText}>Name of the Venal (Bribee)</Text>
        <TextInput
            style={styles.searchBox}
            placeholder="E.g Juma Shabani"/>

        <Text style={styles.normalText}>Upload Evidence (if any)</Text>
        <TextInput
            style={styles.searchBox}
            placeholder="E.g photo, video etc"/>

        <Text style={styles.normalText}>Message</Text>
        <TextInput
            style={styles.textAreaBox}
            multiline
            placeholder="(give a brief description on the incident)"/>

        <TouchableOpacity style={styles.btn}
        onPress = {() => {
          Alert.alert(
                "Results",
                `Thank you! your report have been sent successfully!`,
                [
                  {
                    text: "Report",
                    onPress: () => console.log("Ask me later pressed")
                  },
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );}}><Text style={styles.btnText}>Report</Text></TouchableOpacity>
        </ScrollView>
        </View>
    )
}
export default ReportScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: fullWidth,
    height: fullHeight,
    justifyContent: 'flex-start',
    backgroundColor: '#e6f5f8',
    alignItems: 'flex-start',
    padding: 20,
  },
  bigText: {
      fontSize: 40,
      paddingHorizontal: 20,
      paddingTop: 30,
      fontWeight: 'bold'
  },
  normalText: {
      fontSize: 18,
      paddingHorizontal: 20,
      paddingTop: 10,
  },
  searchBox: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#e6f5f8',
    borderWidth: 0,
    borderColor: '#4689A3',
    borderRadius: 5,
    paddingHorizontal: 20,
      marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
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
  textAreaBox: {
    width: 300,
    height: 100,
    backgroundColor: '#e6f5f8',
    borderWidth: 0,
    borderColor: '#4689A3',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingTop: 0,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
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
  btn: {
      backgroundColor: '#4689A3',
      width: fullWidth/4,
      height: 50,
      margin: 20,
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
      fontSize: 24,
      color: 'white',
      textAlign: 'left',
      padding: 10,
      alignSelf: 'center'
  },
});
