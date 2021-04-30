import DegreeSymbol from "./DegreeSymbol"
import { mapWeatherConditionToIcon, WeatherCondition } from "../weather"

interface HourlyForecastProp {
  time: string
  period: string
  temperature: number
  condition: WeatherCondition
}

const HourlyForecast: React.FC<HourlyForecastProp> = ({ time, period, temperature, condition }) => (
  <div className="flex flex-col items-center">
    <span className="text-sm text-gray-700 font-bold mb-2">{temperature}<DegreeSymbol /></span>
    <img className="h-10 w-10 mb-2" src={mapWeatherConditionToIcon(condition)} alt="hourly weather" />
    <span className="text-base text-gray-700 font-bold mb-2">{time}</span>
    <span className="text-sm text-gray-400 font-semibold">{period}</span>
  </div>
)

export default HourlyForecast
