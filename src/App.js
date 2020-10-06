import React, {useState} from 'react';
import './App.css';
import MediaObject from './components/mediaObject';
import * as apiData from './api/weatherApi';
import * as format from './helpers/format';

function App() {
  const [toggle, setToggle] = useState(true)
  const [name, setName] = useState('Pick your city')
  
  let clear = 'Clear';
  let precipitation = 'precipitation 0%';
  let apitemp = 96;
  let temp = `${apitemp}˚`;

  const clickToggle = () => {
    apiData.weatherApi();
    setToggle(!toggle)
  }

  return (
    <div className="app">
      <header className="app-header"> 
        <h2 className="header-txt">My Weather</h2>
      </header>
      <div className="homeWrapper">
        <div className="today">
          <div className="location">
            { toggle ?
              <div className="zipInputWrapper">
                <input placeholder="Zip" className="zipInput"/>
                <button type="submit" style={{ height: 34 }}>search</button>
              </div>
            :
              <h3>{name}</h3>
            }
            <img 
              height={toggle ? 24 : 26}
              width={toggle ? 24 : 26}
              onClick={clickToggle}
              src={require('./assets/pin.svg')}/>
          </div>
          <h4 style={{margin: 0}}>Sun, Oct 04</h4>
          <div className="mediaObj-sm">
            <img className="forcast-img" src={require('./assets/sunny.svg')} />
            <h5 className="forcast-txt" style={{ margin: 0, paddingLeft: 10 }}>Sunny</h5>
          </div>
          <h1 style={{ margin: "0.2em" }}>86˚
            <span style={{ fontSize: 16 }}>F</span>
          </h1>
          <h5 style={{ margin: 0, paddingLeft: 10}}>Percipitation: 0%</h5>
        </div>
        <MediaObject 
          img={require('./assets/sunny.svg')} 
          day={format.day}
          month={format.month}
          date={format.date}
          desc={clear}
          precipitation={precipitation}
          temp={temp}
        />
      </div>
    </div>
  );
}

export default App;
