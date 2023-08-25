import Icon from '@/components/common/Icon';
import { IconProps } from '@/types';
import React, { FC } from 'react';

const EmailIcon:FC<IconProps> = ({
  width,
  height,
  className
}) => {

  return (
    <Icon width={width} height={height} className={className}>
      <path d="M26.6665 5.3335H5.33317C3.86041 5.3335 2.6665 6.5274 2.6665 8.00016V24.0002C2.6665 25.4729 3.86041 26.6668 5.33317 26.6668H26.6665C28.1393 26.6668 29.3332 25.4729 29.3332 24.0002V8.00016C29.3332 6.5274 28.1393 5.3335 26.6665 5.3335Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.3332 9.3335L17.3732 16.9335C16.9615 17.1914 16.4856 17.3282 15.9998 17.3282C15.5141 17.3282 15.0381 17.1914 14.6265 16.9335L2.6665 9.3335" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  )
}

export default EmailIcon;