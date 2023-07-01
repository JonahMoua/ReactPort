import React from 'react';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      images: props.images || []
    };
  }

  componentDidMount() {
    // No need to start the slideshow on component mount
  }

  componentDidUpdate(prevProps) {
    // Update the state if the images prop changes
    if (prevProps.images !== this.props.images) {
      this.setState({
        currentImageIndex: 0,
        images: this.props.images || []
      });
    }
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    // No need for clearInterval since there is no interval
  }

  handleClick = () => {
    this.setState((prevState) => {
      const nextIndex = (prevState.currentImageIndex + 1) % prevState.images.length;
      return {
        currentImageIndex: nextIndex
      };
    });
  }

  render() {
    const { currentImageIndex, images } = this.state;
    const currentImage = images[currentImageIndex];
    const imgStyles = {
      width: '600px', // Set the desired width
      height: '350px', // Set the desired height
      borderRadius: '20px', // Add border-radius property
      cursor: 'pointer', // Add cursor property
      transition: 'transform 0.3s', // Add transition property for smooth animation
    };

    const imgHoverStyles = {
      transform: 'scale(1.1)', // Increase the scale on hover
    };

    return (
      <div onClick={this.handleClick}>
        <img
          src={currentImage}
          alt="Slideshow"
          style={{ ...imgStyles, ...(this.state.isHovered ? imgHoverStyles : {}) }}
          onMouseEnter={() => this.setState({ isHovered: true })}
          onMouseLeave={() => this.setState({ isHovered: false })}
        />
      </div>
    );
  }
}

export default Slideshow;
