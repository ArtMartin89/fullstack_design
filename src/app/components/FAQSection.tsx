'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Что именно вы автоматизируете с помощью ИИ?",
      answer: "Мы автоматизируем рутинные и трудозатратные процессы: обработку заявок, заполнение документов, работу с данными, клиентскую поддержку, маркетинг и многое другое. Всё зависит от задач вашего бизнеса."
    },
    {
      question: "Чем ИИ лучше обычной автоматизации?",
      answer: "ИИ не просто следует чётким инструкциям, как обычный скрипт, — он способен принимать решения, учиться и адаптироваться. Общаясь с клиентами он способен воспринимать контекст и давать ответы, часто неотличимые от человеческих. Это особенно полезно в нестандартных ситуациях или при работе с текстами, изображениями, голосом."
    },
    {
      question: "Как быстро появится результат после внедрения?",
      answer: "Первый эффект бизнес обычно чувствует уже через 1–2 недели: снижается нагрузка на сотрудников, ускоряются процессы, появляются новые возможности для масштабирования."
    },
    {
      question: "Это не слишком сложно для моего бизнеса?",
      answer: "Нет. Наша задача — сделать всё просто и понятно. Мы берем на себя всю техническую часть: от анализа до настройки и сопровождения. Вам не нужно разбираться в ИИ — достаточно понимать свои задачи."
    },
    {
      question: "А если у меня нет чётких задач — вы поможете их сформулировать?",
      answer: "Конечно. Мы проводим аудит процессов, выявляем точки роста и подсказываем, что можно улучшить с помощью ИИ. Это бесплатный этап перед началом работы."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" style={{
      backgroundColor: 'var(--light-gray)'
    }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2>Частые вопросы</h2>
        </div>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{
              backgroundColor: 'var(--white)',
              borderRadius: '0.75rem',
              marginBottom: '1rem',
              boxShadow: 'var(--shadow-card)',
              overflow: 'hidden'
            }}>
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  border: 'none',
                  backgroundColor: 'transparent',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--light-gray)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span>{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: 'var(--primary-base)'
                  }}
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </button>
              
              {openIndex === index && (
                <div style={{
                  padding: '0 1.5rem 1.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  borderTop: '1px solid var(--border-divider)'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
