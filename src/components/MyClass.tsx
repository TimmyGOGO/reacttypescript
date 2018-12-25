import * as React from 'react';

// ? - optional property, without '?' - mandatory property
export interface IMyClassProps { name?: string; isMarried: boolean }

class MyClass extends React.Component<IMyClassProps> {
 
  // свойства по-умолчанию:
  public static defaultProps: Partial<IMyClassProps> = {
    name: 'techsith'
  };

  public render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default MyClass;
