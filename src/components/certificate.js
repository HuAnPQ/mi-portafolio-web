import React from 'react';

export default (props) => {
    const element = props.element;

    return (
        <div className="shadow p-4 bg-white mr-4 rounded">
            <h4 className="font-bold">{element.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-green-200 text-green-700 p-2 radius">
                    Calificacíon: {element.score}
                </span>
            </div>
        </div>
    );
};
