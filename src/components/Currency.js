import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleChange = value => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
      };

      function getCurrencyText(value) {
        switch(value) {
            case '$':
              return "$ Dollar";
            case '€':
                return "€ Euro";
            case '£':
                return "£ Pound";
            case '₹':
                return "₹ Ruppee";
            default:
              return "";
          }
        }

        return(
            <DropdownButton id="dropdown-custom-1" title={`Currency: ${getCurrencyText(currency)}`} variant="success" onSelect={eventKey => handleChange(eventKey)}>
              <Dropdown.Item eventKey="$" className="dropdown-item">{getCurrencyText('$')}</Dropdown.Item>
              <Dropdown.Item eventKey="£" className="dropdown-item">{getCurrencyText('£')}</Dropdown.Item>
              <Dropdown.Item eventKey="€" className="dropdown-item">{getCurrencyText('€')}</Dropdown.Item>
              <Dropdown.Item eventKey="₹" className="dropdown-item">{getCurrencyText('₹')}</Dropdown.Item>
            </DropdownButton>
      );
};

export default Currency;