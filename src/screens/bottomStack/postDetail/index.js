import React from 'react';
import styles from './styles';
import {BackButton} from '../../../components';
import {View, Text, SafeAreaView} from 'react-native';

export const PostDetail = props => {
  const {navigation, route} = props;
  const {post} = route.params;

  return (
    <View style={styles.mainContainerStyle}>
      <SafeAreaView style={styles.safeAreaStyle} />
      <View style={styles.headerStyle}>
        <BackButton backPress={() => navigation.goBack()} />
        <Text style={styles.titleTextStyle}>Post Detail</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Title: {post.title}</Text>
        <Text style={[styles.body, styles.title]}>Details</Text>
        <Text style={styles.body}>{post.body}</Text>
      </View>
    </View>
  );
};
