import React from 'react';

export default (props) => {
    const element = props.element;

    return (
        <div className="shadow p-4 bg-white mr-4 my-4 rounded flex-shrink-0" style={{ width: "300px" }}>
            <h4 className="font-bold h-8 overflow-y-hidden">{element.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-green-200 text-green-700 p-2 radius mt-8">
                    Progreso: {element.progress}
                </span>
            </div>
        </div>
    );
};
