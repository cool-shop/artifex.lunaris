import { motion } from 'framer-motion';
import { ChevronLeft, ShoppingBag, Heart, Target, Star, Instagram, Facebook } from 'lucide-react';
import { APP_CONFIG } from '../config';

const BrandInfo = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-cat-dark overflow-y-auto"
        >
            {/* Elegant Header */}
            <div className="sticky top-0 z-20 bg-cat-darkest/30 backdrop-blur-xl px-6 py-6 sm:px-12 flex items-center justify-between">
                <button
                    onClick={onClose}
                    className="w-12 h-12 bg-cat-light text-cat-contrast rounded-full flex items-center justify-center hover:bg-cat-contrast hover:text-cat-light active:scale-95 transition-all"
                >
                    <ChevronLeft size={24} />
                </button>
                <img src={APP_CONFIG.LOGO_NOMBRE} alt="artifex lunaris" className="w-60 h-auto flex items-center justify-center mx-auto transform" />
                <div className="w-12" /> {/* Spacer for centering */}
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12 sm:px-12">

                {/* Hero Section */}
                <div className="relative rounded-[3rem] overflow-hidden bg-cat-darkest/85 p-12 mb-16 text-center">
                    <div className="relative z-10">
                        <div className="">
                            <img src={APP_CONFIG.LOGO} alt="artifex lunaris" className="sm:w-48 sm:h-48 w-48 h-48 rounded-[8rem] flex items-center justify-center text-white shadow-2xl shadow-cat-dark/50 mx-auto mb-8 transform" />
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-black text-cat-contrast mb-6 uppercase">Detalle Extremo <br />en Miniatura</h1>
                        <p className="text-lg text-cat-light max-w-2xl mx-auto leading-relaxed font-medium">
                            Forjamos fantasía y coleccionables con la mayor definición. Cada miniatura está diseñada e impresa para capturar hasta el más mínimo detalle en resina premium.
                        </p>
                    </div>
                    {/* Decorative Blobs */}
                    <div className="absolute -top-10 -right-10 w-60 h-60 bg-cat-dark rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-cat-contrast/50 rounded-full blur-3xl" />
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-cat-darkest/50 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-16 h-16 bg-cat-light mx-auto text-[#FF0000] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-xl font-black text-cat-contrast mb-3 uppercase text-center">Curado Manual</h3>
                        <p className="text-cat-light/80 text-sm leading-relaxed text-justify">Cada miniatura se limpia, cura y procesa a mano para garantizar piezas limpias y listas para pintar.</p>
                    </div>

                    <div className="bg-cat-darkest/50 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-16 h-16 bg-cat-light mx-auto text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Target size={32} />
                        </div>
                        <h3 className="text-xl font-black text-cat-contrast mb-3 uppercase text">Ultra Definición</h3>
                        <p className="text-cat-light/80 text-sm leading-relaxed text-justify">Impresión en resina premium a resoluciones extremas de micras, logrando texturas y relieves nítidos.</p>
                    </div>

                    <div className="bg-cat-darkest/50 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-16 h-16 bg-cat-light mx-auto text-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Star size={32} />
                        </div>
                        <h3 className="text-xl font-black text-cat-contrast mb-3 uppercase text">Licencias Épicas</h3>
                        <p className="text-cat-light/80 text-sm leading-relaxed text-justify">Colaboramos con los mejores escultores y diseñadores 3D del mundo para ofrecerte modelos exclusivos.</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-16">
                    <section>
                        <h2 className="text-3xl font-black text-cat-contrast mb-8 uppercase flex items-center gap-4">
                            <span className="w-12 h-1 bg-cat-contrast rounded-full" /> Nuestra Pasión
                        </h2>
                        <div className="prose prose-lg text-cat-light/70 font-medium leading-relaxed max-w-none">
                            <p>
                                Artifex Lunaris nació del amor por los juegos de rol, la fantasía y los coleccionables. Lo que empezó como un pasatiempo buscando la miniatura perfecta para nuestras propias campañas, se convirtió en un taller de impresión 3D de alta gama dedicado a materializar figuras increíbles para pintores y jugadores exigentes.
                            </p>
                            <p className="mt-4">
                                Utilizamos resina ABS-like de alta resistencia para garantizar que tus figuras no solo tengan un nivel de detalle espectacular, sino que también resistan el uso continuo en mesa y el transporte a tus partidas.
                            </p>
                        </div>
                    </section>

                    {/* Social links / Contact */}
                    <section className="bg-cat-contrast/80 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl font-black text-center uppercase tracking-tighter mb-2">¡Únete a la Comunidad!</h2>
                            <p className="text-white/60 font-medium text-center">Síguenos para conocer nuevos lanzamientos, guías de pintura y procesos en el taller.</p>
                        </div>
                        <div className="flex gap-4">
                            {import.meta.env.VITE_INSTAGRAM_PAGE && <a href={`https://instagram.com/${import.meta.env.VITE_INSTAGRAM_PAGE}`} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-cat-darkest/10 hover:bg-cat-darkest/20 rounded-2xl flex items-center justify-center backdrop-blur-md transition-all">
                                <Instagram size={32} />
                            </a>}
                            {import.meta.env.VITE_FACEBOOK_PAGE && <a href={`https://facebook.com/${import.meta.env.VITE_FACEBOOK_PAGE}`} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-cat-darkest/10 hover:bg-cat-darkest/20 rounded-2xl flex items-center justify-center backdrop-blur-md transition-all">
                                <Facebook size={32} />
                            </a>}
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="mt-24 text-center pb-12">
                    <p className="text-slate-400 text-xs text-center font-black uppercase tracking-[0.5em] mb-4">Detalle Extremo en Cada Capa</p>
                    <p className="text-cat-dark text-sm text-center font-bold">© 2026 - Artifex Lunaris</p>
                </div>
            </div>
        </motion.div>
    );
};

export default BrandInfo;
