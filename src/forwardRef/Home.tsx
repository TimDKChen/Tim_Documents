import { Component } from 'react';
import Button from './Button';
import Test from './Test';

export class Home extends Component {
  childRef = null as any;
  render() {
    return (
      <div>
        <Test ref={(ref) => (this.childRef = ref)} />
        <Button
          onClick={() => {
            if (this.childRef) {
              console.log(this.childRef);
              console.log(this.childRef.test);
            }
          }}>
          测试调用子组件方法
        </Button>
      </div>
    );
  }
}
