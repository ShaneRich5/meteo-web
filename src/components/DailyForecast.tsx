import { mapWeatherConditionToIcon, WeatherCondition } from "../weather"
import DegreeSymbol from "./DegreeSymbol"

interface DailyForecastProp {
  day: string
  temperature: number
  condition: WeatherCondition
}

const DailyForecast: React.FC<DailyForecastProp> = ({ day, temperature, condition }) => (
  <div className="flex flex-col items-center">
    <span className="text-sm text-gray-700 font-bold mb-2">{temperature}<DegreeSymbol /></span>
    <img className="h-10 w-10 mb-2" src={mapWeatherConditionToIcon(condition)} alt="daily weather" />
    <span className="text-base text-gray-700 font-bold mb-2">{day}</span>
  </div>
)

export default DailyForecast
