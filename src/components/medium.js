//https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz
import React, { useState, useEffect } from 'react';
import Posts from './posts';
import Post from './post';

export default () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const key = "posts";
        let myPosts = sessionStorage.getItem(key);

        if (myPosts) {
            myPosts = JSON.parse(myPosts);
            return setPosts(myPosts);
        }

        async function getMediumPosts() {
            const endpoint = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz";

            myPosts = await fetch(endpoint).then(r => r.json());
            sessionStorage.setItem(key, JSON.stringify(myPosts.items));

            setPosts(myPosts.items);
        }
        getMediumPosts();
    }, []);

    return (
        <section className="my-12 max-w-4xl mx-auto">
            <Posts
                data={posts}
                card={Post}
                title={"Mis Publicaciones en Medium"}
            />
        </section>
    );
};
