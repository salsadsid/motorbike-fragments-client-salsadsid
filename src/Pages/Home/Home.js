import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Banner3></Banner3>
            <Reviews></Reviews>
            <Banner2></Banner2>
            <Footer></Footer>
        </div>
    );
};

export default Home;