import MenuIcon from '@mui/icons-material/Menu';
import styles from './MenuButton.module.scss';
import classNames from 'classnames';

export default function MenuButton() {
  return (
    <button className={classNames(styles['chat-button'], styles['menu-button'])}>
      <MenuIcon />
    </button>
  );
}
