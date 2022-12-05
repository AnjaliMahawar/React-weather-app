import React, { useEffect, useState } from 'react'

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

const App2 = () => {
  const[data,setData]=useState({})
  const[inputCity,setInputCity]=useState('')
  const apiKey='9300a6ea6cfeda619ed09270c3a6e9c8'
  const getWheaterDetails=(cityName)=>{
    if (!cityName) return
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiUrl).then((res)=>{
      console.log("ress",res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log("error",err)
    })
  }
   useEffect(()=>{
     getWheaterDetails('delhi')
   },[])

   const handleSearch = () => {
    getWheaterDetails(inputCity)
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  return (
    <div className="col-md-12">
        <div className='wetherBg'>
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control" onChange={handleChangeInput} value={inputCity} />
          <button className="btn btn-primary"   onClick={handleSearch} type="button">Search</button>

        </div>

        </div>

        <div className="col-md-12 text-center mt-5">

        <div className="shadow rounded wetherResultBox">
        <img className="weathorIcon" src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
           
        <h5 className="weathorCity">{data?.name}</h5>
            <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
            <h6>min_temp{((data?.main?.temp_min) - 273.15).toFixed(2)}°C ----- max_temp{((data?.main?.temp_max) - 273.15).toFixed(2)}°C</h6>
            <h6>humidity {data?.main?.humidity}%</h6>
            {/* calvin to calsius */}
        </div>

        </div>    
    </div>
  )
}

export default App2

// {((data?.main?.temp) - 273.15).toFixed(2)}°C