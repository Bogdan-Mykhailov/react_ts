import { FC } from 'react';
import './Input.scss';

interface Props {
  type: string;
  placeholder: string;
  className: string;
}

export const Input: FC<Props> = ({
  type,
  placeholder,
  className,
}) => (
  <input
    type={type}
    className={className}
    placeholder={placeholder}
  />
);
