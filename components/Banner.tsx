import React from 'react'
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import {BiDownArrow} from 'react-icons/bi';

function Banner() {
    return (
        <section className="mt-12 md:mt-16 place-items-center text-center">
            <div className="before:absolute before:h-[200px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-500 after:via-green-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <p className='text-4xl md:text-9xl font-bold'>Maker Magic</p>
                <p className='text-xl md:text-4xl mt-8'>Ven a descubrir a maxia do Geocaching</p>
            </div>
            <div className="mt-8 md:mt-16 flex flex-col md:flex-row md:justify-center md:space-x-6">
                <div
                    className="label"
                >
                    <FaCalendarAlt className="mr-2 text-[#02874d]"/>
                    <p className="md:text-xl font-semibold">10 Setembro</p>
                </div>
                <div
                    className="label mt-2 md:mt-0"
                >
                    <FaMapMarkerAlt className="mr-2 text-[#02874d]"/>
                    <p className="md:text-xl font-semibold">Área Recreativa da Gracia</p>
                </div>
            </div>
            <div className='mt-16 mb-8 md:mt-36 md:text-2xl flex flex-col md:flex-row justify-center md:space-x-28'>
                <div className="mb-8 md:p-4 flex flex-col mb-2">
                    <h3 className="text-3xl font-bold text-left text-green-500">Expón</h3>
                    <p className="text-left mt-2">Trae as tuas caixas</p>
                </div>
                <div className="mb-8 md:p-4 flex flex-col mb-2">
                <h3 className="text-3xl font-bold text-left text-green-500">Xoga</h3>
                <p className="text-left mt-2">Atopa as caixas camufladas</p>
                </div>
                <div className="mb-8 md:p-4 flex flex-col mb-2">
                    <h3 className="text-3xl font-bold  text-left text-green-500">Crea</h3>
                    <p className="text-left mt-2">Constrúe o teu caché</p>
                </div>
            </div>
        </section>
    )
}

export default Banner