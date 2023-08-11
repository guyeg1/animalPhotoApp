import  Footer from '../molecules/Footer';
import  Header from '../molecules/Header';
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const CustomSelect = ({ onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('https://cat-fact.herokuapp.com/facts');
        const data = await response.json();
        const factTexts = data.map((fact) => fact.text);
        setOptions(factTexts);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleInputChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleSelectOption = (value) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const handleDeleteOption = (value) => {
    const updatedOptions = options.filter((option) => option !== value);
    setOptions(updatedOptions);
    setSelectedValue('');
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const updatedOptions = Array.from(options);
    const [removed] = updatedOptions.splice(result.source.index, 1);
    updatedOptions.splice(result.destination.index, 0, removed);
    setOptions(updatedOptions);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className='w-screen h-screen'>
      <Header/>
    <div className="custom-select h-12 flex items-center flex-col">
      <input className='text-xl text-center w-96 border-2 border-orange-300' type="text" value={filterValue} onChange={handleInputChange} placeholder="Search A Fact"/>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="options">
          {(provided) => (
            <div className="options-container border-2 border-orange-300 w-96 text-xl px-4" {...provided.droppableProps} ref={provided.innerRef}>
              {filteredOptions.map((option, index) => (
                <Draggable key={option} draggableId={option} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="option pt-3 hover:underline">
                      <span onClick={() => handleSelectOption(option)}>
                        {option}
                      </span>
                      <button onClick={() => handleDeleteOption(option)}>
                        🗑️
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
    <Footer/>
    </div>
  );
};

export default CustomSelect;