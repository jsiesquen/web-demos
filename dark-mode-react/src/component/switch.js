import React, { useRef } from 'react'
import './switch.css'

function Switch({setDarkMode, setChecked, checked}) {
    const ref = useRef(null)
    
  	function handleDarkModeChange() {
		// 1 method: event.target.checked
		// 2 method: ref.current.checked; useRef using hook
        setChecked(ref.current.checked)
        setDarkMode(ref.current.checked)
  	}
    
    return (
            <div className="dark-mode">
                <p className="dark-mode-title">Dark Mode</p>
                <input ref={ref} 
                        onChange={handleDarkModeChange} 
                        checked={checked}
                        type="checkbox" 
                        className="checkbox" 
                        name="checkbox" id="checkbox" />
                <label className="switch" htmlFor="checkbox"></label>
            </div>
        );
}

export default Switch