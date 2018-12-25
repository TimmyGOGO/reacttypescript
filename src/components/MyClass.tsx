import * as React from 'react';

export interface IMyClassProps { name: string; isMarried: boolean }

class MyClass extends React.Component<IMyClassProps> {
  public render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default MyClass;
