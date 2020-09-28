import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { TYPES, MENU } from "./CONSTANTS";
import NavButton from "./components/NavButton";
import MenuList from "./components/MenuList";

MENU.map((item) => {
  console.log(item.name, item.prepTime);
});
class App extends React.Component {
  state = {
    queue: [],
    counter: [],
    userType: TYPES.customer,
  };

  handleNavButtonOnPress = (userType) => {
    this.setState({
      userType,
    });
  };

  handleOrder = (item) => {
    this.setState({
      queue: [...this.state.queue, item],
    });
  };

  trackPrep = () => {
    // Each item has a custom prep time
    // When the time is up, move it from queue to counter
    // Given that we only have 1 barista, we can just remove the first elt in the queue after its prep time is up and start tracking the progress for the next one up
    // But had we had more than one barista, this logic would need to be updated

    setTimeout(() => {
      const offQueueItem = this.state.queue[0];
      this.setState({
        queue: [...this.state.queue.slice(1)],
        counter: [...this.state.counter, offQueueItem],
      });
    }, this.state.queue[0].prepTime);
  };

  render() {
    if (this.state.queue.length > 0) {
      this.trackPrep();
    }
    return (
      <View style={styles.container}>
        <View>
          <Text>Welcome to Nelly's Coffee Shop!</Text>
        </View>
        <View>
          <NavButton
            text={
              this.state.userType === TYPES.customer
                ? TYPES.barista
                : TYPES.customer
            }
            handlePress={this.handleNavButtonOnPress}
          />
        </View>

        {/* show the counter to the customer and queue to the barista */}
        {this.state.userType === TYPES.customer && (
          <View>
            <MenuList menu={MENU} handleOrder={this.handleOrder} />
          </View>
        )}
        {this.state.userType === TYPES.barista && (
          <View>
            <Text>Hello, Barista</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
