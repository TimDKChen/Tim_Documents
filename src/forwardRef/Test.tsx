// 函数组件
import { useImperativeHandle, forwardRef } from 'react';

const Test = forwardRef((props, ref) => {
  console.log('ref in Test: ', ref);

  useImperativeHandle(ref, () => ({
    test
  }));

  const test = () => {
    console.log('我是ForwardRef组件的test方法');
  };

  return <div>{'ForwardRef组件'}</div>;
});
export default Test;

// 类组件
// import { Component } from 'react';

// class Test extends Component {
//   test = () => console.log('我是ForwardRef组件的test方法');

//   render() {
//     return <div>ForwardRef组件</div>;
//   }
// }
// export default Test;
