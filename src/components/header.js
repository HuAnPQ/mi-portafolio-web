import React from 'react';
import ilustracion from '../imgs/testing-and-qa-outsourcing.svg';

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center">
            <div className="flex-1">
                <h1>Hola! Soy Hugo</h1>
                <p>QA Testing Tecnico - TTA(Produbanco)</p>
            </div>
            <img src={ilustracion} alt="Imagen de QA Testing"></img>
        </div>
    </header>
);
