import React from 'react';
import { graphql, Link } from 'gatsby';
import EdNav from '../components/education-nav';

export default (props) => {
    const pageData = props.data.educacionJson;
    return (
        <div>
            <header className="py-12 border-green-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="uppercase underline text-blue-500">Regresar al inicio</Link>
                    <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>
            <ul>
                {
                    pageData.items.map((item, index) => (
                        <li className="bg-white shadow mt-4 mx-4 flex" key="{index}">
                            <p className="vertical-text">{pageData.slug}</p>
                            <div className="flex items-center flex-1 p-8">
                                <div className="flex-1">
                                    <h3>{item.name}</h3>
                                    {
                                        item.degree && <span className="inline-block p-2 radius bg-green-100 text-green-700">
                                            {item.degree}
                                        </span>
                                    }
                                    {
                                        item.url && <a href={item.url} target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn inline-block mt-4">
                                            Ver mas
                                        </a>
                                    }
                                    {
                                        item.description && <p className="inline-block pt-2 text-green-600">
                                            {item.description}
                                        </p>
                                    }
                                    {
                                        item.place && <p className="block pt-1 text-green-400 text-xs">
                                            {item.place}
                                        </p>
                                    }
                                </div>
                                <div className="inline-block">
                                    <span className="inline-block p-2 text-2xl bg-green-100 text-green-700">
                                        {item.score}
                                        {item.date}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <EdNav />
        </div>
    );
}

export const query = graphql`
query ($slug: String ) {
    educacionJson (slug: { eq: $slug }) {
        slug
        title
        description
        items {
            name
            description
            place
            date
            url
            degree
            score
        }
    }
}`;
