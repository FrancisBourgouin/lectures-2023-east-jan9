import { Component } from "react";

export default class Spy extends Component {
  constructor(props) {
    super(props);
  }

  report = () => {
    console.log("user clicked!");
  };

  componentDidMount() {
    document.addEventListener("click", this.report);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.report);
    this.props.spyFound();
  }

  componentDidUpdate(oldProps, oldState) {}

  render() {
    return <p>👾</p>;
  }
}
