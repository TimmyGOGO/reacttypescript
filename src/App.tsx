import * as React from 'react';
import './App.css';
import MyClass from './components/MyClass';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MyClass 
          isMarried={true}  
        />
      </div>
    );
  }
}

export default App;
