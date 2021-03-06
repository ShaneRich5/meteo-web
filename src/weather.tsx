import ThunderStormIcon from './icons/thunderstorm.svg'
import DrizzleIcon from './icons/drizzle.svg'
import RainIcon from './icons/rain.svg'
import SnowIcon from './icons/snow.svg'
import HazeIcon from './icons/haze.svg'
import SunnyIcon from './icons/sunny.svg'
import CloudyIcon from './icons/cloudy.svg'

const weatherConditionToIconMap = {
  'Thunderstorm': ThunderStormIcon,
  'Drizzle': DrizzleIcon,
  'Rain': RainIcon,
  'Snow': SnowIcon,
  'Mist': HazeIcon,
  'Smoke': HazeIcon,
  'Haze': HazeIcon,
  'Dust': HazeIcon,
  'Fog': HazeIcon,
  'Sand': HazeIcon,
  'Ash': HazeIcon,
  'Squall': HazeIcon,
  'Tornado': HazeIcon,
  'Clear': SunnyIcon,
  'Clouds': CloudyIcon,
}

export type WeatherCondition = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Mist' | 'Smoke' | 'Haze' | 'Dust' | 'Fog' | 'Sand' | 'Ash' | 'Squall' | 'Tornado' | 'Clear' | 'Clouds'

export interface Weather {
  temperature: number
  condition: WeatherCondition
}

export interface CurrentWeather extends Weather {
  city: string
  country: string
}

export interface HourlyWeather extends Weather {
  time: string
  period: string
}

export interface DailyWeather extends Weather {
  day: string
}

export const mapWeatherConditionToIcon = (condition: WeatherCondition) => weatherConditionToIconMap[condition]
