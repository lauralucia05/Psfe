import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import PatientDashboard from './pages/PatientDashboard'
import ReferralForm from './pages/ReferralForm'
import MessagingSystem from './pages/MessagingSystem'
import SpecialistProfile from './pages/SpecialistProfile'
import SpecialistDashboard from './pages/SpecialistDashboard'
import ScheduleManagement from './pages/ScheduleManagement'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import FAQ from './pages/FAQ'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import TmsInfo from './pages/TmsInfo'
import TmsScience from './pages/TmsScience'
import TmsCandidates from './components/TmsCandidates'
import TmsTypes from './pages/TmsTypes'
import AppContextProvider from './context/AppContext'
import { SocketProvider } from './context/SocketContext'

const App = () => {
  return (
    <AppContextProvider>
      <SocketProvider>
        <ToastContainer />
        <Navbar />
        <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/doctors/:speciality' element={<Doctors />} />
          <Route path='/login' element={<Login />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/appointment/:docId' element={<Appointment />} />
          <Route path='/my-appointments' element={<MyAppointments />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/patient-dashboard' element={<PatientDashboard />} />
          <Route path='/referral-form' element={<ReferralForm />} />
          <Route path='/messages' element={<MessagingSystem />} />
          <Route path='/specialist/:doctorId' element={<SpecialistProfile />} />
          <Route path='/specialist-dashboard' element={<SpecialistDashboard />} />
          <Route path='/schedule-management' element={<ScheduleManagement />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/tms-info' element={<TmsInfo />} />
          <Route path='/tms-science' element={<TmsScience />} />
          <Route path='/tms-candidates' element={<TmsCandidates />} />
          <Route path='/tms-types' element={<TmsTypes />} />
        </Routes>
        </div>
        <Footer />
      </SocketProvider>
    </AppContextProvider>
  )
}

export default App
