import React, { useState } from 'react'

import logo from './icons/logo-color.svg'
import Dots from './components/Dots'
import SearchBar from './components/SearchBar'
import { CurrentWeather, DailyWeather, HourlyWeather, mapWeatherConditionToIcon, WeatherCondition } from './weather'
import CurrentWeatherCard from './components/CurrentWeatherCard'
import DailyForecast from './components/DailyForecast'
import HourlyForecast from './components/HourlyForecast'
import { add, format } from 'date-fns'

const App = () => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>()
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeather[]>([])
  const [dailyWeather, setDailyWeather] = useState<DailyWeather[]>([])

  const fetchWeather = async (text: string) => {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`

    const currentWeatherResult = await fetch(currentWeatherUrl)
    const currentWeatherData = await currentWeatherResult.json()

    const { coord: { lon, lat } } = currentWeatherData

    const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`

    const result = await fetch(oneCallUrl)
    const data = await result.json()

    const city = currentWeatherData['name']
    const country = currentWeatherData['sys']['country']

    setCurrentWeather({
      city,
      country,
      condition: data['current']['weather'][0]['main'],
      temperature: Math.round(data['current']['temp'] - 273.15),
    })

    setHourlyWeather(
      data['hourly'].slice(1, 6).map((hourlyWeather: any, index: number) => {
        // const date = new Date(1970, 0, 1) // Epoch
        // date.setSeconds(hourlyWeather['dt'])

        const today = new Date()
        const now = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), 0, 0)

        const date = add(now, { hours: index + 1 })

        const time = format(date, 'HH:mm')
        const period = format(date, 'a')

        return {
          time,
          period,
          condition: hourlyWeather['weather'][0]['main'],
          temperature: Math.round(hourlyWeather['temp'] - 273.15),
        }
      })
    )

    setDailyWeather(
      data['daily'].slice(1, 6).map((dailyWeather: any, index: number) => {
        const date = new Date()
        const day = format(add(date, { days: index + 1 }), 'E')

        return {
          day,
          condition: dailyWeather['weather'][0]['main'],
          temperature: Math.round(dailyWeather['temp']['day'] - 273.15),
        }
      })
    )
  }

  return (
    <main className="bg-gray-200 min-h-screen flex flex-col">
      <header className="self-center p-4">
        <img src={logo} className="h-8" alt="logo" />
      </header>
      <div className="flex-grow flex justify-center items-center flex-col">
        <div className="max-w-lg flex flex-wrap">
          <SearchBar onSearch={fetchWeather} />
          {currentWeather
            ? <CurrentWeatherCard
              city={currentWeather.city}
              country={currentWeather.country}
              condition={currentWeather.condition}
              temperature={currentWeather.temperature}
            />
            : <></>
          }

          {hourlyWeather.length
            ?
            <div className="bg-white rounded-3xl shadow flex-grow w-full flex flex-col mb-4 px-12 pt-8">
              <div className="flex justify-between">

                {hourlyWeather.map((weather, index) =>
                  <HourlyForecast
                    key={index}
                    time={weather.time}
                    period={weather.period}
                    condition={weather.condition}
                    temperature={weather.temperature}
                  />
                )}
              </div>
              <div className="self-center mt-2">
                <Dots />
              </div>
            </div>
            : <></>
          }

          {dailyWeather.length
            ?
            <div className="bg-white rounded-3xl shadow flex-grow w-full flex flex-col mb-4 px-12 pt-8">
              <div className="flex justify-between">

                {dailyWeather.map((weather, index) =>
                  <DailyForecast
                    key={index}
                    day={weather.day}
                    condition={weather.condition}
                    temperature={weather.temperature}
                  />
                )}
              </div>
              <div className="self-center mt-2">
                <Dots />
              </div>
            </div>
            : <></>
          }
        </div>
      </div>
      <div className="self-center p-4">
        <div>
          <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </div>
      </div>
    </main>
  )
}

export default App
