// src/components/Icon.tsx
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = '#000',
}) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;
