import React, { Component } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import WorkHeader from './WorkHeader';
import WorkSampleLeft from './WorkSampleLeft';
import WorkSampleRight from './WorkSampleRight';


class Work extends Component {

  render() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <WorkHeader/>
            <WorkSampleLeft title="Warm Up:" stack="Javascript, React, Bootstrap" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." screenshot="/img/screenshot1.png" alt="Warm Up" link="Click to see on Github"/>
            <WorkSampleRight title="To Do App:" stack="Javascript, Node, Express, PostgreSQL" description="This is a full stack application I built with vanilla Javascript with Moments.js, Pikaday.js, and Bootstrap on the front end. Node.js, Express.js, PostgreSQL, and Knex.js come together to power the back end. The user is able to create new tasks with due dates which are sorted by category, mark tasks completed, and view completed items." screenshot="img/screenshot2.png" alt="To Do" link="Click to see on Github" />
            <WorkSampleLeft title="Toadly Messenger:" stack="Javascript, Bootstrap" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." screenshot="/img/screenshot1.png" alt="Warm Up" link="Click to see on Github"/>
        </div>
    )
  }
}

export default Work;
