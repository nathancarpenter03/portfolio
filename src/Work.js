import React, { Component } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import WorkHeader from './WorkHeader';
import WorkSampleLeft from './WorkSampleLeft';
import WorkSampleRight from './WorkSampleRight';
import Social from './Social';


class Work extends Component {

  render() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <WorkHeader/>
            <WorkSampleLeft title="WarmUp:" stack="Javascript, React, React Native (iOS), Bootstrap" description="For my final project at the Iron Yard, I worked together with a back end student as part of a team consisting a project manager, designer, and the client. WarmUp is an Indianapolis startup with an existing product that subscribes 30+ commercial and individual users, to include such as Northwestern Mutual (Indiana), Ever Effect, and Insperity. WarmUp, at it’s core, is a productivity app for sales and recruiter professionals that seeks to create a quicker, easier referral process. For this project, I was tasked with rebuilding the front end of the web app using React.js to add in additional features. I also built the first iteration of a mobile app (iOS) with React Native, which will be deployed and released to the App Store for immediate use." screenshot1="/img/screenshotwarmup.png" alt="Warm Up" screenshot2="/img/screenshotwarmupmobile.png" screenshot3="/img/screenshotwarmupmobile.png"  link="https://github.com/nathancarpenter03?tab=repositories"/>
            <WorkSampleRight title="To Do App:" stack="Javascript, Node, Express, PostgreSQL" description="This is a full stack application I built with vanilla Javascript with Moments.js, Pikaday.js, and Bootstrap on the front end. Node.js, Express.js, PostgreSQL, and Knex.js come together to power the back end. The user is able to create new tasks with due dates which are sorted by category, mark tasks completed, and view completed items." screenshot="img/screenshottodo.png" alt="To Do" link="https://github.com/nathancarpenter03/w6d4-assignment" />
            <WorkSampleLeft title="Search Box and Results App:" stack="Javascript, Bootstrap" description="This project required me to recreate the Etsy search results page using HTML, CSS, and Javascript. This consistted of working with the Document Object Model as well. It also required a AJAX call to Etsy's API and a function to create and display each result using object oriented programming." screenshot1="/img/screenshotetsy.png" link="https://github.com/nathancarpenter03/w5d2-assignment"/>
            <Social />
        </div>
    )
  }
}

export default Work;
