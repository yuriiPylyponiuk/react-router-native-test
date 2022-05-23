import React from 'react';
import {Text, View} from 'react-native';
import {Link} from './router';

export const ComponentTwo = () =>  (
  <View>
    <Link to={'/'}>
      <Text>{'Visit your profile'}</Text>
    </Link>
    <Text>{'ComponentTwo'}</Text>
  </View>
  );
