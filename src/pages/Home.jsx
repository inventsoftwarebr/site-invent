import Hero from '../components/Hero'
import ClientsCarousel from '../components/ClientsCarousel'
import Solutions from '../components/Solutions'
import SapAward from '../components/SapAward'
import Numbers from '../components/Numbers'
import Segments from '../components/Segments'
import HowItWorks from '../components/HowItWorks'
import CTA from '../components/CTA'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Invent Software – Soluções complementares ao seu ERP</title>
        <meta name="description" content="Sistemas de Gestão Fiscal, Bancária, Contratual e de RH integrados ao SAP® Business One. Tricampeã Partner of the Year SAP." />
      </Helmet>
      
      <Hero />
      <ClientsCarousel />
      <Solutions />
      <SapAward />
      <Numbers />
      <Segments />
      <HowItWorks />
      <CTA />
    </>
  )
}
