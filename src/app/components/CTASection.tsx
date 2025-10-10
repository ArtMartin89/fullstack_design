export default function CTASection() {
  return (
    <section className="section" style={{
      background: 'linear-gradient(135deg, var(--primary-base) 0%, #1C7CED 100%)',
      color: 'var(--white)',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          lineHeight: 1.2,
          color: 'var(--white)',
          marginBottom: '2rem'
        }}>
          ОСТАВИТЬ ЗАЯВКУ
        </h1>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}>
          <a 
            href="/chat"
            className="btn-primary"
            style={{
              backgroundColor: 'var(--white)',
              color: 'var(--primary-base)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 600
            }}
          >
            <span>ЗАДАТЬ ВОПРОС</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </a>
          
          <a 
            href="https://t.me/artmartinv" 
            target="_blank"
            className="btn-primary"
            style={{
              backgroundColor: 'var(--white)',
              color: 'var(--primary-base)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 600
            }}
          >
            <span>ЗАКАЗАТЬ</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </a>
          
          <a 
            href="/chat"
            className="btn-secondary"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--white)',
              border: '2px solid var(--white)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 600
            }}
          >
            <span>ДЕМО</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
