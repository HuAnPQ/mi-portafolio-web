import React, { useState, useEffect } from 'react';
//import Repos from '../data/repos_codigofacilito';
import Repo from '../components/repo';

export default () => {

    const [Repos, setRepos] = useState([]);

    useEffect( () => {
        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/codigofacilito/repos");
            //https://api.github.com/users/HuAnPQ/repos
            let myRepos = await response.json();
            setRepos(myRepos);
        }
        fetchRepos();
    }, []);


    return (
        <div className="max-w-4xl mx-auto">
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
        </div>
    )
};
