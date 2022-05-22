
import './App.css';
import Homepage from './pages/homepage';
import galleryback_granddinner from './components/galleryback_granddinner';

// import Gallery from './pages/gallery';
import Galleryfront from './components/galleryfront';
import { Route,BrowserRouter, Switch} from "react-router-dom";
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
     <BrowserRouter basename='/index.html'>
      <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/gallery" component={Galleryfront}/>
          <Route path="/freshers" component={Galleryback}/>
          <Route path="/about" component={AboutComp}/>
          <Route path="/infrastructure" component={infra}/>
          <Route path="/alumni" component={Alumni}/>

          <Route path="/illu" component={gallerback_illu}/>
          <Route path="/republic" component={gallerback_republicday}/>
          <Route path="/grand-dinner" component={galleryback_granddinner}/>
          <Route path="/class-song" component={galleryback_classsong}/>
          <Route path="/achievements" component={AchievComp}/>
          <Route path="/alumni-meet" component={galleryback_alumnimeet}/>
          <Route path="/holi" component={galleryback_holi}/>
          <Route path="/farewell" component={galleryback_farewell}/>
          <Route path="/saraswati-puja" component={galleryback_saraswatipuja}/>
          
          <Route path="/hall" component={Hall}/>
          <Route path="/teams2" component={Teams2}/>
          <Route path="/warden" component={Warden}/>
         

      </Switch>
     </BrowserRouter>
    </>

  );
}

export default App;
