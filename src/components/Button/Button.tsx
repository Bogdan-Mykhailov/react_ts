import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  onClick,
}) => (
  <button
    onClick={onClick}
    className={buttonStyles}
    type={type}
  >
    <img
      className={iconStyles}
      src={icon}
      alt="Button icon"
    />
  </button>
);
