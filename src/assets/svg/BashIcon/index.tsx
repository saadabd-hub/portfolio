import Icon from '@/components/common/Icon';
import { IconProps } from '@/types';
import React, { FC } from 'react';

const BashIcon:FC<IconProps> = ({
  width,
  height,
  className
}) => {

  return (
    <Icon width={width} height={height} className={className}>
      <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
      <rect x="4" y="8" width="40" height="32" rx="2" fill="#2F88FF" />
      <path d="M12 18L19 24L12 30" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 32H36" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  )
}

export default BashIcon;