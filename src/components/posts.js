import React from 'react';

export default (props) => {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center">
                {props.title}
            </h2>
            <div className="flex mt-6">
                {
                    props.data.map(element => (
                        <props.card element={element} />
                    ))
                }
            </div>
        </div>
    );
};
