import logo from './logo.svg';
import './App.css';
import ShopHeader from "./components/ShopHeader";
import Banner from "./components/Banner";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";

function App() {
    return (
        <div className="App">
            <ShopHeader/>
            <Banner/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </div>
    );
}

export default App;
