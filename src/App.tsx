import { HashRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation"
import Unicorns from "./components/Unicorns"


function App() {

  return (
    <HashRouter>
      <div className="h-auto w-full">
        <Routes>
          <Route path="/" element= {<LandingPage />}/>
          <Route path="/unicorns" element={<Unicorns/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App

