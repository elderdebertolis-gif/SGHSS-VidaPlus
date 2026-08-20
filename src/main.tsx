import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-700.css'
import '@fontsource/poppins/latin-600.css'
import '@fontsource/poppins/latin-700.css'
import './index.css'
import App from './App.tsx'

const brandAssetUrl = (path: string) => `url("${import.meta.env.BASE_URL}brand/${path}")`

const brandBackgrounds = {
  '--brand-bg-clinical': brandAssetUrl('backgrounds/Desktop_2560x1440/04_padrao_medico_ondas.png'),
  '--brand-bg-clinical-mobile': brandAssetUrl('backgrounds/Mobile_1440x2560/04_padrao_medico_ondas.png'),
  '--brand-bg-brand': brandAssetUrl('backgrounds/Desktop_2560x1440/05_gradiente_marca.png'),
  '--brand-bg-brand-mobile': brandAssetUrl('backgrounds/Mobile_1440x2560/05_gradiente_marca.png'),
  '--brand-bg-sidebar': brandAssetUrl('backgrounds/Desktop_2560x1440/06_gradiente_menu_lateral.png'),
  '--brand-bg-telemedicine': brandAssetUrl('backgrounds/Desktop_2560x1440/03_gradiente_suave_azul_turquesa.png'),
} as const

Object.entries(brandBackgrounds).forEach(([property, value]) => {
  document.documentElement.style.setProperty(property, value)
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
