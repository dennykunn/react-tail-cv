import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Biography from './Biography.jsx';
import Experience from './Experience.jsx';
import Certificates from './Certificates.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Header />
      <Content />
      <Biography />
      <Experience />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
