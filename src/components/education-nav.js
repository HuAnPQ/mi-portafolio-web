import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default (props) => {
    const data = useStaticQuery(graphql`
        {
            allEducacionJson{
                edges{
                    node{
                        slug
                        title
                        description
                    }
                }
            }
        }
    `);

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center">
                Conoce sobre mi formación educativa
            </h2>
            <nav className="flex justify-center mt-8">
                {
                    data.allEducacionJson.edges.map((element, index) => {
                        const { node } = element;
                        return (
                            <article className="flex-1 bg-white shadow m-4 max-w-sm p-4">
                                <header>
                                    <p className="font-bold leading-loose">{node.title}</p>
                                    <p className="font-light mt-1 h-16">{node.description}</p>
                                    <Link to={`/${node.slug}`} className="btn inline-block mt-4">
                                        Ir
                                    </Link>
                                </header>
                            </article>
                        );
                    })
                }
            </nav>
        </div>
    );
};
