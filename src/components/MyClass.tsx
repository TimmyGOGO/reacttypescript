import * as React from 'react';

// ? - optional property, without '?' - mandatory property
export interface IMyClassProps { name?: string; isMarried: boolean }

export interface IMyClassState { age: number; }

class MyClass extends React.Component<IMyClassProps, IMyClassState> {
 
  // свойства по-умолчанию:
  public static defaultProps: Partial<IMyClassProps> = {
    name: 'techsith'
  };

  public state = {
    age: 21
  };

  public render() {
    return (
      <div>
        <h1>My name is {this.props.name} and I am {this.state.age} years old!</h1>
      </div>
    );
  }
}

export default MyClass;
