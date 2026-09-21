export const APP_CONFIG = {
    NAME: 'Artifex Lunaris',
    SLOGAN: 'Detalle Extremo en Cada Capa',
    META_TITLE: 'Artifex Lunaris - Catálogo Exclusivo',
    META_DESCRIPTION: 'Catálogo de impresión 3D de alta gama y figuras para pintores y jugadores exigentes.',
    LOGO: `${import.meta.env.BASE_URL}artifex_lunaris_circular.svg`,
    LOGO_SM: `${import.meta.env.BASE_URL}artifex_lunaris_circular.svg`,
    LOGO_NOMBRE: `${import.meta.env.BASE_URL}artifex_lunaris_logo_horizontal.svg`,
    LOGO_SIMPLE: `${import.meta.env.BASE_URL}artifex_lunaris_simple_sm.svg`,
    FAVICON: `${import.meta.env.BASE_URL}artifex_lunaris_sm_logo.svg`
};

export const THEME_CONFIG = {
    colors: {
        darkest: '#1A0425',
        dark: '#320946',
        contrast: '#dd1155',
        light: '#fdfffc',
        contrastLight: '#F8B4CC',
        tealLight: '#1cd6d9',
        tealDark: '#0f7173',
    }
};

export const hexToRgbTuple = (hex) => {
    let cleanHex = hex.replace('#', '');
    if (cleanHex.length === 3) {
        cleanHex = cleanHex.split('').map(c => c + c).join('');
    }
    const num = parseInt(cleanHex, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `${r} ${g} ${b}`;
};

export const initTheme = () => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const colors = THEME_CONFIG.colors;
    Object.keys(colors).forEach(key => {
        const cssKey = `--color-cat-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        root.style.setProperty(cssKey, hexToRgbTuple(colors[key]));
    });
};

export const BRAND_TEXTS = {
    HERO: {
        title: '¡Únete a la Comunidad!',
        subtitle: 'Síguenos para conocer nuevos lanzamientos, guías de pintura y procesos en el taller.'
    },
    ABOUT: {
        title: 'Detalle Extremo en Miniatura',
        subtitle: 'Forjamos fantasía y coleccionables con la mayor definición. Cada miniatura está diseñada e impresa para capturar hasta el más mínimo detalle en resina premium.',
        cards: [
            {
                title: 'Curado Manual',
                description: 'Cada miniatura se limpia, cura y procesa a mano para garantizar piezas limpias y listas para pintar.'
            },
            {
                title: 'Ultra Definición',
                description: 'Impresión en resina premium a resoluciones extremas de micras, logrando texturas y relieves nítidos.'
            },
            {
                title: 'Licencias Épicas',
                description: 'Colaboramos con los mejores escultores y diseñadores 3D del mundo para ofrecerte modelos exclusivos.'
            }
        ],
        passionTitle: 'Nuestra Pasión',
        passionParagraphs: [
            'Artifex Lunaris nació del amor por pintar miniaturas, los juegos de rol, la fantasía y los coleccionables. Lo que empezó como un pasatiempo buscando la miniatura perfecta para pintar, se convirtió en un taller de impresión 3D de alta gama dedicado a materializar figuras increíbles para pintores y jugadores exigentes.',
            'Utilizamos resina ABS-like de alta resistencia para garantizar que tus figuras no solo tengan un nivel de detalle espectacular, sino que también resistan el uso continuo en mesa y el transporte a tus partidas.'
        ],
        footerSlogan: 'Detalle Extremo en Cada Capa',
        copyright: `© ${new Date().getFullYear()} - ${APP_CONFIG.NAME}`
    }
};

export const GOOGLE_DRIVE_CONFIG = {
    API_KEY: import.meta.env.VITE_GOOGLE_DRIVE_API_KEY || 'YOUR_GOOGLE_DRIVE_API_KEY',
    FOLDERS: [
        {
            id: 'all',
            name: 'Todos',
            icon: 'LayoutGrid',
            image: 'https://lh3.googleusercontent.com/u/0/d/1X9_E3aFXWfLUL4-luEnNPPrg-3IrOHhx=s400'
        },
        {
            id: 'https://drive.google.com/drive/folders/17C46eQ0qYHPxdUGPn89UvQMpkAS2SMUq',
            name: 'Juegos de Guerra',
            icon: 'Helmet',
            image: 'https://lh3.googleusercontent.com/u/0/d/1Dk7r7WhMepgb4vT8-msw3ngryUyTas-n=s400'
        },
        {
            id: 'https://drive.google.com/drive/folders/148xla20sXd87q23tXjf8WFIvgJr4pA2x',
            name: 'Fantasía',
            icon: 'Clothes',
            image: 'https://lh3.googleusercontent.com/u/0/d/11cDVrtab46rvY4aqiIZxwJmkaHsi_FzU=s400'
        },
        {
            id: 'https://drive.google.com/drive/folders/1XyAlN20PN2LKBzs_PKPKLukCAxbJ5J9l',
            name: 'Videojuegos',
            icon: 'Controller',
            image: 'https://lh3.googleusercontent.com/u/0/d/1OGx3wZL3zP0flnAh5DWlZJcJnECrOWsF=s400'
        },
    ]
};

export const CONTACT_CONFIG = {
    WHATSAPP: import.meta.env.VITE_WHATSAPP_NUMBER || '',
    FACEBOOK_PAGE: import.meta.env.VITE_FACEBOOK_PAGE || 'your.page.username',
    MESSAGE: import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hola, me interesa este producto del catálogo: '
};

export const BANNER_CONFIG = {
    HERO_IMAGE: 'https://lh3.googleusercontent.com/u/0/d/11cDVrtab46rvY4aqiIZxwJmkaHsi_FzU=s400'
};
