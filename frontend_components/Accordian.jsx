import React, { useState } from 'react';
import './Accordian.css';
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: '1.How do I book a flight?',
      answer: 'To book a flight, simply go to our homepage, enter your departure and destination cities, select your travel dates, and click on the search button. You will then be presented with a list of available flights.'
    },
    {
      question: '2.Can I change my reservation?',
      answer: 'Yes, you can change your reservation depending on the fare rules associated with your ticket. Please visit our manage booking section or contact our customer support for assistance.'
    },
    {
      question: '3.What is the baggage allowance?',
      answer: 'Baggage allowances vary depending on your fare type and destination. Please refer to our baggage policy page for detailed information.'
    }
  ];

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
