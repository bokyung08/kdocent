import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './CustomBackButton.module.css';
const SelectButton = (props) => {
    return (
        <Button variant="primary" className={styles.custombackbutton} onClick={props.handleClick}>
          <FontAwesomeIcon icon={faCheck} /> 선택
        </Button>
      );
    }

export default SelectButton;