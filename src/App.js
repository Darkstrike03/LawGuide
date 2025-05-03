import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Community from './component/Community';
import Library from './component/Library';
import Notice from './component/Notice';
import Container from './component/Container';
import Card1 from './component/Card1';
import OverlapCard from './component/Overlapcard';
import Container2 from './component/Container2';
import CarouselCards from './component/CarouselCards';
import Container3 from './component/Container3';
import Container4 from './component/Container4';
import NCard1 from './component/NCard1';
import Constitutions from './component/Constitutions';  
import Claws from './component/Claws';
import CategoriesINR from './component/CategoriesINR';
import LawDetail from './component/LawDetail';
import CategoryLaws from './component/CategoryLaws';
import Def from './component/Def';
import PPol from './component/PPol';
import Ndefault from './component/Ndefault';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Profile from './component/Profile';
import PrivacyPolicy from './component/PrivacyPolicy';
import TermsOfService from './component/TermsOfService';
import Lawai from './component/Lawai';
import AllLaws from './component/AllLaws'; // Import the AllLaws component

function App() {
    return (
        <Router>
            <Header />
            <Navbar />
            <Routes>
            <>
                <Route path="/" element={<><Hero /><Container/><Card1/><OverlapCard/><Container2/><CarouselCards/><Container3/><Container4/></>} />
                <Route path="/community" element={<Community />} />
                <Route path="/library" element={<><Library /><Constitutions/></>} />
                <Route path="/Claws" element={<Claws />} />
                <Route path="/notice" element={<><Notice /><Ndefault/></>} />
                <Route path="/lawai" element={<Lawai/>} />
                <Route path="/CategoriesINR" element={<><CategoriesINR /></>} />
                <Route path="/categoriesinr" element={<CategoriesINR />} />
                <Route path="/all-laws" element={<AllLaws />} /> {/* Add this route */}
                <Route path="/category/:category" element={<CategoryLaws />} />
                <Route path="/def" element={<Def />} />
                <Route path="/PPol" element={<PPol />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/law/:id" element={<LawDetail />} />  {/* ✅ Add LawDetail Route */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
            </>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
