import React, { useState } from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { orangeTextGradient } from '../animations/GlowingText';
import { blackGradient } from '../animations/StyleVars';

const Card = ({
  image, title, techList, description, link,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <CardWrapper className="card">
      <div className="image-wrapper h-100">
        <img src={image[1]} alt="" />
      </div>
      <div className="project-details rounded">
        <h2>{title}</h2>
        <h3 className="m-0 p-0 fs-3">Tech Stack</h3>
        <div className="d-flex flex-wrap gap-2 my-2">
          {techList.map((item) => (<div key={item} className="badge bg-info text-dark">{item}</div>))}
        </div>
        <p className="fs-6 my-2">{description}</p>
        <div className="d-flex gap-5 my-4">
          <Button variant="success" onClick={handleShow}>
            Launch demo modal
          </Button>
          <a href={link[1]} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary" type="button">See Source</button></a>
        </div>
        <Modal show={show} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title className="text-dark">
              {title}
              {' '}
              Preview
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {image.map((img, index) => (
              <img key={img} src={img} alt={`project-${index}`} />
            ))}
            <iframe className="w-100" title={title} src={link[0]} frameBorder="0" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </CardWrapper>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  techList: PropTypes.oneOf([]).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const CardWrapper = styled.div`
width: 80%;
display: flex;
flex-direction: row;
.image-wrapper {
  width: 35%;
  height: 80vh;
}

iframe {
    width: 100%;
    height: 70vh;
  }
  h2 {
    font-weight: 700;
    ${orangeTextGradient};
    text-align: center;
  }
  
  .project-details {
    width: 60%;
    margin: 2rem;
    ${blackGradient}
    padding: 1rem;
  }
  
  @media only screen and (max-width: 769px) {
    flex-direction: column !important;
    
    .project-details {
      width: 100%;
      margin: 1rem 0 0 0;
    }

    img {
      width: 100%;
      height: auto;
    }

    .image-wrapper {
      width: 100%;
      height: auto;
    }
  };

  @media only screen and (max-width: 426px) {
    button {
      padding: .2rem;
    }
  }
  `;

export default Card;
