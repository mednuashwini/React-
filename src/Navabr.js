import React from 'react';

class Nav extends React.Component {

  render() {
    // const showText = () => {
    //   alert("this is a text");
    //   console.log("react.js");
    // };

    return (
      <>
        <h4>ssshddddd name: {this.props.name} age: {this.props.age} village: {this.props.village}</h4>
        {/* <buttton onClick={showText}>click</buttton> */}
      </>
    );
  }
}

// Storage vunna data nee oka dhani nundy oka dhaniki transfer chesedhanni props anataru
export default Nav