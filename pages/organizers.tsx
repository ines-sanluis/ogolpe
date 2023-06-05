import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Organizers from '@/components/Organizers';
const organizers = () => {
    return (
    <div className="bg-black text-white font-mono flex min-h-screen flex-col items-center justify-between p-24">
        <Header />

        <Organizers />

        <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3.4 }}
        className="py-4 text-center mt-24"
        >
        <p>Non veñas só, trae as túas ideas, material e as propostas máis creativas e máxicas.</p>
        <p>Os asistentes aos eventos Magic Maker recibirán un recordatorio especial.</p> 
        <p className="text-sm mt-8">© 2023 OGolpe. All rights reserved.</p>
        </motion.footer>
    </div>
    );
};

export default organizers;
