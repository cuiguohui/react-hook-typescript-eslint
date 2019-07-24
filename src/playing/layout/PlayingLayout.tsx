/**
 * Created by 崔国辉 on 2019/7/24 16:00
 * Develop by 崔国辉 on 2019/7/24 16:00
 */

import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './PlayingLayout.css';
import FooterTab from '../../common/footer_tab/FooterTab';

const PlayingLayout = (props) => {
  const { tabClick } = props;

  return (
    <div>
      <div className={Styles.content}>playing</div>
      <div className={Styles.footer}>
        <FooterTab tabClick={tabClick} />
      </div>
    </div>
  );
};

PlayingLayout.propTypes = {
  // @ts-ignore
  tabClick: PropTypes.func.isRequired,
};

export default PlayingLayout;
