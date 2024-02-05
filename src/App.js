//App.js
import React, { useState } from 'react';
import Child1 from './Child1.jsx';
import Child2 from './Child2.jsx';
import './App.css';


function App() {
  const defaultImage = 'https://www.kia.com/content/dam/kwp/kr/ko/configurator/ev9/trim/exterior/ev9-air/ism/ism_01.png';
  const [image, setImage] = useState(defaultImage);
  const [bg, setBg] = useState('##C9C9CB')

  const changeImage = (newImage) => {
    setImage(newImage);
  };

  return (
    <div className="App">
      <div className="dp_box">
        <Child1 image={image}/>
        <Child2 changeImage={changeImage}/>
      </div>
    </div>
  );
}

export default App;
