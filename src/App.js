import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

import {
  ModuleCard
} from './components'

export default () => {
  const [modules, setModules] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/modules?client_id=6`)
      .then(function (response) {
        // handle success
        console.log(response.data)
        setModules(response?.data?.modules)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])
  return (
    <>
      {
        modules.map((module, index) => (
          <ModuleCard
            key={`Module ${index}`}
            name={module.name}
            tag={module.tag}
            route={module.route}
            position_menu={module.position_menu}
            priority={module.priority}
          />
        ))
      }
    </>
  )
}
