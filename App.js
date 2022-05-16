import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IssueHomeScreen from './src/screen/IssueHomeScreen'
import IssueListScreen from './src/screen/IssueListScreen'

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={IssueHomeScreen} />
        <Stack.Screen name="IssueList" component={IssueListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App