import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {ContainerStyle, IconWrapperTwo, TitleStyle} from './styles';
import FavouriteCard from '../../Components/FavouriteCard/index';
import {withRouter} from 'react-router-native';
import {
  FetchItemsAction,
  RemoveFromFavoritesAction,
} from '../../Store/Actions/HomeActions';
import Icon from 'react-native-vector-icons/AntDesign';

class Favourite extends Component {
  navigateToDetails = id => {
    const {history} = this.props;
    history.push(`/characterDetails/${id}`);
  };
  navigateToBack = () => {
    const {history} = this.props;
    history.goBack();
  };
  render() {
    const renderItems = ({item}) => {
      return (
        <FavouriteCard
          to={'/characterDetails'}
          item={item}
          onPress={() => this.navigateToDetails(item?.id)}
          onPressRemoveFromFavorites={() =>
            this.props.handleRemoveFromFavorites(item?.id)
          }
        />
      );
    };

    return (
      <ContainerStyle>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <IconWrapperTwo onPress={() => this.navigateToBack()}>
            <Icon color={'#1B4233'} size={25} name="left" />
          </IconWrapperTwo>
          <TitleStyle>Favourites</TitleStyle>
          <View />
        </View>

        <FlatList
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{paddingBottom: 20}}
          onEndReachedThreshold={0.1}
          renderItem={renderItems}
          data={this.props.favorites}
          ListEmptyComponent={() => (
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                marginTop: 40,
                color: 'red',
              }}>
              No favourites
            </Text>
          )}
        />
      </ContainerStyle>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.HomeReducer.favorites,
});

const mapDispatchToProps = dispatch => {
  return {
    handleFetchItems: page => dispatch(FetchItemsAction(page)),
    handleRemoveFromFavorites: id => dispatch(RemoveFromFavoritesAction(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Favourite));
