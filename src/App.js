import React, { PureComponent } from 'react';

import Sidebar from './sidebar/Sidebar';

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <>
        <Sidebar/>
      </>
    );
  }
}
