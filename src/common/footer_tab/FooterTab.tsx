/**
 * Created by 崔国辉 on 2019/7/22 10:40
 * Develop by 崔国辉 on 2019/7/22 10:40
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styles from './FooterTab.css';
import * as Images from '../../images';

const FooterTab = (props) => {
  const { tabClick } = props;
  const [index, setTabIndex] = useState<number>(0);
  useEffect(() => {
    // 将点击的index传回父组件
    tabClick(index);
  }, [index]);
  return (
    <div className={Styles.root}>
      <div role="none" onClick={() => { setTabIndex(0); }}>
        {index === 0 ? <img src={Images.SelectedMusic} alt="" />
          : <img src={Images.Music} alt="" />}
      </div>
      <div role="none" onClick={() => { setTabIndex(1); }}>
        {index === 1 ? <img src={Images.SelectedPlaying} alt="" />
          : <img src={Images.Playing} alt="" />}
      </div>
      <div role="none" onClick={() => { setTabIndex(2); }}>
        {index === 2 ? <img src={Images.SelectedMe} alt="" />
          : <img src={Images.Me} alt="" />}
      </div>
    </div>
  );
};

FooterTab.propTypes = {
  tabClick: PropTypes.func.isRequired,
};

export default FooterTab;
