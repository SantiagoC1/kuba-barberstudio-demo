import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Booking from './pages/Booking'
import ClientProfile from './pages/ClientProfile'
import BarberPanel from './pages/BarberPanel'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <div className="min-h-screen bg-kuba-bg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/perfil" element={<ClientProfile />} />
        <Route path="/barbero" element={<BarberPanel />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}
