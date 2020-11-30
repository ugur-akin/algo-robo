import React, {useState} from 'react';
import HomeIcon from '@material-ui/icons/HomeSharp';
import SoundOffIcon from '@material-ui/icons/VolumeOffSharp';
import SoundOnIcon from '@material-ui/icons/VolumeUpSharp';
import HelpIcon from '@material-ui/icons/HelpOutlineSharp';
import SettingsIcon from '@material-ui/icons/SettingsSharp';
import CenteringBox from '../../components/abs/CenteringBox';
import IconMenuButton from './IconMenuButton';
import routes from '../../routes';
// TODO(Ugur): Move sound state up
const IconMenu = () => {
  const [muted, setMuted] = useState(false);
  return (
    <CenteringBox expand>
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
