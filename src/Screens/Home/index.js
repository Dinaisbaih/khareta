import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  TouchableOpacity,
} from 'react-native';
import {ContainerStyle, FavTitleStyle, TitleStyle} from './styles';
import {connect} from 'react-redux';
import CharacterCard from '../../Components/CharacterCard';
import {
  FetchItemsAction,
  IncreasePageAction,
} from '../../Store/Actions/HomeActions';
import {withRouter} from 'react-router-native';

class Home extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.props.handleFetchItems(this.props.page);
    }
  }

  componentDidMount = () => {
    this.props.handleFetchItems(this.props.page);
  };

  navigateToDetails = id => {
    const {history} = this.props;
    history.push(`/characterDetails/${id}`);
  };

  navigateToFavourite = () => {
    const {history} = this.props;
    history.push('/favourite');
  };

  render() {
    const handleLoadMore = () => {
      this.props.IncreasePage(this.props.page + 1);
    };

    const renderItems = ({item}) => {
      return (
        <CharacterCard
          to={'/characterDetails'}
          item={item}
          onPress={() => this.navigateToDetails(item.id)}
        />
      );
    };

    return (
      <ContainerStyle>
        <SafeAreaView />
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 330,
            paddingBottom: 15,
          }}>
          <TouchableOpacity onPress={() => this.navigateToFavourite()}>
            <View
              style={{backgroundColor: '#1b4233', borderRadius: 8, padding: 3}}>
              <FavTitleStyle>Favourite</FavTitleStyle>
            </View>
          </TouchableOpacity>
          <TitleStyle>Rick And Morty's</TitleStyle>
          <View />
        </View>
        <FlatList
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{paddingBottom: 20}}
          onEndReachedThreshold={0.1}
          onEndReached={handleLoadMore}
          renderItem={renderItems}
          data={this.props.items}
          keyExtractor={items => this.props.items?.id}
          ListFooterComponent={() => <ActivityIndicator />}
        />
      </ContainerStyle>
    );
  }
}

const mapStateToProps = state => ({
  items: state.HomeReducer.items,
  page: state.HomeReducer.page,
});

const mapDispatchToProps = dispatch => {
  return {
    handleFetchItems: page => dispatch(FetchItemsAction(page)),
    IncreasePage: page => dispatch(IncreasePageAction(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
