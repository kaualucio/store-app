import React from 'react';
import { View, Text } from 'react-native';
import { THEME } from '../../theme/THEME';
import { IconButton } from '../IconButton';
import { CaretLeft, Heart } from 'phosphor-react-native';

import { styles } from './styles';

interface Props {
  title: string,
  handleFunction: () => void,
  iconBtn?: boolean
}

export function PagesHeader({ title, handleFunction, iconBtn = false }: Props) {
  return (
    <View style={styles.container}>
      <IconButton onPress={handleFunction} icon={<CaretLeft size={28} color={THEME.COLORS.TEXT} />} />
      <Text style={styles.title}>{title}</Text>
      {
        iconBtn 
        ? <IconButton icon={<Heart size={28} color={THEME.COLORS.TEXT} />} />
        :  <View style={styles.emptyView} />
      }

    </View>
  );
}