import React, { useState, useEffect } from 'react';
import './sort_bar.scss';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const SortBar = () => {
  const [buttonLabel, setButtonLabel] = useState('Terbaru');

  useEffect(() => {
    setButtonLabel('Terbaru');
  }, []);

  return (
    <Dropdown as={ButtonGroup}>
      <Button id="btn-sort" variant="success">{buttonLabel}</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setButtonLabel('Terbaru')} href="#/action-1">Terbaru</Dropdown.Item>
        <Dropdown.Item onClick={() => setButtonLabel('Ulasan')} href="#/action-2">Ulasan</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortBar;
