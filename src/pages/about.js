import React from 'react';

const AboutPage = () => (
    <div>
        <h1>about</h1>
        <p>Music and website created by Dylan Bussone.</p>
        <img width="350" src={`${process.env.ASSET_PREFIX}/muffin.jpg`} />
        <ul>
            {[
                { href: 'https://www.youtube.com/user/dbuss1music', text: 'YouTube' },
                {
                    href:
                        'https://open.spotify.com/artist/1Op9vSnBgavICOjzdFpM3X?si=4uOZ7rQ2SbmjE2nJwjM7Sg',
                    text: 'Spotify',
                },
                { href: 'https://soundcloud.com/dylanbussone', text: 'SoundCloud' },
                { href: 'https://dylonious.bandcamp.com/', text: 'Bandcamp' },
                { href: 'https://github.com/dylanbussone', text: 'GitHub' },
            ].map(({ href, text }) => (
                <li key={href}>
                    <a target="_blank" rel="noopener noreferrer" href={href}>
                        {text}
                    </a>
                </li>
            ))}
        </ul>
        <style jsx>
            {`
                div {
                    text-align: center;
                }
                h1 {
                    font-size: 48px;
                }
                ul {
                    list-style-type: none;
                }
                ul li {
                    margin: 1rem;
                }
                ul li a {
                    color: white;
                    text-decoration: none;
                }
                img {
                    margin: 1rem 0;
                    border-radius: 8px;
                    border: 1px solid #222;
                }
            `}
        </style>
    </div>
);

export default AboutPage;
