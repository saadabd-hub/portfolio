import { IconProps } from '@/types';
import React, { FC, PropsWithChildren } from 'react';

const Icon:FC<IconProps & PropsWithChildren> = ({
  height,
  width,
  className,
  children
}) => {
  const viewBox = React.useMemo(() => {
    return `0 0 ${width} ${height}`
  }, [height, width])
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {children}
    </svg>
  )
}

export default Icon;