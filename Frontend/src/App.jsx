
import Navbar from './components/Navbar';
import Home from './Pages/HomePage';
import './App.css';

import './assets/styles/plugins/fancybox.min.css';
import './assets/styles/plugins/font-awesome.min.css';
import './assets/styles/plugins/nice-select.css';
import './assets/styles/plugins/range-slider.css';
import './assets/styles/plugins/swiper-bundle.min.css';
import './assets/styles/plugins/style.min.css';
import './assets/styles/vendor/bootstrap.min.css';


function App() {
 

  return (
    <>
      <div class="wrapper">
        <Navbar />
        <Home />
      </div>
    </>
  )
}

export default App
