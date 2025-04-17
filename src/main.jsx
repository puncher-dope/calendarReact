import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
window.location.replace('https://www.appsheet.com/start/964ff124-11fb-4408-b51e-2978117a4f7a?platform=desktop#vss=H4sIAAAAAAAAA6WOvQ3CMBBGd7naE7hFFAhBA6LBFCa-SBaJHcUOEFmWGIBhaKgoWMHZiAs_ghYo7zu9pxdgq3E38zLbAF-G9zXGFjgEAfO2QgFcwMAaX9tCABMwleVjTKd07Q7pnC7dUUCEuGIvh0cHPHyv4P9XMNAKjde5xrr39TR5niy9e5KGTw4ig7Lxcl3gPZ64GGnLbdY4VAtK-jHFjcxwX0mjJlaRNpeFw3gDohx5gHkBAAA=&view=апрель&appName=КопияГрафикПуриАзов-641903456')
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
