import React, {useState, Image} from 'react';
import './App.css';
import MediaObject from './components/mediaObject';
import weatherKey from './api/key';
import * as format from './helpers/format';

const App = () => {
  const [home, setHome] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [value, setValue] = useState(' ')
  const [name, setName] = useState('Hello, where are you ?')
  const [temp, setTemp] = useState(' ')
  const [desc, setDesc] = useState(' ')
  const [perc, setPerc] = useState(' ')

  const zipWeatherLookUp = (event) => {
    event.preventDefault();
    let url = formatUrl()

    fetch(url, { "method": "GET" })
      .then(response => response.json())
      .then(data => {
        let temps = format.formatToF(data)
        setTemp(temps)
        setName(data.name)
        setDesc(data.weather[0].description)
        setPerc(data.main.humidity)
        clickToggle()
        setHome(true)
      })
  }
  
  const formatUrl = () => {
    let apiCore = 'https://api.openweathermap.org/data/2.5/weather?'
    let apiCountry = 'us';
    let inputVal = value.trim();
    let apiZip = 'zip=' + inputVal + ',';
    let apiKey = weatherKey;
    let url = `${apiCore}${apiZip}${apiCountry}${apiKey}`;
    return url
  }

  const clickToggle = () => { setToggle(!toggle) }

  return (
    <div className="app">
      <header className="app-header"> 
        <h2 className="header-txt">Zip Weather</h2>
      </header>
      <div className="homeWrapper">
        <div className="location">
          { toggle ?
            <form 
              onSubmit={zipWeatherLookUp}
              className="zipInputWrapper">
              <input placeholder="Zip" value={value} onChange={e => setValue(e.target.value)} className="zipInput"/>
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
