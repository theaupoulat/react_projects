import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import './index.css';
import App from './App';

const options = {
    processor: [
        {
            name:
                "Processeur Intel Core i7 hexacœur de 9e génération à 2,6 GHz (Turbo Boost jusqu’à 4,5 GHz)",
            price: 0
        },
        {
            name:
                "Processeur Intel Core i9 8 cœurs de 9e génération à 2,4 GHz (Turbo Boost jusqu’à 5 GHz)",
            price: 360
        }
    ],
    memory: [
        { name: "16 Go de mémoire DDR4 à 2 400 MHz", price: 0 },
        { name: "32 Go de mémoire DDR4 à 2 400 MHz", price: 480 }
    ],
    gpu: [
        { name: "Radeon Pro 555X avec 4 Go de mémoire GDDR5", price: 0 },
        { name: "Radeon Pro 560X avec 4 Go de mémoire GDDR5", price: 120 }
    ],
    storage: [
        { name: "SSD de 256 Go", price: 0 },
        { name: "SSD de 512 Go", price: 240 },
        { name: "SSD de 1 To", price: 480 },
        { name: "SSD de 2 To", price: 960 },
        { name: "SSD de 4 To", price: 1920 }
    ]
};


ReactDOM.render(<App options={options} />, document.getElementById('root'));

