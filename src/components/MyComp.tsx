import * as React from 'react';

// NOT RECOMMENDED:
// type MyCompProps = {
//     name: 'techsith' | 'interviewnest'
// }; 

interface IMyCompProps { 
  name: 'techsith' | 'interviewnest';
  isMarried: boolean;
  kids: 2 | 4;
  livedIN?: ['CA', 'AZ'];
}

const MyComp = (props: IMyCompProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>     
  );
}

export default MyComp;
