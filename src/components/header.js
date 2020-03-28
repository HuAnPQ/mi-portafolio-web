import React from 'react';
import ilustracion from '../imgs/testing-and-qa-outsourcing.svg';
import Form from './contact.form';

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-green-700 text-6xl">
                        Hola! Soy Hugo
                    </h1>
                    <p className="text-xl font-light">QA Testing Técnico - TTA (Produbanco)</p>
                </div>
                <img src={ilustracion} alt="Imagen de QA Testing"
                    style={{ height: "300px", width: "500px" }}
                ></img>
            </div>
            <div>
                <Form />
            </div>
        </div>

    </header>
);
