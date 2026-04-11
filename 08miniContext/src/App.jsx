import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import "./App.css"

function App() {

  return (
    <UserContextProvider>
      <h1>Custom APIs in React for solving prop-drilling</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
