import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './CustomBackButton.module.css';
const CustomBackButton = (props) => {
    return (
        <Button variant="primary" className={styles.custombackbutton} onClick={props.prevClickHandle}>
          <FontAwesomeIcon icon={faChevronLeft} /> 이전
        </Button>
      );
    }

export default CustomBackButton;