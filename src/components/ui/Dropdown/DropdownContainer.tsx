import React, { useState } from 'react';
import Dropdown from './Dropdown';

interface DropdownContainerProps {
  items: string[];
  placeholder?: string;
  onItemSelect?: (item: string) => void;
}

const DropdownContainer: React.FC<DropdownContainerProps> = ({
  items,
  onItemSelect,
  placeholder = 'Выберите элемент',
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (onItemSelect != undefined) onItemSelect(item);
  };

  return (
    <div>
      <Dropdown
        items={items}
        selectedItem={selectedItem}
        onItemSelect={handleSelectItem}
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
        placeholder={placeholder}
      />
    </div>
  );
};

export default DropdownContainer;
