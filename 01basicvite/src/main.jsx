// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const ReactElement = {
  type: 'a',
  properties: {
    href: "https://google.com",
    target: "_blank"
  },
  children: 'Click me to visit google'
}

function MyApp(){
  return (
    <div>
      <h1>Custom React app</h1>
    </div>
  )
}

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const newReactEle = React.createElement(
  'a',
  {
    href: "https://google.com", target: "_blank"
  },
  "Click to visit google"
)


createRoot(document.getElementById('root')).render(
  newReactEle,
  <App />
)
