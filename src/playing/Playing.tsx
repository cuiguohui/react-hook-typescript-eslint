/**
 * Created by 崔国辉 on 2019/7/22 11:34
 * Develop by 崔国辉 on 2019/7/22 11:34
 */

import React from 'react';
import PropTypes from 'prop-types';
import PlayingLayout from './layout/PlayingLayout';

const Playing = (props) => {
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
    <PlayingLayout tabClick={tabClick} />
  );
};
Playing.propTypes = {
  // @ts-ignore
  history: PropTypes.shape().isRequired,
};

export default Playing;
