import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface Props {
  title: string
}

export function Heading({ title }: Props) {
  return (
    <Text style={styles.heading}>
      {title}
    </Text>
  );
}