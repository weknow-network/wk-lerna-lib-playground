// credit: https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe

import React from 'react';
import { IStyledButtonProps } from './IStyledButtonProps';

/**
 * Primary UI component for user interaction
 */
export const StyledButtonRaw = ({
  className,
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: IStyledButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={[className, 'button', `button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
