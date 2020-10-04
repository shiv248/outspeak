import React, { Component } from 'react'
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Text, Avatar, withStyles, List } from 'react-native-ui-kitten'

const DATA = [
  {
    id: 1,
    postTitle: 'Planet of Nature',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI:
      'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    randomText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    id: 2,
    postTitle: 'Lampost',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI:
      'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    randomText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  }
]

class _Test extends Component {

  render() {
    const renderItem = ({ item }) => (
      <View style={this.props.themedStyle.card}>
    <Image
      source={{ uri: item.imageURI }}
      style={this.props.themedStyle.cardImage}
    />
    <View style={this.props.themedStyle.cardHeader}>
      <Text category='s1' style={this.props.themedStyle.cardTitle}>
        {item.postTitle}
      </Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Profile')}>
        <Avatar
          source={{ uri: item.avatarURI }}
          size='small'
          style={this.props.themedStyle.cardAvatar}
        />
      </TouchableOpacity>
    </View>
    <View style={this.props.themedStyle.cardContent}>
      <Text category='p2'>{item.randomText}</Text>
    </View>
  </View>
  )

    if (this.state.DATA != null) {
      return (
        <List
          style={this.props.themedStyle.container}
          data={this.state.DATA}
          renderItem={renderItem}
          keyExtractor={this.state.DATA.id}
          refreshing={this.state.isRefreshing}
          onRefresh={() => this.onRefresh()}
        />
      )
    } else
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )
  }
}

export default Test = withStyles(_Test, theme => ({
    container: {
      flex: 1
    },
    card: {
      backgroundColor: theme['color-basic-100'],
      marginBottom: 25
    },
    cardHeader: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    cardTitle: {
      color: theme['color-basic-1000']
    },
    cardAvatar: {
      marginRight: 16
    },
    cardContent: {
      padding: 10,
      borderWidth: 0.25,
      borderColor: theme['color-basic-600']
    }
  })
)

export const HomeNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home',
        headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />),
      }
    }
  })
)