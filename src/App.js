import React, {useState, Image} from 'react';
import './App.css';
import MediaObject from './components/mediaObject';
// import * as apiData from './api/weatherApi';
import * as format from './helpers/format';

function App() {
  const [home, setHome] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [name, setName] = useState('Hello, where are you ?')
  const [temp, setTemp] = useState(' ')
  const [desc, setDesc] = useState(' ')
  const [perc, setPerc] = useState(' ')

  function zipWeatherLookUp(event) {
    event.preventDefault();
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=85552,us&appid=3a5bf1eb2a22106bac2d6d95c02695fb", {
      "method": "GET"
    })
      .then(response => response.json())
      .then(data => {
        let temps = format.formatToF(data)
        console.dir(data)
        setTemp(temps)
        setName(data.name)
        setDesc(data.weather[0].description)
        setPerc(data.main.humidity)
        clickToggle()
        setHome(true)
      })
  }

  const clickToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="app">
      <header className="app-header"> 
        <h2 className="header-txt">My Weather</h2>
      </header>
      <div className="homeWrapper">
        <div className="location">
          { toggle ?
            <form 
              onSubmit={zipWeatherLookUp}
              className="zipInputWrapper">
              <input placeholder="Zip" className="zipInput"/>
              <button type="submit" className="submitBtn">Enter</button>
            </form>
          :
            <h3>{name}</h3>
          }
          <img 
            height={26}
            width={26}
            onClick={clickToggle}
            src={require('./assets/pin.svg')}/>
        </div>
        { home ?
          <>
            <div className="today">
              <h4 style={{margin: 0}}>Sun, Oct 04</h4>
              <div className="mediaObj-sm">
                <img className="forcast-img" src={require('./assets/sunny.svg')} />
                <h5 
                  className="forcast-txt" 
                  style={{ margin: 0, paddingLeft: 10 }}>{desc}</h5>
              </div>
              <h1 style={{ margin: "0.2em" }}>
                {temp}
                <span style={{ fontSize: 16 }}> F</span>
              </h1>
              <h5 style={{ margin: 0, paddingLeft: 10}}>Percipitation: {perc}%</h5>
            </div>
            <MediaObject 
              img={require('./assets/sunny.svg')} 
              day={format.day}
              month={format.month}
              date={format.date}
              desc={desc}
              precipitation={perc}
              temp={temp}
            />
          </>
          :
          <img 
            src={require('./assets/lightning.jpg')}
            className='responsive' 
          />
        }
      </div>
    </div>
  );
}

export default App;
