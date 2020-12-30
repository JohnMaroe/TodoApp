import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Quote from 'inspirational-quotes';

import { Container } from './styles';
import cloudy from '../../assets/icons/cloudy.png';
import rainny from '../../assets/icons/rainny.png';
import sunny from '../../assets/icons/sunny.png';
import snowy from '../../assets/icons/snowy.png';

function Clock() {
  const [locationCity, setLocationCity] = useState('LONDON');
  const [locationCountry, setLocationCountry] = useState('UK');
  const [weather, setWeather] = useState('CLOUDS');
  const [time, setTime] = useState();
  const [greeting, setGreeting] = useState('GOOD MORNING');
  const [quoteText, setQuoteText] = useState('GOOD MORNING');
  const [quoteAuthor, setQuoteAuthor] = useState('GOOD MORNING');


  async function fetchData() {
    const APIkey = '06516160b02368d5bddc1b19ad0f4035';
    navigator.geolocation.getCurrentPosition(handlePosition);

    function handlePosition(position) {
      const { latitude, longitude } = position.coords;
    
      handleAPI(latitude, longitude);
    }

    async function handleAPI(latitude, longitude) {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`);
      setWeather(data.weather[0].main);
      setLocationCity(data.name);
      setLocationCountry(data.sys.country);
    }
  }

  function handleWeatherIcon() {
    let weatherData = weather.toLowerCase();
    return (
      weatherData.includes('clear') ? sunny : 
      weatherData.includes('rain') ? rainny : 
      weatherData.includes('snow') ? snowy : cloudy
    );
  }

  function handleTimeAndGreeting() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours; 
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes; 
    let newTime = `${hours}:${minutes}`;

    if (hours > 12) setGreeting('GOOD AFTERNOON');
    if (hours > 18) setGreeting('GOOD NIGHT');

    setTime(newTime);
  }

  useEffect(handleTimeAndGreeting, []);
  useEffect(() => {
    setInterval(handleTimeAndGreeting, 5000)
  }, [time]);
  
  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    const {text, author} = Quote.getQuote();
    setQuoteText(text);
    setQuoteAuthor(author);
  }, [])

  return (
    <Container>
      <main>
        <header>
          <p>
            <i className="fas fa-quote-left"></i>
              {quoteText}
            <i className="fas fa-quote-right"></i>
          </p>
          <span>-{quoteAuthor}</span>
        </header>

        <section>
          <div>
            {weather && <img src={handleWeatherIcon()} alt={weather} />}
            <p>{greeting} &#183; {weather.toUpperCase()}</p>
          </div>
          <h1>{time} <span>UTC</span></h1>
          <span>IN {locationCity.toUpperCase()}, {locationCountry.toUpperCase()}</span>
        </section>

        <footer>
          <p>MORE</p>
          <button><i className="fas fa-sort-down"></i></button>
        </footer>
      </main>
    </Container>
  );
}

export default Clock;