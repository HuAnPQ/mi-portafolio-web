import React from 'react';

export default (props) => {
    const element = props.element;

    return (
        <div className="shadow bg-white mr-4 rounded flex-shrink-0" style={{ width: "300px" }}>
            <header className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${element.thumbnail})` }}
            ></header>
            <div className="p-8">
                <h4 className="font-bold h-16 overflow-y-hidden">{element.title}</h4>
                <div className="text-center mt-8">
                    <a href={element.link} className="btn" target="_blank" rel="noopener noreferrer">
                        Leer
                    </a>
                </div>
            </div>
        </div>
    );
};
