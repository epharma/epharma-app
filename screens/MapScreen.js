import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import MapView from 'react-native-maps';
import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, FlatList, Text, View, Dimensions } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

const MapScreen = () => {
    const [loading, setLoading] = useState(true);
    const [region, setRegion]=  useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001
})
    return(
        <View style={styles.container}>
            <MapView
             style={styles.mapStyle}
             showsUserLocation={true}
             />
        </View>
    )
}
export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  mapStyle: {
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,
 },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#e6f5f8',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 0,
    borderColor: '#fff',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  item: {
    backgroundColor: '#4689A3',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 25,
  },
  title: {
    fontSize: 20,
    color: 'white'
  },
  btn: {
    backgroundColor: '#4689A3',
    width: '50%',
    height: 50,
    marginHorizontal: '25%',
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
  mediumText: {
    fontSize: 20,
    paddingHorizontal: 20,
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#4689A3'
},
});
