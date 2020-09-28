import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { TYPES, MENU } from "./CONSTANTS";
import NavButton from "./components/NavButton";
import MenuList from "./components/MenuList";
import QueueList from "./components/QueueList";
import CounterList from "./components/CounterList";

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

    this.itemPrepTimeoutId = setTimeout(() => {
      const offQueueItem = this.state.queue[0];
      this.setState({
        queue: [...this.state.queue.slice(1)],
        counter: offQueueItem
          ? [...this.state.counter, offQueueItem]
          : [...this.state.counter],
      });
    }, this.state.queue[0].prepTime * 1000);
  };

  trackPickup = () => {
    // Orders are picked up every 3 seconds on average
    this.orderPickupTimeoutId = setTimeout(() => {
      this.setState({
        counter: [...this.state.counter.slice(1)],
      });
    }, 3 * 1000);
  };

  componentWillUnmount() {
    clearTimeout(this.itemPrepTimeoutId);
  }

  render() {
    if (this.state.queue.length > 0) {
      this.trackPrep();
    }

    if (this.state.counter.length > 0) {
      this.trackPickup();
    }
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Welcome to Nelly's Coffee Shop!</Text>
        </View>
        <View style={styles.navbuttons}>
          <NavButton
            style={
              this.state.userType === TYPES.customer ? styles.activeNav : {}
            }
            text={TYPES.customer}
            handlePress={this.handleNavButtonOnPress}
          />
          <NavButton
            style={
              this.state.userType === TYPES.barista ? styles.activeNav : {}
            }
            text={TYPES.barista}
            handlePress={this.handleNavButtonOnPress}
          />
        </View>

        {this.state.userType === TYPES.customer && (
          <View>
            <Text style={styles.heading}>Menu</Text>
            <MenuList menu={MENU} handleOrder={this.handleOrder} />
          </View>
        )}
        {this.state.userType === TYPES.barista && (
          <View>
            <Text style={styles.heading}>Queue</Text>
            {this.state.queue.length === 0 ? (
              <Text>No orders in the queue</Text>
            ) : (
              <View>
                <QueueList queue={this.state.queue} />
              </View>
            )}
          </View>
        )}

        <View>
          <Text style={styles.heading}>Counter</Text>
          {
            // Show counter to both customer and barista. The barista can glance up to the counter to call out an order that hasn't been picked up yet
            this.state.counter.length === 0 ? (
              <Text>No orders on the counter</Text>
            ) : (
              <View>
                <CounterList counter={this.state.counter} />
              </View>
            )
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  navbuttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  activeNav: {
    fontSize: 20,
  },
  heading: {
    fontWeight: "bold",
  },
});

export default App;
