import Aos from "aos";
import AffixMenu from "./components/AffixMenu";
import Contact from "./components/Contact";
import TemporaryDrawer from "./components/Drawer";
import FeaturesComp from "./components/FeaturesComp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeComp from "./components/HomeComp";
import PricingPlan from "./components/PricingPlan";
import ProductCards from "./components/ProductCards";
import Products from "./components/Products";
import TitleComp from "./components/TitleComp";

function App() {
  Aos.init();
  return <div className="App">
    {/* <Header /> */}
    <AffixMenu />
    <HomeComp />
  
    <Products />
   
    <FeaturesComp bool={true} title={"Get started in minutes"} text={"Installation is quick and easy, no mechanics are needed. Simply plug in the Vehicle Gateway, connect to a phone or tablet, and drive.  For added convenience, manage  IFTA and DVIR in one compliance solution"} img={"Images/Group 42877.png"}/>

    <FeaturesComp bool={false} title={"GPS Tracking"} text={"Send and track your fleet using GPS in real-time using weather and transportation data to exceed customer expectations. Track your assets with our mapping tools, which make it simple and easy to keep track of what's important to you"} img={"Images/Group 42878.png"}/>
    <FeaturesComp bool={true} title={"Flexible Dispatch Board"} text={"Dispatching Board is a dispatching software created taking into account the needs of the carrier. The Dispatching Board maximizes your time and simplifies day-to-day operations so you can focus on getting a better load and greater profits."} img={"Images/Group 71.png"}/>
    <PricingPlan />
    <Contact />
    <Footer />
  </div>;
}

export default App;
