import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateTrip from "./pages/CreateTrip"
import TripDetail from "./pages/TripDetail"
import EditTrip from "./pages/EditTrip"

function App() {

  return (
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<CreateTrip/>}/>
      <Route path="/trip/:id" element={<TripDetail/>}/>
      <Route path="/trip/:id/edit" element={<EditTrip/>}/>
   </Routes>
  )
}

export default App
