import { fetchWeather } from "../helper";
import {
  CloudIcon,
  EyeIcon,
  LightBulbIcon,
  LightningBoltIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

const WeatherCard = () => {
  const [weather, setWeather] = useState("");

  const getWeather = async () => {
    setWeather(await fetchWeather());
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      setWeather(await fetchWeather(lat, long));
    });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div
      className="shadow-base hover:shadow-medium dark:shadow-none dark:hover:shadow-none dark:bg-card col-span-1 m-4 lg:m-8  rounded-xl
      h-[250px] lg:h-[350px] transition-all duration-300 ease-in-out
      "
    >
      <div className="">
        <div className="flex items-center justify-center">
          <div className="relative w-[140px] h-[140px] lg:w-[180px] lg:h-[180px]">
            <Image
              src={`http://openweathermap.org/img/wn/${
                weather
                  ? weather?.weather[0]?.icon
                  : "/images/weather/sunny.svg"
              }@4x.png`}
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-around mt-5">
          <div className="space-y-2">
            <h1 className="text-base-text-light dark:text-base-text-dark dark:text-primary-text-dark font-medium flex items-center">
              <LightBulbIcon className="w-4 h-4 text-yellow-500 mr-1" />
              {weather ? (weather.main.temp - 272).toFixed(2) : ""} °C
            </h1>

            <p className="text-base-text-light dark:text-base-text-dark dark:text-secondary-text  font-medium flex items-center">
              <EyeIcon className="w-4 h-4 text-green-500 mr-1" />
              {weather && weather.visibility / 1000} K.m.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-base-text-light dark:text-base-text-dark dark:text-primary-text-dark flex font-medium items-center">
              <LocationMarkerIcon className="w-4 h-4 mr-1 text-blue-500" />
              {weather && weather.name}
            </h1>
            <h1 className="text-base-text-light dark:text-base-text-dark dark:text-primary-text-dark flex font-medium items-center">
              <LightningBoltIcon className="w-4 h-4 mr-1 text-yellow-400" />
              {weather && weather.weather[0].description}{" "}
              {weather && weather?.weather[1]?.description ? "/" : ""}
              {weather && weather?.weather[1]?.description}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
