import React, { useState } from "react";

import './Calculadora.module.css';

function Calculadora() {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultado, setResultado] = useState("");
    
    const calcularIMC = (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    
    if (!altura || !peso) {
        setResultado("Por favor, preencha todos os campos.");
        return;
    }
    
    const alturaEmMetros = altura / 100; // Converter cm para metros
    const imc = (peso / (alturaEmMetros ** 2)).toFixed(2); // Cálculo do IMC com duas casas decimais
    
    let nivelClass = "";
    
        if (imc < 16) {
            nivelClass = "Magreza Grave";
        } else if (imc >= 16 && imc < 17) {
            nivelClass = "Magreza Moderada";
        } else if (imc >= 17 && imc < 18.5) {
            nivelClass = "Magreza Leve";
        } else if (imc >= 18.5 && imc <= 25){
            nivelClass = "Saudável";
        } else if (imc >= 25 && imc <=30) {
            nivelClass = "Sobrepeso"
        } else if (imc >= 30 && imc <= 35) {
            nivelClass = "Obesidade Grau 1"
        } else if (imc >= 35 && imc <= 40) {
            nivelClass = "Obesidade Grau 2"
        } else {
            nivelClass = "Obesidade Grau 3"
        }
            
        setResultado(`Seu IMC é ${imc} (${nivelClass}).`);
        };
    
    return (
        <div className="formulario-container">
            <h1>Calculadora - IMC</h1>
        <form className="formulario" onSubmit={calcularIMC}>
            <label htmlFor="altura">Digite sua Altura (cm):</label>
                <input type="number" id="altura" placeholder="Ex: 174" value={altura} onChange={(e) => setAltura(e.target.value)} />
            <label htmlFor="peso">Digite seu Peso (kg):</label>
                <input type="number" id="peso" placeholder="Ex: 60" value={peso} onChange={(e) => setPeso(e.target.value)} />
            <button type="submit">
            Calcular
            </button>
        </form>
        {resultado && <p className="resultado">{resultado}</p>}
    </div>
    );
}

export default Calculadora;