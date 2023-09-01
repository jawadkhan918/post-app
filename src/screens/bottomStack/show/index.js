import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {
  ShowSheetContent,
  PostCard,
  TaskCard,
  GradientText,
} from '../../../components';
import {
  fetchList,
  listingReducer,
} from '../../../redux/listingSlice/listingSlice';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import {LoaderContext} from '../../../hooks';
import utils from '../../../utils';
import styles from './styles';
import {logInReducer} from '../../../redux/authSlice/logInSlice';

export const Show = props => {
  const {navigation} = props;
  const {list} = useSelector(listingReducer);
  const {userData} = useSelector(logInReducer);
  const {setLoader} = useContext(LoaderContext);
  const dispatch = useDispatch();
  const refShownFirstTime = useRef(false);
  const [showSwitch, setShowSwitch] = useState(false);

  const RBSheetRef = useRef();
  const [selectedOption, setSelectedOption] = useState('Render ToDos');

  useFocusEffect(
    useCallback(() => {
      if (!refShownFirstTime?.current) {
        setTimeout(() => {
          refShownFirstTime.current = true;
          setShowSwitch(() => true);
          RBSheetRef?.current?.open();
        }, 3000);
      }
    }, []),
  );

  useEffect(() => {
    RBSheetRef?.current?.close();
    setLoader(true);
    dispatch(
      fetchList({
        endPoint: selectedOption === 'Render ToDos' ? 'todos' : 'posts',
        stopLoader: () => setLoader(false),
      }),
    );
  }, [selectedOption]);

  const renderList = ({item}) => {
    if (selectedOption == 'Render ToDos') {
      return <TaskCard data={item} />;
    } else {
      return (
        <PostCard
          data={item}
          onPostPressed={() => {
            navigation.navigate('PostDetail', {post: item});
          }}
        />
      );
    }
  };

  function _renderBottomSheet() {
    return (
      <RBSheet
        ref={RBSheetRef}
        height={300}
        openDuration={250}
        customStyles={{
          container: styles.sheetContainer,
        }}>
        <ShowSheetContent
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </RBSheet>
    );
  }

  return (
    <View style={styles.container}>
      <GradientText style={styles.greetingText}>
        {utils.getDynamicGreeting(
          userData?.givenName + ' ' + userData?.familyName,
        )}
      </GradientText>

      <FlatList contentContainerStyle={styles.listContainer} data={list} renderItem={renderList} />

      {showSwitch && (
        <TouchableOpacity
          style={styles.switchButtonStyle}
          onPress={() => RBSheetRef?.current?.open()}>
          <Text style={styles.buttonTextStyle}>Switch</Text>
        </TouchableOpacity>
      )}

      {_renderBottomSheet()}
    </View>
  );
};
