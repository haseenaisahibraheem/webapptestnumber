import React, { Component } from "react";
import classNames from "classnames";
import "../style/TextTransform.css";

export default class TextTransform extends Component {
  constructor() {
    super();
    this.state = {
      currentText: "from"
    };

    setInterval(() => {
      this.setState({
        currentText: this.getNextText(this.state.currentText)
      });
    }, 2000);
  }

  getNextText(doc) {
    switch (doc) {
      case "":
        return "from";
      case "from":
        return "from zero";
      case "from zero":
        return "from zero to";
      case "from zero to":
        return "from zero to hero";
      default:
        return "";
    }
  }
  render() {
    const { currentText } = this.state;
    return (
      <div className="TextTransform">
        <p
          className={classNames("text-fzth", {
            "text-from-active": currentText.indexOf("from") !== -1
          })}
        >
          FROM
        </p>
        <p
          className={classNames("text-fzth", {
            "text-zero-active": currentText.indexOf("from zero") !== -1
          })}
        >
          ZERO
        </p>
        <p
          className={classNames("text-fzth", {
            "text-to-active": currentText.indexOf("from zero to") !== -1
          })}
        >
          TO
        </p>
        <p
          className={classNames("text-fzth", {
            "text-hero-active": currentText.indexOf("from zero to hero") !== -1
          })}
        >
          HERO
        </p>
      </div>
    );
  }
}
