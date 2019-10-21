import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { RNCamera } from 'react-native-camera';
import { textScanned } from '../actions';
import { Confirm } from './common';

class TextScanner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      sim: ''
    };
  }

  onRecognized(text) {
    this.props.textScanned(text.textBlocks);
  };

  onAccept() {
    // const { uid } = this.props.navigation.state.params.schedule;

    // this.props.scheduleDelete({ uid });
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.text.length == 14) {
      this.setState({ showModal: !this.state.showModal, sim: 'Mobitel' });
    }
  }

  render() {
    console.log(this.props.text);
    return (
      <View>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            height: '100%',
            width: '100%',
          }}
          onTextRecognized={(text) => this.onRecognized(text)}
        >
        </RNCamera>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Your pin is detected as {this.state.sim}
          {this.props.text}
        </Confirm>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.scan.text
  }
}

export default connect(mapStateToProps, { textScanned })(TextScanner);