import './App.css';
import Homepage from './pages/homepage';
import galleryback_granddinner from './components/galleryback_granddinner';

// import Gallery from './pages/gallery';
import Galleryfront from './components/galleryfront';
import { Route, Routes } from "react-router-dom";
import AboutComp from './components/AboutComp';
//import InfraComp from './components/InfraComp';
import infra from './components/infra';
import Galleryback from './components/galleryback';
import Alumni from './pages/alumni';

import gallerback_illu from './components/galleryback_illu';
import gallerback_republicday from './components/galleryback_republicday';
import AchievComp from './components/AchievComp';

import galleryback_classsong from './components/galleryback_classsong';
import galleryback_alumnimeet from './components/galleryback_alumni';
import galleryback_holi from './components/galleryback_holi';
import galleryback_saraswatipuja from './components/galleryback_saraswatipuja';
import galleryback_farewell from './components/galleryback_farewell';
import Hall from './components/Hall';
import Teams2 from './components/Teams2';
import Warden from './components/Warden';



function App() {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Homepage />}/>
          <Route path="gallery" element={<Galleryfront />}/>
          <Route path="freshers" element={<Galleryback />}/>
          <Route path="about" element={<AboutComp />}/>
          <Route path="infrastructure" component={infra}/>
          <Route path="/alumni" element={<Alumni />}/>
          <Route path="illu" component={gallerback_illu}/>
          <Route path="republic" component={gallerback_republicday}/>
          <Route path="grand-dinner" component={galleryback_granddinner}/>
          <Route path="class-song" component={galleryback_classsong}/>
          <Route path="achievements" element={<AchievComp />}/>
          <Route path="alumni-meet" component={galleryback_alumnimeet}/>
          <Route path="holi" component={galleryback_holi}/>
          <Route path="farewell" component={galleryback_farewell}/>
          <Route path="saraswati-puja" component={galleryback_saraswatipuja}/>
          <Route path="hall" element={<Hall />}/>
          <Route path="teams2" element={<Teams2 />}/>
          <Route path="warden" element={<Warden />}/>
      </Routes>
    </>
  );
}

export default App;
