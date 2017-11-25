/*
 * The main component for the home page.
 */

import React, {Component} from 'react';

import {routeData} from '../../data/Routes';
import {Blurb, Heading, Link, MailLink} from '../../Components';

Link.registerPreloadResources('/', () => [
    require('./me.png'),
]);

export default class HomePage extends Component {

    render() {
        const urls = {
            iitkgp: "https://www.iitkgp.ac.in",
            resume: require("./resume.pdf"),
            github: "https://github.com/ravibansal",
        };
        return <div>
            <Heading level={1}>Hey!</Heading>
            <Blurb
                image={require("./me.png")}
                imagePosition={Blurb.IMAGE_RIGHT}
            >
                <p>
                    I’m pursuing a computer science major at <Link href={urls.iitkgp}>IIT Kharagpur</Link>.
                    I&nbsp;love computer science because it is a perfect blend of math, logic, and critical thinking into a powerful toolset that I&nbsp;can use to solve real-world problems.
                    You’ve landed on my personal website and portfolio.
                </p>
                <p>
                    Helpful info and links:
                </p>
                <ul>
                    <li>
                        Pick up a copy of my <Link href={urls.resume}><strong>résumé!</strong></Link>
                    </li>
                    <li>
                        Feel free to check out <Link href={urls.github}><strong>my GitHub profile!</strong></Link>
                    </li>
                    <li>
                        If you’d like to contact me, <MailLink><strong>request my email!</strong></MailLink>
                    </li>
                </ul>
            </Blurb>
            <Heading level={2}>What do you want to know?</Heading>
            <ul>
                <li>
                    I am a machine learning enthusiast interested in the application of deep learning in real world problems.
                </li>
                <li>
                    My hobbies include playing chess and the game of Table Tennis.
                </li>
                <li>
                    Here are some more pages with information about me:
                    <ul>
                        {routeData.map(route =>
                            !route.isIndex && route.navbarTitle &&
                                <li key={route.path}>
                                    <Link to={route.path}>
                                        {route.navbarTitle}
                                    </Link>
                                </li>)}
                    </ul>
                </li>
            </ul>
        </div>;
    }

}
