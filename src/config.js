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
            id: 'https://drive.google.com/drive/folders/148xla20sXd87q23tXjf8WFIvgJr4pA2x',
            name: 'Videojuegos',
            icon: 'Controller',
            image: 'https://lh3.googleusercontent.com/u/0/d/1OGx3wZL3zP0flnAh5DWlZJcJnECrOWsF=s400'
        },
        // {
        //     id: 'https://drive.google.com/drive/folders/1b8YPoDIsFPYK_DQV20yYrgB_A8LePKDP',
        //     name: 'Llaveros',
        //     icon: 'Key',
        //     image: 'https://lh3.googleusercontent.com/u/0/d/11cDVrtab46rvY4aqiIZxwJmkaHsi_FzU=s400'
        // },
    ]
};

export const CONTACT_CONFIG = {
    WHATSAPP: import.meta.env.VITE_WHATSAPP_NUMBER || '521234567890',
    FACEBOOK_PAGE: import.meta.env.VITE_FACEBOOK_PAGE || 'your.page.username', // Can be numeric ID or username
    MESSAGE: import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hola, me interesa este producto del catálogo: '
};

export const BANNER_CONFIG = {
    HERO_IMAGE: 'https://lh3.googleusercontent.com/u/0/d/11cDVrtab46rvY4aqiIZxwJmkaHsi_FzU=s400'
};

export const APP_CONFIG = {
    LOGO: `${import.meta.env.BASE_URL}artifex_lunaris_circular.svg`,
    LOGO_SM: `${import.meta.env.BASE_URL}artifex_lunaris_circular.svg`,
    LOGO_NOMBRE: `${import.meta.env.BASE_URL}artifex_lunaris_letras_simple.svg`,
    LOGO_SIMPLE: `${import.meta.env.BASE_URL}artifex_lunaris_simple_sm.svg`
};


