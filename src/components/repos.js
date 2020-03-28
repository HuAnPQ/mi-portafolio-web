import React, { useState, useEffect } from 'react';
//import Repos from '../data/repos_codigofacilito';
import Repo from '../components/repo';

export default () => {

    const [Repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);

    useEffect(() => {
        const key = "repos";
        let myRepos = sessionStorage.getItem(key);

        if (myRepos) {
            myRepos = JSON.parse(myRepos);
            
            setReposCount(myRepos.length);

            myRepos = myRepos.slice(1, 13);
            return setRepos(myRepos);
        }

        async function fetchRepos() {
            const endpoint = "https://api.github.com/users/codigofacilito/repos"; //HuAnPQ

            myRepos = await fetch(endpoint).then(r => r.json());
            sessionStorage.setItem(key, JSON.stringify(myRepos));

            setReposCount(myRepos.length);

            myRepos = myRepos.slice(1, 13);
            setRepos(myRepos);
        }
        fetchRepos();
    }, []);


    return (
        <div className="max-w-4xl mx-auto my-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
                <p>Colaboración y contribucion de código</p>
            </header>
            <ul className="repos-list">
                {
                    Repos.map((repo) => {
                        return <Repo repo={repo} key={repo.id} />
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/HuAnPQ"
                    className="btn" target="_blank" rel="noopener noreferrer"        
                >
                    Ver más en GitHub ({reposCount})
                </a>
            </div>
        </div>
    )
};
