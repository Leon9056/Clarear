import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Menu, Sparkles, ShieldCheck, Droplets, CarFront, Instagram, MessageCircle } from 'lucide-react';
import './styles.css';

const WHATSAPP_NUMBER = ''; // Preencha com DDI + DDD + número, somente dígitos. Ex.: 5535999999999
const waLink = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de conhecer os serviços da Clarear Estética Automotiva.')}`
  : 'https://wa.me/?text=' + encodeURIComponent('Olá! Gostaria de conhecer os serviços da Clarear Estética Automotiva.');

const services = [
  { n: '01', title: 'Cuidado exterior', text: 'Limpeza cuidadosa e atenção aos detalhes da pintura e dos acabamentos.', icon: Droplets },
  { n: '02', title: 'Detalhamento', text: 'Um olhar minucioso para valorizar cada superfície do seu veículo.', icon: Sparkles },
  { n: '03', title: 'Proteção e brilho', text: 'Tratamentos pensados para realçar a aparência e preservar o acabamento.', icon: ShieldCheck },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Clarear - início">
          <span className="brand-mark"><span /></span>
          <span className="brand-name">CLAREAR<small>ESTÉTICA AUTOMOTIVA</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu"><Menu size={22}/></button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#filosofia" onClick={() => setMenuOpen(false)}>A Clarear</a>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#galeria" onClick={() => setMenuOpen(false)}>Galeria</a>
          <a className="nav-cta" href={waLink} target="_blank" rel="noreferrer">Fale conosco <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-image" role="img" aria-label="Carro premium em estúdio de detalhamento automotivo" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-line"/> O cuidado aparece nos detalhes</p>
            <h1>Seu carro.<br/><em>Em outro nível.</em></h1>
            <p className="hero-copy">Estética automotiva com olhar criterioso, acabamento refinado e respeito por cada detalhe.</p>
            <div className="hero-actions">
              <a className="button button-light" href={waLink} target="_blank" rel="noreferrer">Agendar atendimento <ArrowUpRight size={17}/></a>
              <a className="text-link" href="#servicos">Conheça nosso trabalho <ArrowDownRight size={17}/></a>
            </div>
          </div>
          <div className="hero-index"><span>01</span><i/> CUIDADO • PRECISÃO • PRESENÇA</div>
          <div className="hero-side-note">CLAREAR / AUTOMOTIVE CARE</div>
        </section>

        <section className="intro section-wrap" id="filosofia">
          <div className="section-kicker"><span>01</span><span className="kicker-line"/> NOSSA ESSÊNCIA</div>
          <div className="intro-grid">
            <h2>Não é só limpeza.<br/><em>É cuidado em cada detalhe.</em></h2>
            <div className="intro-text">
              <p>A Clarear nasceu para quem percebe a diferença entre o básico e o bem-feito. Cada veículo recebe atenção, técnica e cuidado do primeiro ao último detalhe.</p>
              <a className="underlined-link" href={waLink} target="_blank" rel="noreferrer">Vamos cuidar do seu carro <ArrowUpRight size={16}/></a>
            </div>
          </div>
          <div className="values">
            <div><span className="value-icon"><Sparkles size={18}/></span><h3>Precisão</h3><p>Olhar atento para cada superfície.</p></div>
            <div><span className="value-icon"><ShieldCheck size={18}/></span><h3>Confiança</h3><p>Cuidado responsável com seu veículo.</p></div>
            <div><span className="value-icon"><CarFront size={18}/></span><h3>Excelência</h3><p>Compromisso com um resultado bem-feito.</p></div>
          </div>
        </section>

        <section className="services-section" id="servicos">
          <div className="section-wrap">
            <div className="section-kicker"><span>02</span><span className="kicker-line"/> O QUE FAZEMOS</div>
            <div className="section-heading">
              <h2>Cuidado pensado<br/><em>para o seu veículo.</em></h2>
              <p>Uma experiência de estética automotiva que valoriza o veículo sem abrir mão do cuidado.</p>
            </div>
            <div className="service-list">
              {services.map((service) => {
                const Icon = service.icon;
                return <article className="service-row" key={service.n}>
                  <span className="service-number">{service.n}</span>
                  <span className="service-icon"><Icon size={22}/></span>
                  <div className="service-info"><h3>{service.title}</h3><p>{service.text}</p></div>
                  <a href={waLink} target="_blank" rel="noreferrer" aria-label={`Consultar ${service.title}`} className="round-arrow"><ArrowUpRight size={18}/></a>
                </article>
              })}
            </div>
            <p className="placeholder-note">Os serviços específicos serão atualizados assim que a lista oficial for enviada.</p>
          </div>
        </section>

        <section className="gallery-section section-wrap" id="galeria">
          <div className="section-kicker"><span>03</span><span className="kicker-line"/> NOSSO OLHAR</div>
          <div className="section-heading gallery-heading">
            <h2>O resultado está<br/><em>nos detalhes.</em></h2>
            <p>Uma prévia visual do universo Clarear. Estas imagens são provisórias e serão substituídas pelas fotos reais da empresa.</p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-large"><img src="https://images.unsplash.com/photo-1607860108855-64acet0a0a1f?auto=format&fit=crop&w=1400&q=85" alt="Detalhamento automotivo em veículo escuro" loading="lazy"/><figcaption><span>01 / DETALHAMENTO</span><span>Precisão em cada linha</span></figcaption></figure>
            <figure><img src="https://images.unsplash.com/photo-1613214150384-1f7b0c7e7d8a?auto=format&fit=crop&w=900&q=85" alt="Carro esportivo com acabamento brilhante" loading="lazy"/><figcaption><span>02 / ACABAMENTO</span><span>Brilho com presença</span></figcaption></figure>
            <figure><img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=85" alt="Veículo premium em ambiente automotivo" loading="lazy"/><figcaption><span>03 / CUIDADO</span><span>Detalhes que se destacam</span></figcaption></figure>
          </div>
          <div className="image-disclaimer">IMAGENS ILUSTRATIVAS • SERÃO SUBSTITUÍDAS POR FOTOGRAFIAS DA CLAREAR</div>
        </section>

        <section className="contact-section">
          <div className="contact-image" />
          <div className="contact-content">
            <div className="section-kicker"><span>04</span><span className="kicker-line"/> O PRÓXIMO PASSO</div>
            <h2>Seu carro merece<br/><em>esse cuidado.</em></h2>
            <p>Fale com a Clarear e descubra a melhor opção para o seu veículo.</p>
            <a className="button button-light" href={waLink} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Conversar pelo WhatsApp <ArrowUpRight size={16}/></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark"><span /></span><span className="brand-name">CLAREAR<small>ESTÉTICA AUTOMOTIVA</small></span></a>
        <p>O cuidado aparece nos detalhes.</p>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Clarear Estética Automotiva</span><a href={waLink} target="_blank" rel="noreferrer">Entre em contato <ArrowUpRight size={14}/></a><span>Feito para destacar o que importa.</span></div>
      </footer>
      <a className="floating-whatsapp" href={waLink} target="_blank" rel="noreferrer" aria-label="Fale pelo WhatsApp"><MessageCircle size={22}/></a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);