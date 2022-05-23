import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';
// import {Link} from 'react-router-native';

export const ComponentTwo = () => {
  return (
    <View>
      <Link to={'/'}>
        <Text>Visit your profile</Text>
      </Link>
      <Text>ComponentTwo</Text>
    </View>
  );
};
