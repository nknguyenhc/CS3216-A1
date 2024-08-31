import { useState } from 'react';
import chevronDown from '../../assets/images/chevron-down.svg';

type FaqItemType = {
  question: string;
  answer: string;
};

const faqData: FaqItemType[] = [
  {
    question: 'What is InternTwine?',
    answer:
      'InternTwine is an all-in-one platform to help you to find your dream internship, from start to finish.',
  },
  {
    question: 'Who is InternTwine for?',
    answer: 'InternTwine is for anyone looking for an internship.',
  },
  {
    question: 'Why should I use InternTwine?',
    answer:
      'InternTwine simplifies your intern search by providing a centralised hub to discover opportunities, manage applications, and track your progress effortlessly.',
  },
  {
    question: 'Is InternTwine free?',
    answer: 'Yes, InternTwine is free. Forever.',
  },
  {
    question: 'How does InternTwine recommend me jobs?',
    answer:
      'InternTwine uses a combination of advanced algorithms and personalised filters to recommend internships tailored to your unique profile. By analysing your skills, experience, job preferences, and application history, we match you with opportunities that align with your career goals.',
  },
];

const Faqs = (): JSX.Element => {
  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <FaqItem key={index} faq={faq} />
      ))}
    </div>
  );
};

const FaqItem = ({ faq }: { faq: FaqItemType }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-item-container">
        <div className="faq-question" onClick={toggleAccordion}>
          <h3>{faq.question}</h3>
          <div className="faq-question-chevron">
            <span className={isOpen ? 'closed' : 'closed display'}>
              <img src={chevronDown} alt="" />
            </span>
            <span className={isOpen ? 'open display' : 'open'}>
              <img src={chevronDown} alt="" />
            </span>
          </div>
        </div>
        <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
