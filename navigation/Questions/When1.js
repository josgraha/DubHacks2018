import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Textarea } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Back from '../../assets/homeIcons/Back.png';
import GoNextIcon from '../../assets/GoNextIcon.png';

import { createStackNavigator } from 'react-navigation';

import { LinearGradient } from 'expo';

import ActionItem from '../../components/ActionItem';
import BotRight from '../../assets/BotRight.png';
import { connect } from 'react-redux';

const styles = {
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
    marginTop: 20
  },
  paragraph: {
    marginTop: 30,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  gradientContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  header: {
    fontWeight: 'bold',
    fontSize: 36,
    color: 'white',
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 60,
    paddingLeft: 25,
    paddingRight: 25
  },
  bold: {
    fontWeight: 'bold'
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 10
  }
};

class Where1 extends Component {
  static navigationOptions = {};

  state = {
    height: 40
  };

  updateSize = height => {
    this.setState({
      height
    });
  };

  moveOn = () => {
    this.props.navigation.navigate('Where2');
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#5D8CFD', '#ED8DFE']}
          style={styles.gradientContainer}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: '100%',
            display: 'flex'
          }}
        >
          <Text style={styles.header}>{this.props.header1}</Text>

          <ActionItem
            note={this.props.header2}
            move={() => this.props.navigation.navigate('When2')}
          />
          <ActionItem
            note={this.props.header3}
            move={() => this.props.navigation.navigate('When2')}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { language } = state.main;
  let header1 = 'Do you remember when this happened?';
  let header2 = 'Yes';
  let header3 = 'No';

  if (language == 1) {
    console.log('English');
  } else if (language == 2) {
    console.log('Speaking Spanish');
    header1 = '¿Recuerdas cuando sucedió esto?';
    header2 = 'Si';
    header3 = 'No';
  } else if (language == 3) {
    console.log('Speaking French');
    header1 = "Vous souvenez-vous quand c'est arrivé?";
    header2 = 'Oui';
    header3 = 'Non';
  }

  return {
    language,
    header1,
    header2,
    header3
  };
};

export default connect(mapStateToProps)(Where1);
