import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

import {
  ModuleCard
} from './components'

export default () => {
  const [modules, setModules] = useState([])
  const [clientID, setClientID] = useState(6)
  const clientIdRef = useRef(6)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/modules?client_id=${clientID}`)
      .then(function (response) {
        // handle success
        console.log(response.data)
        setModules(response?.data?.modules)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [clientID])
  return (
    <>
      <h1>Módulos </h1>

      <div class='ui input focus' style={{ margin: '20px' }}>
        <input type='text' placeholder='Client ID' onChange={event => { clientIdRef.current = event.target.value }} />
      </div>

      <button class='ui button' style={{ margin: '20px' }} onClick={() => setClientID(clientIdRef.current)}>
          Search Modules for Client
      </button>

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
