import React from 'react';
import { View } from 'react-native';
import { THEME } from '../../theme/THEME';
import { IconButton } from '../IconButton';
import { ArrowLeft, CaretLeft, Heart } from 'phosphor-react-native';

import { styles } from './styles';
import { Heading } from '../Heading';

interface Props {
  handleFunction: () => void
}

export function PagesHeader({ handleFunction }: Props) {
  return (
    <View style={styles.container}>
      <IconButton onPress={handleFunction} icon={<CaretLeft size={28} color={THEME.COLORS.TEXT} />} />
      <Heading title="Produto" />
      {/* <View style={styles.emptyView} /> */}
      <IconButton icon={<Heart size={28} color={THEME.COLORS.TEXT} />} />
    </View>
  );
}