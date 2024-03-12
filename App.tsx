/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  PermissionsAndroid,
  View,
  Button,
} from 'react-native';
import BleManager from 'react-native-ble-manager';

const requestBluetoothPermission = async () => {
  BleManager.enableBluetooth()
  BleManager.start({showAlert: false});
  BleManager.scan([], 5, true)
    .then(results => {
      console.log('Scanning started', results);
    })
    .catch(error => {
      console.error('Scan failed', error);
    });
};

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Try permissions</Text>
      <Button
        title="request permissions"
        onPress={requestBluetoothPermission}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
