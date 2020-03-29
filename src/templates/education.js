import React from 'react';
import { graphql } from 'gatsby';

export default (props) => {
    console.log('props.data :', props.data);
    return (
        <div>
            <header>
                <h2>{props.data.educacionJson.title}</h2>
            </header>
        </div>
    );
}

export const query = graphql`
query ($slug: String ) {
    educacionJson (slug: { eq: $slug }) {
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
