'use client';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--dark-gray)',
      color: 'var(--white)',
      padding: '3rem 0 1rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Logo and Company Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--primary-base)',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: 'var(--white)'
              }}>
                AS
              </div>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--white)'
              }}>
                AutoSapiens
              </span>
            </div>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              lineHeight: 1.6
            }}>
              Автоматизация бизнес-процессов с помощью искусственного интеллекта
            </p>
          </div>

          {/* Address */}
          <div>
            <h5 style={{
              color: 'var(--white)',
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '1rem'
            }}>
              Адрес
            </h5>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              lineHeight: 1.6
            }}>
              Улица<br />
              Город, индекс
            </p>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{
              color: 'var(--white)',
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '1rem'
            }}>
              Контакты
            </h5>
            <div style={{
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              lineHeight: 1.6
            }}>
              <p>Email: info@autosapiens.by</p>
              <p>Телефон: +375 29 7055015</p>
              <p>Telegram: @artmartinv</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h5 style={{
              color: 'var(--white)',
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '1rem'
            }}>
              Следите за нами
            </h5>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a 
                href="http://t.me/AutoSapiens_bot" 
                target="_blank"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--primary-base)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-base)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div style={{
          borderTop: '1px solid var(--border-divider)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            margin: 0
          }}>
            © Copyright 2025 AutoSapiens - All Rights Reserved
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            <a 
              href="#" 
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                textDecoration: 'none'
              }}
            >
              Политика конфиденциальности
            </a>
            <a 
              href="#" 
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                textDecoration: 'none'
              }}
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
