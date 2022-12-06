import React, {Component} from 'react';
import {ActivityIndicator, Image, Modal, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {
  AddToFavoritesAction,
  FetchItemDetailsAction,
} from '../../Store/Actions/HomeActions';
import {
  ImageStyle,
  DetailsContainer,
  TitleStyle,
  TextStyle,
  BorderStyle,
  ContainerStyle,
  IconWrapper,
  IconWrapperTwo,
} from './styles';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';
import ImageViewer from 'react-native-image-zoom-viewer';
class CharacterDetails extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.handleFetchItems(id);
  };

  componentWillUnmount = () => {
    this.props.handleFetchItems(null);
  };
  navigateToHome = () => {
    const {history} = this.props;
    history.goBack();
  };
  openModal(index) {
    this.setState({isModalOpened: true, currentImageIndex: index});
  }
  render() {
    this.state = {
      isModalOpened: false,
      currentImageIndex: 0,
    };
    const {character} = this.props;
    let images = [
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F11%2Frick-and-morty-season-4-2000.jpg&q=60',
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/rick-and-morty-6-feature.jpg',
      'https://variety.com/wp-content/uploads/2021/06/Rick-and-Morty-Merch.jpg?w=1000',
    ];
    return character ? (
      <ContainerStyle>
        <View>
          <ImageStyle source={{url: character?.image}} />
          <IconWrapper
            onPress={() => this.props.handleAddToFavorites(character)}>
            <Icon color={'#1B4233'} size={25} name="hearto" />
          </IconWrapper>
          <IconWrapperTwo onPress={() => this.navigateToHome()}>
            <Icon color={'#1B4233'} size={25} name="left" />
          </IconWrapperTwo>
        </View>

        <DetailsContainer>
          <BorderStyle>
            <TitleStyle>Name</TitleStyle>
            <TextStyle>{character?.name}</TextStyle>
          </BorderStyle>
          <BorderStyle>
            <TitleStyle>Status</TitleStyle>
            <TextStyle>{character?.status}</TextStyle>
          </BorderStyle>
          <BorderStyle>
            <TitleStyle>Species</TitleStyle>
            <TextStyle>{character?.species}</TextStyle>
          </BorderStyle>
          <BorderStyle>
            <TitleStyle>Gender</TitleStyle>
            <TextStyle>{character?.gender}</TextStyle>
          </BorderStyle>
          <BorderStyle>
            <TitleStyle>Type</TitleStyle>
            <TextStyle>{character?.type ? character?.type : '---'}</TextStyle>
          </BorderStyle>
        </DetailsContainer>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          resizeMode={true}
          buttonWrapperStyle={{paddingTop: 40}}>
          {images.map((image, index) => (
            <View style={styles.slide} key={index}>
              <Modal
                visible={this.state.isModalOpened}
                transparent={true}
                onSwipeDown={() => setshowModal(false)}>
                <ImageViewer
                  resizeMode="stretch"
                  // source={{url: image}}
                  // style={styles.slide2}
                  imageUrls={{
                    url: image,
                  }}
                  index={this.currentImageIndex}
                  onSwipeDown={() => setshowModal(false)}
                />
              </Modal>
            </View>
          ))}
        </Swiper>
      </ContainerStyle>
    ) : (
      <ActivityIndicator />
    );
  }
}
const mapStateToProps = state => ({
  character: state.HomeReducer.character,
});

const mapDispatchToProps = dispatch => {
  return {
    handleFetchItems: id => dispatch(FetchItemDetailsAction(id)),
    handleAddToFavorites: item => dispatch(AddToFavoritesAction(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    marginTop: 70,
    marginBottom: 40,
    alignSelf: 'center',
  },

  slide2: {
    height: 200,
    width: 395,
    alignSelf: 'center',
  },
  slide: {flex: 0.5},
});
