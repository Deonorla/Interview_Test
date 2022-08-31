import { IonContent, IonPage} from '@ionic/react';
import Case from '../components/Case';
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import Specs from '../components/Specs';
import Sponsor from '../components/Sponsor';

import './Home.css';

const Home: React.FC = () => {
  return (
  <IonContent>
    <Header />
    <Homepage />
    <Sponsor />
    <Specs />
    <Case />
  </IonContent>

  );
};

export default Home;
