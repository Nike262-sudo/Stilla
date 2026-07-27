import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import FeaturedCollection from "./components/FeaturedCollection";
import Craftsmanship from "./components/Craftsmanship";
import EditorialStory from "./components/EditorialStory";
import CollectionShowcase from "./components/CollectionShowcase";
import Materials from "./components/Materials";
import FeaturedProducts from "./components/FeaturedProducts";
import Journal from "./components/Journal";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedCollection />
        <Craftsmanship />
        <EditorialStory />
        <CollectionShowcase />
        <Materials />
        <FeaturedProducts />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
