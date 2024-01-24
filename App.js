import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from './assets/styles/colors.js';
import * as Font from 'expo-font';

import tempData from './tempData.js';
import TodoList from './components/TodoList.js';

let customFonts = {
  'Abril-Fatface': require('./assets/fonts/AbrilFatface-Regular.ttf'),
  'Lato': require('./assets/fonts/Lato-Regular.ttf'),
  'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            To-do <Text style={{ fontWeight: "500", color: colors.secondary }}>List</Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addList}>
            <AntDesign name="plus" size={16} color={colors.accent} />
          </TouchableOpacity>

          <Text style={styles.add}>Add List</Text>
        </View>
        
        <View style={{height: 275, paddingLeft: 32}}>
          <FlatList 
          data={tempData} 
          keyExtractor={item => item.name} 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <TodoList list={item} /> }
          />
        </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Abril-Fatface'
  },
  divider: {
    backgroundColor: colors.secondary,
    height: 1,
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'Abril-Fatface'
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.dark,
    paddingHorizontal: 64,
    fontFamily: 'Abril-Fatface'
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.accent,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'Abril-Fatface'
  },
  add: {
    color: colors.accent,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
    fontFamily: 'Abril-Fatface'
  }
});
