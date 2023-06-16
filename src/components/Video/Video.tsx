import { FC, useState } from 'react';
import './Video.scss';
import { VIDEO_PATH } from '../../utils';
import * as icons from '../../assets/icons';

export const Video: FC = () => {
  const [toggle, setToggle] = useState(false);

  const correctIcon = !toggle
    ? icons.volumeXmark
    : icons.volumeHeight;

  const handleToggleMute = () => {
    setToggle(prevState => !prevState);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="video-wrapper">
        <img
          className="video-wrapper-icon"
          src={correctIcon}
          alt="Mute & unmute icons"
          onClick={handleToggleMute}
        />

        <img
          className="video-wrapper-go-back-icon"
          src={icons.arrowLeft}
          alt="Go back"
          onClick={handleGoBack}
        />

        <div className="video-wrapper--halfTransparent" />

        <video
          src={VIDEO_PATH}
          className="video-content"
          autoPlay
          muted={!toggle}
          loop
        />
      </div>
    </>
  );
};
