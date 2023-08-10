import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Title from '../../Title';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Please enter your name');
      isValid = false;
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError('Please enter your email');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (message.trim() === '') {
      setMessageError('Please enter a message');
      isValid = false;
    } else {
      setMessageError('');
    }

    return isValid;
  };

  useEffect(() => {
    const savedName = localStorage.getItem('contactName');
    const savedEmail = localStorage.getItem('contactEmail');
    const savedMessage = localStorage.getItem('contactMessage');

    if (savedName) {
      setName(savedName);
    }
    if (savedEmail) {
      setEmail(savedEmail);
    }
    if (savedMessage) {
      setMessage(savedMessage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactName', name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem('contactEmail', email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem('contactMessage', message);
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform your form submission here
    }
  };

  return (
    <ContactWrapper>
      <Title title="Contact Me" />
      <form onSubmit={handleSubmit} action="https://formspree.io/f/mzbwnrgy" method="POST" className="mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label w-100">
            Your Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="name"
              placeholder="Kakarot"
            />
            <div className="error">{nameError}</div>
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label w-100">
            Email address
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
            <div className="error">{emailError}</div>
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label w-100">
            Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
              id="message"
              rows="3"
              placeholder="I love coding on the beach..."
            />
            <div className="error">{messageError}</div>
          </label>
        </div>
        <input type="hidden" name="_gotcha" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    padding-top: 6rem;
    border-radius: 15rem 0 0 0;
    flex-direction: column;

    form {
        width: 80%;
    }
`;

export default Contact;
