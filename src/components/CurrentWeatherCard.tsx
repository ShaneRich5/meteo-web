import { mapWeatherConditionToIcon, WeatherCondition } from "../weather"
import DegreeSymbol from "./DegreeSymbol"
import Dots from "./Dots"

interface CurrentWeatherCardProps {
  city: string
  country: string
  temperature: number
  condition: WeatherCondition
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({ city, country, temperature, condition }) => {
  return (
    <div className="bg-white rounded-3xl shadow flex-grow w-full flex flex-col mb-4 px-8 pt-8">
      <div className="flex justify-between pb-4">
        <div className="flex flex-col justify-center">
          <h3 className="text-8xl text-gray-700	font-semibold font-mono">{temperature}<DegreeSymbol /></h3>
          <p className="text-gray-400 font-semibold font-mono">{city}, {country}</p>
        </div>
        <div className="bg-gray">
          <img src={mapWeatherConditionToIcon(condition)} className="cursor-pointer h-24 w-24" alt="today's weather icon" />
        </div>
      </div>
      <div className="self-center">
        <Dots />
      </div>
    </div>
  )
}

export default CurrentWeatherCard
