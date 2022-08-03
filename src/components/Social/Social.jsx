import React from 'react';
import clsx from 'clsx';

import SocialItem from './SocialItem';
import SocialData from './SocialData';
import { v4 as uuidv4 } from 'uuid';

import styles from './Social.module.scss';

const Social = ({ className }) => {
  return (
    <ul className={clsx(styles["social"], className)}>
      {SocialData.map((social) => {
        return <SocialItem
        key={uuidv4()}
        link={social.link}
        icon={social.icon}
        />
      })}
    </ul>
  )
}

export default Social;
