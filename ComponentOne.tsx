import React from 'react';
import {Text, View} from 'react-native';
import {Link} from './router';

export const ComponentOne = () => (
  <View>
    <Link to={'login'} replace children={<Text>{'Visit your profile'}</Text>} />
    <Text>{'ComponentOne'}</Text>
  </View>
);
