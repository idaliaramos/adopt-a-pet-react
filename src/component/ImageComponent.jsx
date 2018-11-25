import React from "react";

export default class ImageComponent extends React.Component {
  state = { isOpen: false };
//will change state from true to false and vice versa on click
  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
  //sets larger image for popup
  let styles = {
  width: '80%',
  height: '90%',
};
    return (
      <div>
        <img
          src={this.props.image}
          onClick={this.handleShowDialog}
          alt="dog"
        />
        {/* if state is isOpen is true it will show popup */}
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
              style={styles}
            />
          </dialog>
        )}
      </div>
    );
  }
}
