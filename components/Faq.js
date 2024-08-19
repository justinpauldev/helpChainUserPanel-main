'use client';
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';

const faqData = [
  {
    id: 1,
    title: 'What is the purpose of this platform?',
    desc: 'Our platform connects donors, volunteers, and fundraisers using blockchain technology to ensure transparency and efficiency. It aims to empower individuals and organizations by facilitating donations, volunteer opportunities, and support for various causes.',
  },
  {
    id: 2,
    title: 'How does blockchain technology benefit the donation process?',
    desc: 'Blockchain technology ensures transparency and accountability by providing a secure and immutable record of all transactions. This means donors can track their contributions and see exactly how funds are used, increasing trust and credibility.',
  },
  {
    id: 3,
    title: 'How can I get involved as a volunteer?',
    desc: 'To become a volunteer, simply sign up on our website, browse available events and opportunities, and register for the ones that interest you. You’ll be able to manage your volunteer activities and track your impact through your account.',
  },
  {
    id: 4,
    title: 'How can I create or support a fund on the platform?',
    desc: 'Creating or supporting a fund involves submitting a request through our platform. Fund organizers can provide details about their cause and funding needs, while supporters can donate directly to these funds. All transactions are tracked via blockchain for transparency.',
  },
  {
    id: 5,
    title:
      'What happens if I encounter issues with my donation or volunteer registration?',
    desc: 'If you experience any issues, please contact our support team through the contact form on our website or email us directly. We’re committed to resolving any problems quickly and efficiently to ensure a smooth experience for all users',
  },
];
const Faq = () => {
  const [active, setActive] = useState(1);
  return (
    <Accordion
      defaultActiveKey="collaps-1"
      className="accordion tf__faq_accordion"
      id="accordionExample01"
    >
      {faqData.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <h2 className="accordion-header" id="headingOne">
            <Accordion.Toggle
              className={`accordion-button ${
                faq.id == active ? '' : 'collapsed'
              }`}
              as="button"
              eventKey={`collaps-${faq.id}`}
              onClick={() => setActive(faq.id == active ? 0 : faq.id)}
            >
              {faq.title}
            </Accordion.Toggle>
          </h2>
          <Accordion.Collapse
            eventKey={`collaps-${faq.id}`}
            className="accordion-collapse"
          >
            <div className="accordion-body">
              <p>{faq.desc}</p>
            </div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
export default Faq;

const faq2Data = [
  {
    id: 1,
    title: 'Vote for the funds / cause depening on your linking',
    desc: 'Every month new funds will be added and people can vote for the cause they like.',
  },
  {
    id: 2,
    title:
      'The highest Voted fund will automatically get the required amount from the fund amount pool.',
    desc: 'Get your thoughts to paper faster with our step-by-step AI copywriter.',
  },
  {
    id: 3,
    title:
      'If you want to volunteer for causes, you can Signup as volunteer and help others',
    desc: 'Get your thoughts to paper faster with our step-by-step AI copywriter.',
  },
];
export const Faq2 = () => {
  const [active, setActive] = useState(1);
  return (
    <Accordion
      defaultActiveKey="collapse-1"
      className="accordion"
      id="accordionExample"
    >
      {faq2Data.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <h2 className="accordion-header" id="headingOne01">
            <Accordion.Toggle
              as={'button'}
              className={`accordion-button tf__process_accordion_btn ${
                faq.id == active ? '' : 'collapsed'
              }`}
              eventKey={`collapse-${faq.id}`}
              onClick={() => setActive(faq.id == active ? 0 : faq.id)}
            >
              <span>{faq.id}</span>
              {faq.title}
            </Accordion.Toggle>
          </h2>
          <Accordion.Collapse
            eventKey={`collapse-${faq.id}`}
            className={`accordion-collapse`}
            aria-labelledby="headingOne01"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>{faq.desc}</p>
              <a href="#" className="tf__common_btn tf__accrodian_link">
                Lets Vote
                <i className="fa-regular fa-arrow-right-long" />
              </a>
            </div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
