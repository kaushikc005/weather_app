# Getting Strated with Create Vite 


 This project was bootstrapped with [Create Vite](https://vitejs.dev/guide/).
# Weather App
This is a simple and standard weather app.


## Description
This project is a working weather app where the user needs to type a location and press 'Enter' to fetch the weather of the respective location.







## Features

- Responsive
- Fullscreen mode
- Cross platform


## API Reference

### API Link
https://openweathermap.org/current

#### Get weather of a location

```http
  GET https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `location` | `string` | **Required**. Location to fetch weather|
| `api_key` | `string` | **Required**. Your API key |


