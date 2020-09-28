import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default class QueueItem extends React.Component {
  state = {
    remainingTime: 0,
  };

  componentDidMount() {
    const { prepTime } = this.props.item;
    this.setState({
      remainingTime: prepTime,
    });

    this.intervalId = setInterval(() => {
      this.setState({
        remainingTime: this.state.remainingTime - 1,
      });
    }, 1 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { name } = this.props.item;
    return (
      <SafeAreaView>
        <Text>{`${name} coming up in ${this.state.remainingTime} seconds`}</Text>
      </SafeAreaView>
    );
  }
}
