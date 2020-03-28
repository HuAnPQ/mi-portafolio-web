import React from 'react';
import { useStaticQuery, grap, graphql } from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
            data {
              certificates {
                title
                score
                code
              }
            }
          }
    }`);

    //console.log('data :', data);
    return (
        <section>
            <div className="mt-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">
                        Mis certificados online en CódigoFacilito
                    </h2>
                    <div className="flex mt-6">
                        {
                            data.codigofacilitoJson.data.certificates.map(certificado => (
                                <div className="shadow p-4 bg-white mr-4">
                                    <h4 className="font-bold">{certificado.title}</h4>
                                    <div className="text-center">
                                        <span className="inline-block bg-green-200 text-green-700 p-2 radius">
                                            Calificacíon: {certificado.score}
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );

};
