'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="hero-section" style={{
      background: 'linear-gradient(135deg, #4D9CFD 0%, #6BB6FF 100%)',
      position: 'relative',
      padding: '6rem 0',
      color: 'var(--white)',
      overflow: 'hidden'
    }}>
      {/* Background overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--hero-overlay)',
        zIndex: 1
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '4rem',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Left content */}
          <div className="hero-text">
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 800,
              lineHeight: 1.2,
              color: 'var(--white)',
              marginBottom: '1.5rem'
            }}>
              Автоматизация бизнес-процессов
            </h1>
            
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'var(--white)',
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Стоит дешевле, чем сотрудник - работает лучше
            </h3>
            
            <div style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'var(--white)',
              marginBottom: '2rem'
            }}>
              <p style={{ marginBottom: '1rem' }}>Примеры автоматизаций:</p>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                marginLeft: '1rem'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>• обработка заявок в чатах</li>
                <li style={{ marginBottom: '0.5rem' }}>• бронирование специалистов/времени/ресурсов</li>
                <li style={{ marginBottom: '0.5rem' }}>• формирование документов</li>
                <li style={{ marginBottom: '0.5rem' }}>• обучение новых сотрудников</li>
                <li style={{ marginBottom: '0.5rem' }}>• (тех)поддержка</li>
                <li style={{ marginBottom: '0.5rem' }}>• аналитика данных и формирование отчетов</li>
                <li style={{ marginBottom: '0.5rem' }}>• анализ соблюдения сотрудниками регламентов и скриптов</li>
              </ul>
            </div>
            
            <div className="hero-cta">
              <a 
                href="http://t.me/AutoSapiens_bot" 
                target="_blank" 
                className="btn-primary"
                style={{
                  backgroundColor: 'var(--white)',
                  color: 'var(--primary-base)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}
              >
                <span>ИИ в Телеграм</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right form */}
          <div className="hero-form" style={{
            backgroundColor: 'var(--white)',
            borderRadius: '0.75rem',
            padding: '2rem',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              color: 'var(--text-primary)',
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Получить консультацию
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <input
                  type="text"
                  name="company"
                  placeholder="Название компании"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <button 
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                Получить консультацию
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </section>
  );
}
