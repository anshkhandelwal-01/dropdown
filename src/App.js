import './App.css';
import Dropdown from './Dropdown';
import { useState } from 'react';

function App() {

  // Array of dropdowns
  const options = ['Yes', 'No', 'Probably Yes', 'Probably No'];
  const [isHovered, setIsHovered] = useState(false);
  
  // Sets isHovered to true on hovering
  const handleMouseEnter = ()=>{
    setIsHovered(true);
  }

  // Sets isHovered to false on click on any dropdown option
  const handleMouseLeave = ()=>{
    setIsHovered(false);
  }
  
  return (
    // Dropdown component
    <Dropdown options={options} 
              isHovered={isHovered} 
              handleMouseEnter={handleMouseEnter} 
              handleMouseLeave={handleMouseLeave}/>
  );
}

export default App;
