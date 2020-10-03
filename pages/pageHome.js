import * as React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class HomeScreen extends React.Component {

    render() {
      return(
        
        // home screen content
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text> This is my Home screen </Text>

        </View>
      );
    }
  }

class SettingsButton extends React.Component {

    HomeNavigator.setOptions({
      headerRight: () => (
        <Button onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff" />
      ),
    });
  }, [HomeNavigator]);
  
  return <Text>Count: {count}</Text>;
}

// navigation
export const HomeNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home',
      }
    }
  })
)
