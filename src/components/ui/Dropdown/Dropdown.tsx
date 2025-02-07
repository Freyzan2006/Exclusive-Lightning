import React from 'react';

import css from './Dropdown.module.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface DropdownProps {
  items: string[];
  selectedItem: string | null;
  onItemSelect: (item: string) => void;
  placeholder?: string;
  isOpen: boolean;
  toggleDropdown: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  selectedItem,
  onItemSelect,
  placeholder,
  isOpen,
  toggleDropdown,
}) => {
  return (
    <div className={css.dropdown}>
      <button onClick={toggleDropdown} className={css.dropdown__toggle}>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}{' '}
        {selectedItem || placeholder}
      </button>
      {isOpen && (
        <ul className={css.dropdown__menu}>
          {items.map((item, index) => (
            <li key={index} onClick={() => onItemSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
