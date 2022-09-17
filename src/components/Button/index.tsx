import React, { ReactElement } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { IconProps } from 'phosphor-react-native'

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  label: string,
  icon?: ReactElement<IconProps>
}

export function Button({label, icon: Icon, ...rest}: Props) {
  return (
    <TouchableOpacity activeOpacity={.8} style={styles.button} {...rest}>
      {Icon}
      <Text style={[styles.label, { marginLeft: Icon ? 8 : 0 }]}>{label}</Text>
    </TouchableOpacity>
  );
}