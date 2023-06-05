import React from 'react'
import { motion } from 'framer-motion';

function Programa() {
    return (
        <div
        className="mt-24"
    >
        <h1
            className="text-6xl font-bold mb-16"
        >
            Programa
        </h1>
        <section className="container mx-auto mt-8 ">
        <div
            className='mb-16'
        > 
            <div className="text-2xl font-bold mb-2 flex flex-col md:flex-row md:space-x-6">
                <p className="bg-green-700 rounded p-2">Toda a mañá</p>
                <p className="border-2 border-green-700 rounded p-2 mt-2 md:mt-0">Exposición</p>
            </div>
            <p className="text-lg mt-8">Amosaranse distintas caixas de todo tipo, desde as máis sinxelas ata algunha caixa especial que require enxeño para abrila e conseguir o libro de rexistro ou para obter as coordenadas. Por suposto animámoste a que traias as túas creacións.</p>
        </div>

        <div
            className='mb-16'
        >
            <div className="mb-8">
                <div className="text-2xl font-bold mb-2 flex flex-col md:flex-row md:space-x-6">
                    <p className="bg-green-700 rounded p-2">11:30h</p>
                    <p className="border-2 border-green-700 rounded p-2 mt-2 md:mt-0">Recepción e firma no libro de rexistro</p>
                </div>
                <p className="text-lg mt-8">
                    Recepción e firma no libro de rexistro dos 'Creadores de Maxia'. Colocación das caixas
                    aportadas polos participantes para a exposición.
                </p>
            </div>
        </div>
        <div
            className='mb-16'
        >
            <div className="mb-8">
                <div className="text-2xl font-bold mb-2 flex flex-col md:flex-row md:space-x-6">
                    <p className="bg-green-700 rounded p-2">11:45h</p>
                    <p className="border-2 border-green-700 rounded p-2 mt-2 md:mt-0">Xogo, busca as caixas</p>
                </div>
                <p className="text-lg mt-8">
                    Antes de que cheguedes esconderemos algunhas caixas camufladas na área do evento para que as busques, vai ser difícil! Estas caixas non son cachés publicados, só é unha mostra de camuflaxes.
                </p>
            </div>
        </div>
        <div
            className='mb-16'
        >
            <div className="mb-8">
                <div className="text-2xl font-bold mb-2 flex flex-col md:flex-row md:space-x-6">
                    <p className="bg-green-700 rounded p-2">12:15h</p>
                    <p className="border-2 border-green-700 rounded p-2 mt-2 md:mt-0">Comezo dos talleres</p>
                </div>
                <h4 className="text-xl font-bold mb-2 mt-8">O primeiro caché</h4>
                <p className="text-lg">
                Se aínda non escondiches un caché, este será o momento perfecto para facelo. Seguiremos o proceso paso a paso para esconder o tipo máis sinxelo, un tradicional. Tamén haberá tempo para coñecer outros tipos de cachés que poidan interesarche. Ademais, proporcionarase información sobre contedores duradeiros e estancos, xa sexan reciclados ou adquiridos.
                </p>
                <h4 className="text-xl font-bold mb-2 mt-8">Camuflando caixas</h4>
                <p className="text-lg">
                Se aínda non escondiches un caché, este será o momento perfecto para facelo. Seguiremos o proceso paso a paso para esconder o tipo máis sinxelo, un tradicional. Tamén haberá tempo para coñecer outros tipos de cachés que poidan interesarche. Ademais, proporcionarase información sobre contedores duradeiros e estancos, xa sexan reciclados ou adquiridos.Nesta sección, amosaremos caixas que se confunden co entorno onde serán colocadas e explicaremos como se fixeron. Tamén intentaremos crear algunha caixa para mostrar o proceso. Ás veces, simplemente a elección dunha caixa axeitada para o lugar onde a vas agochar é abondo para que, aínda estando á vista, pase desapercibida. Iso tamén é unha creación máxica.
                </p>
            </div>
        </div>
        <div
        >
            <div className="mb-8">
                <div className="text-2xl font-bold mb-2 flex flex-col md:flex-row md:space-x-6">
                    <p className="bg-green-700 rounded p-2">14:15h</p>
                    <p className="border-2 border-green-700 rounded p-2 mt-2 md:mt-0">Finalización do evento</p>
                </div>
                <p className="text-lg mt-8">
                    Quen queira pode traer a comida e xantaremos na mesma área recreativa.
                </p>
            </div>
        </div>
        </section>
    </div> )
}

export default Programa