import React from "react";

export default class ImageComponent extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.image}
          alt="dog"
        />
      </div>
    );
  }
}
