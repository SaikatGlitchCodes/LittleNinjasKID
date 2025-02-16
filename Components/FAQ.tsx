import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  const FaqQueryObj = [
    {
      query: 'What is coding for kids?',
      ans: "Coding for kids is the process of teaching children how to write and understand computer programs. It helps develop problem-solving skills, logical thinking, and creativity by allowing kids to create their own apps, games, and websites."
    },
    {
      query: "How do I start my child coding?",
      ans: "You can start by introducing your child to beginner-friendly platforms like Scratch, Code.org, or Tynker. Enrolling them in online coding classes or using interactive tutorials can also make learning engaging and fun."
    },
    {
      query: "What is the right age to start coding?",
      ans: "Kids as young as 5-7 years old can start learning the basics of coding through visual programming languages like Scratch. More advanced languages like Python or JavaScript can be introduced around ages 10-12."
    },
    {
      query: "What is LittleNinjas?",
      ans: "LittleNinjas is an interactive coding program designed specifically for kids. It offers structured lessons, hands-on projects, and engaging activities to help children learn programming in a fun and effective way."
    },
    {
      query: "How do I register my child with LittleNinjas?",
      ans: "You can register your child by visiting our website, filling out the registration form, and selecting a suitable course. Our team will guide you through the enrollment process."
    },
    {
      query: "How are the classes conducted?",
      ans: "Classes are conducted online through live sessions with experienced instructors. Kids can interact, ask questions, and work on coding projects in a structured learning environment."
    },
    {
      query: "What happens if my child misses a session?",
      ans: "If a session is missed, we provide recorded classes for students to catch up. Additionally, our instructors are available for any clarifications through support channels."
    },
    {
      query: "How long is the coding program for?",
      ans: "The duration of the program depends on the course selected. We offer short-term workshops, 3-month foundational courses, and advanced year-long programs."
    },
    {
      query: "Who are the trainers at LittleNinjas?",
      ans: "Our trainers are experienced professionals in computer science and education. They are passionate about teaching and have expertise in child-friendly coding instruction."
    },
    {
      query: "Will this interfere with my child’s schooling?",
      ans: "No, our classes are designed to be flexible and can be scheduled after school hours or on weekends. The program is structured to complement your child's education without interfering with their schoolwork."
    }
  ];

  return (
    <div className='w-full h-full mx-auto my-4 md:p-10'>
      <div className='flex items-center justify-center w-full h-full mx-auto md:p-10'>
        <div className='w-full md:w-[90%] h-full md:p-10 flex flex-col items-center justify-start gap-y-10'>
          <h3 className='text-5xl font-bold leading-[54px] w-full text-center'>
            FAQs
          </h3>
          <Accordion className='flex flex-col w-full gap-10 md:scale-110'>
            {
              FaqQueryObj.map((obj, i) => (
                <Accordion.Item eventKey={`${i}`} key={obj.query}>
                  <Accordion.Header>{obj.query}</Accordion.Header>
                  <Accordion.Body>
                    {obj.ans}
                  </Accordion.Body>
                </Accordion.Item>
              ))
            }
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;