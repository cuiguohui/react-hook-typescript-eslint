/**
 * Created by 崔国辉 on 2019/7/8 0008 16:20
 * Develop by 崔国辉 on 2019/7/8 0008 16:20
 */
import React, { useState } from 'react';

function Home () {
  // 声明一个新的状态变量，我们将其称为 "count"
  const [count, setCount] = useState<string>('0');

  return (
    <div>
      <p>
You clicked
        {count}
        {' '}
times
      </p>
      <button type="button" onClick={() => setCount(`${count}1`)}>
                Click me
      </button>
    </div>
  );
}

export default Home;
