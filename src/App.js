import Gym from './assets/Gym.jpg';
import GymN from './assets/GymN.jpg';
import GymF from './assets/GymF.jpg';
import GymB from './assets/GymB.jpg';
import GymS from './assets/GymS.jpg';
import GymH from './assets/GymH.jpg';
import GymL from './assets/GymL.jpg';
import GymG from './assets/GymG.jpg';
import GymO from './assets/GymO.jpg';
import GymZ from './assets/GymZ.jpg';
import React, { useState } from 'react';

const buttonStyle = {
    background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
    color: '#fff',
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.3s'
  };// App.js - مع الصور بالطريقة الصحيحة

// استيراد الصور (حذف GymP.jpg فقط وإبقاء GymS.jpg)

// ===== مكون الهيدر =====
const Header = ({ currentPage, setCurrentPage }) => {
  const headerStyle = {
    background: 'rgba(0, 0, 0, 0.9)',
    padding: '1rem 0',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    backdropFilter: 'blur(10px)'
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#ff6b35',
    cursor: 'pointer'
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0
  };

  const navLinkStyle = {
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'color 0.3s'
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div style={logoStyle} onClick={() => setCurrentPage('home')}>
          FitTrainer
        </div>
        <ul style={navLinksStyle}>
          {['home', 'about', 'programs', 'testimonials', 'contact'].map(page => (
            <li key={page}>
              <div 
                style={{
                  ...navLinkStyle, 
                  color: currentPage === page ? '#ff6b35' : '#ff6b35' // برتقالي كما طلبت
                }}
                onClick={() => setCurrentPage(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </div>
            </li>
          ))}
        </ul>
        <button 
          style={buttonStyle}
          onClick={() => setCurrentPage('contact')}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Start Training Now
        </button>
      </nav>
    </header>
  );
};

// ===== مكون الصفحة الرئيسية =====
const Home = ({ setCurrentPage }) => {
  const heroStyle = {
    height: '100vh',
    backgroundImage: `url(${Gym})`, // الطريقة الصحيحة لإضافة الصورة
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    position: 'relative'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1
  };

  const contentStyle = {
    maxWidth: '800px',
    padding: '0 2rem',
    zIndex: 2,
    position: 'relative'
  };

  const titleStyle = {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
  };

  const buttonStyle = {
    background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1.1rem',
    transition: 'transform 0.3s',
    boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)'
  };

  return (
    <section style={heroStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Start Your Journey to Better Fitness</h1>
        <p style={subtitleStyle}>
          Transform your body and mind with professional guidance from a certified trainer
        </p>
        <button 
          style={buttonStyle}
          onClick={() => setCurrentPage('contact')}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Book Your Program
        </button>
      </div>
    </section>
  );
};

// ===== مكون صفحة من أنا =====
const About = () => {
  const sectionStyle = {
    padding: '5rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#333',
    fontWeight: 'bold'
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '3rem',
    alignItems: 'center'
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
  };

  const textStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '2rem',
    color: '#555'
  };

  const statsStyle = {
    display: 'flex',
    gap: '2rem',
    marginTop: '2rem'
  };

  const statItemStyle = {
    textAlign: 'center',
    padding: '1rem',
    background: '#f8f9fa',
    borderRadius: '10px',
    flex: 1
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>About Me</h2>
      <div style={containerStyle}>
        {/* صورة المدرب بالطريقة الصحيحة */}
        <img 
          src={GymN} 
          alt="Personal Trainer" 
          style={imageStyle} 
        />
        <div>
          <p style={textStyle}>
            Welcome to my fitness journey! I'm a certified personal trainer with over 8 years of experience 
            helping people transform their lives through fitness. My philosophy is simple: every body is 
            different, and every journey is unique.
          </p>
          <p style={textStyle}>
            I specialize in creating personalized workout plans and nutrition guidance that fit your 
            lifestyle and goals. Whether you're looking to build muscle, lose weight, or simply live 
            a healthier lifestyle, I'm here to guide you every step of the way with science-based methods.
          </p>
          <p style={textStyle}>
            My approach combines proven fitness techniques with motivational coaching to help you 
            achieve sustainable results that last a lifetime.
          </p>
          
          <div style={statsStyle}>
            <div style={statItemStyle}>
              <div style={{fontSize: '2rem', color: '#ff6b35', marginBottom: '0.5rem'}}>🏆</div>
              <h3 style={{margin: '0.5rem 0', color: '#333'}}>Certified</h3>
              <p style={{margin: 0, color: '#666'}}>NASM & ACSM</p>
            </div>
            <div style={statItemStyle}>
              <div style={{fontSize: '2rem', color: '#ff6b35', marginBottom: '0.5rem'}}>👥</div>
              <h3 style={{margin: '0.5rem 0', color: '#333'}}>500+</h3>
              <p style={{margin: 0, color: '#666'}}>Happy Clients</p>
            </div>
            <div style={statItemStyle}>
              <div style={{fontSize: '2rem', color: '#ff6b35', marginBottom: '0.5rem'}}>💪</div>
              <h3 style={{margin: '0.5rem 0', color: '#333'}}>8 Years</h3>
              <p style={{margin: 0, color: '#666'}}>Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ===== مكون صفحة البرامج =====
const Programs = ({ setCurrentPage }) => {
  const sectionStyle = {
    padding: '5rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#333',
    fontWeight: 'bold'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  };

  const cardStyle = {
    background: '#fff',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer'
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '1.5rem'
  };

  const buttonStyle = {
    background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
    color: '#fff',
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'transform 0.3s'
  };

  // البرامج مع الصور (مع إضافة GymS مرة أخرى)
  const programs = [
    {
      title: 'Personal Training',
      icon: '👤',
      description: 'One-on-one personalized training sessions designed to meet your specific fitness goals with maximum results and individual attention.',
      image: GymF
    },
    {
      title: 'Nutrition Plans',
      icon: '🍎',
      description: 'Custom meal plans and nutritional guidance to fuel your body properly and optimize your fitness journey for lasting results.',
      image: GymB
    },
    {
      title: 'Online Training',
      icon: '💻',
      description: 'Remote coaching and comprehensive workout programs that you can follow from anywhere, anytime with full support.',
      image: GymS // إضافة GymS مرة أخرى
    }
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Programs & Services</h2>
      <div style={gridStyle}>
        {programs.map((program, index) => (
          <div 
            key={index} 
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
          >
            {/* استخدام الطريقة الصحيحة للصور */}
            <img 
              src={program.image} 
              alt={program.title} 
              style={imageStyle} 
            />
            <div style={contentStyle}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                <span style={{fontSize: '1.5rem', marginRight: '0.5rem', color: '#ff6b35'}}>
                  {program.icon}
                </span>
                <h3 style={{fontSize: '1.5rem', color: '#333', margin: 0}}>{program.title}</h3>
              </div>
              <p style={{color: '#666', marginBottom: '1.5rem', lineHeight: '1.6'}}>
                {program.description}
              </p>
              <button 
                style={buttonStyle}
                onClick={() => setCurrentPage('contact')}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ===== مكون صفحة آراء العملاء - تصميم جديد =====
const Testimonials = () => {
  const containerStyle = {
    background: '#f8f9fa',
    padding: '5rem 2rem',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#333',
    fontWeight: 'bold'
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '3rem',
    color: '#ff6b35',
    fontWeight: 'bold'
  };

  const imagesContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    maxWidth: '800px',
    margin: '0 auto',
    flexWrap: 'wrap'
  };

  const imageBoxStyle = {
    width: '180px',
    height: '180px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    border: '3px solid #ff6b35'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const clientsData = [
    { image: GymH, name: "Sarah's Transformation" },
    { image: GymG, name: "Mike's Journey" },
    { image: GymO, name: "Lisa's Success" },
    { image: GymZ, name: "David's Results" }
  ];

  return (
    <section style={containerStyle}>
      <h2 style={titleStyle}>Client Testimonials</h2>
      
      <h3 style={subtitleStyle}>How They Were & How They Became</h3>
      
      <div style={imagesContainerStyle}>
        {clientsData.map((client, index) => (
          <div 
            key={index}
            style={imageBoxStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 107, 53, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            title={client.name}
          >
            <img 
              src={client.image} 
              alt={client.name}
              style={imageStyle}
            />
          </div>
        ))}
      </div>

      <div style={{marginTop: '4rem'}}>
        <div style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{color: '#ffd700', marginBottom: '1rem', fontSize: '1.5rem'}}>
            {[...Array(4)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p style={{
            fontSize: '1.2rem',
            fontStyle: 'italic',
            marginBottom: '1rem',
            color: '#555',
            lineHeight: '1.6'
          }}>
            "These amazing transformations speak for themselves! Our clients have achieved incredible results 
            through dedication, proper guidance, and consistent training. Your transformation could be next!"
          </p>
          <h4 style={{color: '#333', marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold'}}>
            Professional Fitness Trainer
          </h4>
          <p style={{color: '#666', margin: 0, fontWeight: 'bold'}}>
            Helping people transform their lives
          </p>
        </div>
      </div>
      
      <div style={{marginTop: '4rem'}}>
        <p style={{fontSize: '1.3rem', color: '#666', marginBottom: '1.5rem', fontWeight: 'bold'}}>
          Ready to start your own transformation journey?
        </p>
        <button 
          style={{
            background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
            color: '#fff',
            padding: '1.2rem 2.5rem',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'transform 0.3s',
            boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)'
          }}
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Get Started Today
        </button>
      </div>
    </section>
  );
};

// ===== مكون صفحة التواصل =====
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({name: '', email: '', goal: '', message: ''});
  };

  const sectionStyle = {
    backgroundImage: `url(${GymL})`, // الطريقة الصحيحة للخلفية
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative',
    padding: '5rem 2rem',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    margin: '0 auto',
    color: '#fff',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '3rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
  };

  const formStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '2rem',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left'
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '1.5rem',
    color:'black',
    boxSizing: 'border-box'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };

  const buttonStyle = {
    background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '100%',
    marginBottom: '2rem',
    transition: 'transform 0.3s'
  };

  const whatsappStyle = {
    background: '#25d366',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '25px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'transform 0.3s'
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={titleStyle}>Get Started Today</h2>
        <div style={formStyle}>
          <div>
            <label style={labelStyle}>Full Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter your full name"
            />
            
            <label style={labelStyle}>Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter your email"
            />
            
            <label style={labelStyle}>Fitness Goal</label>
            <select 
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select your goal</option>
              <option value="build-muscle">Build Muscle</option>
              <option value="lose-weight">Lose Weight</option>
              <option value="general-fitness">General Fitness</option>
              <option value="athletic-performance">Athletic Performance</option>
            </select>
            
            <label style={labelStyle}>Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="Tell me about your fitness goals..."
            />
            
            <button 
              onClick={handleSubmit}
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Send Message
            </button>
          </div>
          
          <div>
            <p style={{marginBottom: '1.5rem', fontSize: '1.1rem'}}>
              Or contact me directly:
            </p>
            <a 
              href="https://wa.me/353871234567" 
              style={whatsappStyle}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              <span style={{fontSize: '1.2rem'}}>📱</span>
              WhatsApp Chat
            </a>
            
            <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff'}}>
                <span style={{fontSize: '1.2rem'}}>📧</span>
                <span>trainer@fittrainer.com</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff'}}>
                <span style={{fontSize: '1.2rem'}}>📍</span>
                <span>Dublin, Ireland</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ===== مكون الفوتر =====
const Footer = ({ setCurrentPage }) => {
  const footerStyle = {
    background: '#1a1a1a',
    color: '#fff',
    padding: '3rem 2rem 1rem',
    textAlign: 'center'
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const socialStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem'
  };

  const linksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div style={socialStyle}>
          <span style={{fontSize: '2rem', cursor: 'pointer', transition: 'color 0.3s'}} 
                onMouseOver={(e) => e.target.style.color = '#ff6b35'}
                onMouseOut={(e) => e.target.style.color = '#fff'}>📷</span>
          <span style={{fontSize: '2rem', cursor: 'pointer', transition: 'color 0.3s'}} 
                onMouseOver={(e) => e.target.style.color = '#ff6b35'}
                onMouseOut={(e) => e.target.style.color = '#fff'}>📘</span>
          <span style={{fontSize: '2rem', cursor: 'pointer', transition: 'color 0.3s'}} 
                onMouseOver={(e) => e.target.style.color = '#ff6b35'}
                onMouseOut={(e) => e.target.style.color = '#fff'}>🎥</span>
        </div>
        <div style={linksStyle}>
          <span style={{color: '#ccc', cursor: 'pointer', transition: 'color 0.3s'}} 
                onClick={() => setCurrentPage('home')}
                onMouseOver={(e) => e.target.style.color = '#ff6b35'}
                onMouseOut={(e) => e.target.style.color = '#ccc'}>Home</span>
          <span style={{color: '#ccc', cursor: 'pointer', transition: 'color 0.3s'}} 
                onClick={() => setCurrentPage('programs')}
                onMouseOver={(e) => e.target.style.color = '#ff6b35'}
                onMouseOut={(e) => e.target.style.color = '#ccc'}>Programs</span>
          <span style={{color: '#ccc', cursor: 'pointer', transition: 'color 0.3s'}} 
                onClick={() => setCurrentPage('contact')}
                onMouseOver={(e) => e.target.style.color = '#ff6b35'}
                onMouseOut={(e) => e.target.style.color = '#ccc'}>Contact</span>
        </div>
        <p style={{color: '#999', fontSize: '0.9rem', margin: 0}}>
          © 2025 FitTrainer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// ===== المكون الرئيسي للتطبيق =====
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const appStyle = {
    fontFamily: "'Arial', sans-serif",
    margin: 0,
    padding: 0,
    lineHeight: 1.6,
    color: '#333'
  };

  const mainStyle = {
    marginTop: '80px'
  };

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home': 
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about': 
        return <About />;
      case 'programs': 
        return <Programs setCurrentPage={setCurrentPage} />;
      case 'testimonials': 
        return <Testimonials />;
      case 'contact': 
        return <Contact />;
      default: 
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div style={appStyle}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={mainStyle}>
        {renderCurrentPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;