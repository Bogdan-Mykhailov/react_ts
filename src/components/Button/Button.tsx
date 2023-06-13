import { FC } from 'react';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  buttonStyles: string;
  iconStyles: string;
}

export const Button: FC<Props> = ({
  buttonStyles,
  iconStyles,
  type = 'button',
  icon,
}) => (
  <button className={buttonStyles} type={type}>
    <img
      className={iconStyles}
      src={icon}
      alt="Button icon"
    />
  </button>
);
