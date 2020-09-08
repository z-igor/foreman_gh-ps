import React from 'react';
import mcss from './About.module.css';

const About = (props) => {
    console.log('about');
    return (
        <main className={mcss.body}>
            <h1>О сервисе</h1>
            <div className={mcss.content}>
                <p>Сервис/идея выглядит интересно, нужно конечно доработать многое.</p>
                <p>Целая гора работы.</p>
            </div>
        </main>
    );
};

export default About;
