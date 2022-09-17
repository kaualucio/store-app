import React, { ReactElement } from 'react';
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { IconProps } from 'phosphor-react-native'
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  icon: ReactElement<IconProps>
}

export function IconButton({ icon: Icon, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      {Icon}
    </TouchableOpacity>
  );
}