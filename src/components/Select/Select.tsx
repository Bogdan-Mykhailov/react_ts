import { FC } from 'react';

interface Props {
  label: string
}

export const Select: FC<Props> = ({ label }) => {
  return (
    <div>
      <label htmlFor="select">{label}</label>
      <select id="select">
        <option value="1" />
        <option value="2" />
        <option value="3" />
      </select>
    </div>
  );
};
