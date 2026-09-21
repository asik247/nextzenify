import React from 'react';
import Hero from '../Component/Hero/Hero';
import Title from '../Component/TemplateTitle/Title';
import Reseller from '../Component/Reseller/Reseller';
import Circle from '../Component/Circle/Circle';
import Cards from '../Component/Cards/Cards';
import Services from '../Component/Services/Services';
import Question from '../Component/Question/Question';

const Home = () => {
    return (
        <div>
            {/* Hero Component */}
            <Hero></Hero>
            {/* Title components */}
            <Title></Title>
            {/* Reseller */}
            <Reseller></Reseller>
            {/* Circle */}
            <Circle></Circle>
            {/* cardss */}
            {/* <Cards></Cards> */}
            {/* services */}
            {/* <Services></Services> */}
            {/* Question */}
            {/* <Question></Question> */}
        </div>
    );
};

export default Home;