import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SafetyNav</Text>
      <Button 
        title="Go to Map Screen"
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  );
}

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});
