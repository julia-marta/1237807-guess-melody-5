import React, {Fragment, createRef, useEffect, useState} from "react";
import PropTypes from "prop-types";

const Player = (props) => {
  const {onPlayButtonClick, isPlaying, src} = props;
  const audioRef = createRef();
  const [isLoading, setPlayerState] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    audio.oncanplay = () => {
      setPlayerState(false);
    };

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.oncanplay = null;
    };
  }, [isPlaying]);

  return (
    <Fragment>
      <button className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button" disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div className="track__status">
        <audio src={src} ref={audioRef} />
      </div>
    </Fragment>
  );
};

Player.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default Player;
