import Hero from '../sections/hero.jsx';    
import Products from '../sections/products.jsx';
import About from '../sections/about.jsx';
import Wheretobuy from '../sections/whyRuwash.jsx';
import ContactAndFooter from '../sections/contact.jsx';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Home */}
      <div id="home">
        <Hero />
      </div>

      {/* Products */}
      <div id="products">
        <Products />
      </div>

      {/* About */}
      <div id="about">
        <About />
      </div>

      {/* Where To Buy */}
      <div id="whyRuwash">
        <Wheretobuy />
      </div>

      {/* Contact / FAQ / Footer */}
      <div id="contact">
        <ContactAndFooter />
      </div>
    </div>
  );
}