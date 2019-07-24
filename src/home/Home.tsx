/**
 * Created by 崔国辉 on 2019/7/8 0008 16:20
 * Develop by 崔国辉 on 2019/7/8 0008 16:20
 */
import React, { } from 'react';
import PropTypes from 'prop-types';
// import Request from '../util/Request';

import Header from './header/Header';
import FooterTab from '../common/footer_tab/FooterTab';
import * as Styles from './Home.css';

function Home (props) {
  // Request.get('/banner').then((res) => {
  //   console.log(res);
  // });

  // foot_tab组件点击回调函数
  const tabClick = (index) => {
    const { history } = props;
    if (index === 0) {
      history.push('/');
    } else if (index === 1) {
      history.push('/playing');
    } else if (index === 2) {
      history.push('/my');
    }
  };

  return (
    <div className={Styles.root}>
      <div className={Styles.content}><Header /></div>
      <div className={Styles.footer}>
        <FooterTab tabClick={tabClick} />
      </div>
    </div>
  );
}
Home.propTypes = {
  // @ts-ignore
  history: PropTypes.shape().isRequired,
};

export default Home;
