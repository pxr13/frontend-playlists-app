import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import ReactTimeout from 'react-timeout';

import { Wrapper, SpotifyIcon, Text, CheckCircleStyled } from './SaveAnimationStyles';

class SaveAnimation extends Component {
  state = {
    open: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;

    const { isSaved, setTimeout, toggleIsSaved } = this.props;

    if (!isSaved) {
      this.handleClose();
      return;
    }

    this.handleOpen();
    setTimeout(toggleIsSaved, 1000); // === 1 second
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Dialog
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
        contentStyle={{
          width: '200px'
        }}>
        <Wrapper>
          <div>
            <SpotifyIcon color="#1db954" size={28} />
          </div>
          <Text>Saved!</Text>
          <div>
            <CheckCircleStyled color="#1db954" />
          </div>
        </Wrapper>
      </Dialog>
    );
  }
}

export default ReactTimeout(SaveAnimation);