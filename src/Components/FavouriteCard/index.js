import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CharacterCardStyle, ImageStyle, TextStyle} from './styles';

class FavouriteCard extends Component {
  render() {
    const {onPress, item, onPressRemoveFromFavorites} = this.props;
    return (
      <CharacterCardStyle onPress={onPress}>
        <ImageStyle source={{url: item?.image}} />
        <TextStyle>{item?.name}</TextStyle>
        <TouchableOpacity onPress={onPressRemoveFromFavorites}>
          <Text style={{color: 'red'}}>Delete</Text>
        </TouchableOpacity>
      </CharacterCardStyle>
    );
  }
}

export default FavouriteCard;
