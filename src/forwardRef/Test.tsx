// import { forwardRef } from 'react';

// const Test = forwardRef((props, ref) => {
//   console.log('ref in Test: ', ref);
//   return <div>{'ForwardRef组件'}</div>;
// });
// export default Test;

import { Component } from 'react';

class Test extends Component {
  test = () => console.log('我是ForwardRef组件的test方法');

  render() {
    return <div>ForwardRef组件</div>;
  }
}
export default Test;
