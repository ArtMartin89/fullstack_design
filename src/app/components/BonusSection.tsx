export default function BonusSection() {
  return (
    <section className="section" style={{
      backgroundColor: 'var(--light-gray)',
      padding: '4rem 0'
    }}>
      <div className="container" style={{
        maxWidth: '960px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.25rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          color: 'var(--text-primary)'
        }}>
          Бонус — воспользуйся сервисом для улучшения своего промпта
        </h2>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: 1.6,
          marginBottom: '2rem',
          color: 'var(--text-secondary)'
        }}>
          Переходи в Prompter, чтобы получить подсказки по формулировке запросов, протестировать идеи и ускорить работу с нейросетями.
        </p>
        <a
          href="/prompter"
          className="btn-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.85rem 2.25rem',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.05rem'
          }}
        >
          <span>Перейти в Prompter</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 12h12.17l-3.59 3.59L15 17l5-5-5-5-1.41 1.41L17.17 11H5z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}


