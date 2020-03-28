import React, { Fragment } from 'react';

export default (props) => {
    return (
        <Fragment>
            <h2 className="text-3xl font-bold text-center">
                {props.title}
            </h2>
            <div className="max-w-4xl mx-auto overflow-x-auto">
                <div className="flex mt-6">
                    {
                        props.data.map(element => (
                            <props.card element={element} />
                        ))
                    }
                </div>
            </div>
        </Fragment>
    );
};
