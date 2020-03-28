import React from 'react';

export default () => (
    <form className="mt-16 text-center">
        <label
            htmlFor="contact-content"
            className="block text-green-700 text-sm font-bold mb-2">
            Cuéntame de tu proyecto, el cual quieres mejorar:
        </label>
        <div className="flex shadow rounded bg-white border p-2">
            <textarea
                id="contact-content"
                name="contact-content"
                className="flex-1 py-2 px-3 text-green-700 focus:outline-none focus:shadow-outline"
            ></textarea>
            <button className="btn ml-4">Enviar</button>
        </div>
    </form>
);
