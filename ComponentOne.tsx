import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';

export const ComponentOne = () => {
  // const navigate = useNavigate;
  return (
    <View>
      <Link to={'login'} replace children={<Text>Visit your profile</Text>} />
      <Text>ComponentOne</Text>
    </View>
  );
};
