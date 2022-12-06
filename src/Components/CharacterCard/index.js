import React, {Component} from 'react';
import {CharacterCardStyle, ImageStyle, TextStyle} from './styles';

class CharacterCard extends Component {
  render() {
    const {onPress, item} = this.props;
    return (
      <CharacterCardStyle onPress={onPress}>
        <ImageStyle source={{url: item?.image}} />
        <TextStyle>{item?.name}</TextStyle>
      </CharacterCardStyle>
    );
  }
}

export default CharacterCard;
