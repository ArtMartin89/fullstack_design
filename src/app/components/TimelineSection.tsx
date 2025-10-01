export default function TimelineSection() {
  const timelineSteps = [
    {
      duration: "1-3 часа",
      title: "Выявляем проблемные точки",
      description: "Вместе анализируем ваш бизнес и выявляем те места, где автоматизация необходима в первую очередь. Как правило это либо повторяющиеся рутинные задачи, либо области, где \"нехватает рук\".",
      reverse: true
    },
    {
      duration: "1-3 дня",
      title: "Разбиваем на этапы и конкретизируем",
      description: "Определяем очередность проработки проблемных зон, какие инструменты для этого нужны, какую информацию необходимо собрать для начала работы, собираем и структурируем эту информацию.",
      reverse: false
    },
    {
      duration: "1-2 дня",
      title: "Первая \"демо\" версия",
      description: "На основе собранной информации и согласованного ТЗ делаем первую версию автоматизации.",
      reverse: true
    },
    {
      duration: "1-5 дней",
      title: "Тестируем первую версию сами",
      description: "Мы с вашей командой сами тестируем первую версию, чтобы найти неочевидные ошибки, которые не учли в первоначальном ТЗ. Чем больше правок от вас на этом этапе, тем более качественной будет автоматизация на \"чистовике\".",
      reverse: false
    },
    {
      duration: "1-2 месяца",
      title: "Отладка в реальной работе",
      description: "Запускаем автоматизацию в работу, но продолжаем собирать обратную связь и корректировать работу. Как правило на этом этапе все уже работает стабильно и мы отлавливаем скорее нетипичные ситуации, докручиваем более оптимальные варианты, проводим a/b-тесты для повышения эффективности.",
      reverse: true
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2>Порядок внедрения</h2>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            marginTop: '1rem'
          }}>
            (на примере чат-бота для обработки обращений)
          </h3>
        </div>

        <div className="timeline-mobile" style={{
          position: 'relative',
          maxWidth: '100%',
          margin: '0 auto'
        }}>
          {/* Timeline line */}
          <div className="timeline-line" style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '4px',
            backgroundColor: 'var(--primary-base)',
            transform: 'translateX(-50%)',
            borderRadius: '2px'
          }} />

          {timelineSteps.map((step, index) => (
            <div key={index} className="timeline-item" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '2rem',
              position: 'relative',
              flexDirection: step.reverse ? 'row-reverse' : 'row'
            }}>
              {/* Timeline dot */}
              <div className="timeline-dot" style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '20px',
                height: '20px',
                backgroundColor: 'var(--primary-base)',
                borderRadius: '50%',
                border: '4px solid var(--white)',
                boxShadow: '0 0 0 2px var(--primary-base)',
                zIndex: 2
              }} />

              {/* Content - full width of half */}
              <div className="timeline-content" style={{
                width: 'calc(50% - 20px)',
                padding: step.reverse ? '0 0 0 2rem' : '0 2rem 0 0'
              }}>
                <div className="card" style={{
                  padding: '2rem',
                  position: 'relative',
                  width: '100%'
                }}>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--primary-base)',
                    marginBottom: '0.5rem'
                  }}>
                    {step.duration}
                  </div>
                  
                  <h4 style={{
                    color: 'var(--text-primary)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    marginBottom: '1rem'
                  }}>
                    {step.title}
                  </h4>
                  
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Empty space for alignment */}
              <div style={{ width: 'calc(50% - 20px)' }} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
