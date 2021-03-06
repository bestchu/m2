import React from 'react';
import { useHistory } from 'ice';
import { Avatar, Overlay, Menu, Icon } from '@alifd/next';
import styles from './index.module.scss';

const { Item } = Menu;
const { Popup } = Overlay;

export interface Props {
  name: string;
  avatar: string;
  mail: string;
}

const UserProfile = ({ name, avatar, mail }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Avatar src={avatar} alt="用户头像" />
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <span>{mail}</span>
      </div>
    </div>
  );
};

const HeaderAvatar = (props: Props) => {
  const { name, avatar } = props;
  const history = useHistory();
  const onAvatarMenuClick = (key: string) => {
    switch (key) {
      case 'exit': {
        history.push('/user/login');
        break;
      }
      case 'account': {
        history.push('/person');
        break;
      }
      case 'set': {
        history.push('/settings');
        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <Popup
      trigger={
        <div className={styles.headerAvatar}>
          <Avatar size="small" src={avatar} alt="用户头像" />
          <span style={{ marginLeft: 10 }}>{name}</span>
        </div>
      }
      triggerType="click"
    >
      <div className={styles.avatarPopup}>
        <UserProfile {...props} />
        <Menu className={styles.menu} onItemClick={onAvatarMenuClick}>
          <Item key="account">
            <Icon size="small" type="account" />
            个人设置
          </Item>
          <Item key="set">
            <Icon size="small" type="set" />
            系统设置
          </Item>
          <Item key="exit">
            <Icon size="small" type="exit" />
            退出
          </Item>
        </Menu>
      </div>
    </Popup>
  );
};

HeaderAvatar.defaultProps = {
  name: 'MyName',
  mail: 'name@gmail.com',
  avatar: 'https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png',
};

export default HeaderAvatar;
