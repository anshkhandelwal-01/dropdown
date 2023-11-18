import './index.css';

export default function Dropdown({options, isHovered, handleMouseEnter, handleMouseLeave}){
return(
    // Main Body
    <div className="dropdown">
    <h2>Should you use a dropdown?</h2>
    {/* Dropdown Body */}
    <div className='options'>
    <select onMouseOver={handleMouseEnter}>
    <option selected hidden disabled>Select</option>
    </select>
    {isHovered && <>
    {/* Mapping over the options array to display options */}
    {options.map((option, index)=>
        <option key={index} onClick={handleMouseLeave}>{option}</option>)}
        </>}
    </div>
    </div>
)
} 