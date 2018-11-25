import React from "react";

export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <img
          src={this.props.image}
          onClick={this.handleShowDialog}
          alt="dog"
        />
        {this.state.isOpen && (
          <dialog
            className="backdrop"
            open
            onClick={this.handleShowDialog}
          >
            <img
              src={this.props.image}
              onClick={this.handleShowDialog}
              alt='dog'
            />
          </dialog>
        )}
      </div>
    );
  }
}
