import {Gallery} from 'react-grid-gallery';
import './App.css';

const images = [
  {
    src: 'https://france3-regions.francetvinfo.fr/image/WwR1tJ5wwR2BpSugRIk14T6L0aI/600x400/regions/2022/10/07/6340290e759a3_trafic-de-drogues.png',
    width: 'auto',
    height: 700,
    caption: 'price',
  },
  {
    src: 'https://resize-europe1.lanmedia.fr/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/sante/les-drogues-de-plus-en-plus-pures-inquietent-1351000/21027800-1-fre-FR/Les-drogues-de-plus-en-plus-pures-inquietent.jpg',
    width: 'auto',
    height: 700,
    tags: [{value: '$', title: '$'}, {value: '€', title: '€'}],
    alt: 'extasie',
  },

  {
    src: 'https://img.passeportsante.net/1200x675/2022-04-06/shutterstock-1524354695.webp',
    width: 'auto',
    height: 700,
    tags: [{value: 'ghb / gbl', title: 'ghb'}],
  },
  {
    src: 'https://media.sudouest.fr/13158223/1000x500/marco-verch.jpg?v=1669629218',
    width: 'auto',
    height: 700,
    tags: [{value: 'cocaine', title: 'cocaine'}],
  },

  {
    src: 'https://media.nouvelobs.com/referentiel/1200x630/15188604.jpg',
    width: 'auto',
    height: 700,
    tags: [{value: 'extasie', title: 'extasie'}],
  },

  {
    src: 'http://www.asud.org/wp-content/uploads/2013/05/caps_heroine.jpg',
    width: 'auto',
    height: 700,
    tags: [{value: 'Héroïne', title: 'Héroïne'}],
  },
];

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <p>FAKE WEBSITE DRUGS</p>
        <p className="w">
          This is a fake drug selling site designed for the development of a machine learning tool for web servers, photo and keyword detection for hosting companies and mobile application.
        </p>
      </header>
      <h4>Pictures</h4>

      <Gallery images={images} />

      <h4>Keywords</h4>

      <p>cocaine</p>
      <p>extasie</p>
      <p>ghb</p>
      <p>gbl</p>
      <p>drug</p>
      <p>telegram</p>
      <p>delivery</p>
      <p>contact</p>
      <p>Héroïne</p>
      <p>LSD</p>
      <p>€</p>
      <p>$</p>
      <p>OTHERS ...</p>

      <p>Hosts vercel.com</p>
      <p>contact boschat@protonmail.com</p>

    </div>
  );
}

export default App;
