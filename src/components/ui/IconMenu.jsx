import React, {useState} from 'react';
import {
  HomeSharp as HomeIcon,
  VolumeOffSharp as SoundOffIcon,
  VolumeUpSharp as SoundOnIcon,
  HelpOutlineSharp as HelpIcon,
  SettingsSharp as SettingsIcon,
} from '@material-ui/icons/';
import CenteringBox from '../abs/CenteringBox';
import IconMenuButton from './IconMenuButton';
import routes from '../../routes';

// TODO(Ugur): Move sound state up
const IconMenu = () => {
  const [muted, setMuted] = useState(false);
  return (
    <CenteringBox>
      <IconMenuButton route={routes.MAIN}>
        <HomeIcon />
      </IconMenuButton>
      <IconMenuButton
        onClick={() => {
          setMuted((oldVal) => !oldVal);
        }}
      >
        {muted ? <SoundOffIcon /> : <SoundOnIcon />}
      </IconMenuButton>
      <IconMenuButton route={routes.SETTINGS}>
        <SettingsIcon />
      </IconMenuButton>
      <IconMenuButton route={routes.HELP}>
        <HelpIcon />
      </IconMenuButton>
    </CenteringBox>
  );
};

export default IconMenu;
