import React from 'react';
import { useStaticQuery, grap, graphql } from 'gatsby';
import Posts from './posts';
import Certificate from './certificate';
import Course from './course';

export default () => {
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
            data {
              certificates {
                title
                score
                code
              }
              courses {
                title
                progress
                url
              }
            }
          }
    }`);

    //console.log('data :', data);
    return (
        <section className="my-12">
            <Posts
                data={data.codigofacilitoJson.data.certificates}
                card={Certificate}
                title={"Mis certificados online en CódigoFacilito"}
            />

                <Posts
                    data={data.codigofacilitoJson.data.courses}
                    card={Course}
                    title={"Mis cursos en CódigoFacilito"}
                />
        </section >
    );

};
