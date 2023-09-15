import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <View className="bg-red-100">
        <Text>App.tsx</Text>
      </View>
    </NavigationContainer>
  );
}

export default App;
