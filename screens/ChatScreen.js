import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// create a component
const ChatScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1}}
      contentContainerStyle={{alignItems: 'center'}}>
      <SkeletonPlaceholder>
        <View style={{marginTop: 30, marginBottom: 30}}>
          <View
            style={{marginTop: 6, width: 350, height: 140, borderRadius: 4}}
          />
        </View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <View style={{marginTop: 2, marginBottom: 30}}>
          <View
            style={{marginTop: 6, width: 350, height: 140, borderRadius: 4}}
          />
        </View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <View style={{marginTop: 2, marginBottom: 30}}>
          <View
            style={{marginTop: 6, width: 350, height: 140, borderRadius: 4}}
          />
        </View>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

//make this component available to the app
export default ChatScreen;
