import React, { useState, useEffect } from 'react'
import Header from './header'
import CardList from './cardlist'
import Overview from './overview'
import Switch from './switch'

function Main() {
	const [darkMode, setDarkMode] = useState(false)
	const [checked, setChecked] = useState(false)
  	const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

    function changeMediaQuery(mediaquery) {
		setDarkMode(mediaquery.matches)
		setChecked(mediaquery.matches)
	}
    
    useEffect(() => {
        const mediaquery = window.matchMedia('(prefers-colors-scheme: dark)')
        mediaquery.addListener(changeMediaQuery)
			setDarkMode(mediaquery.matches)
			setChecked(mediaquery.matches)
    }, [])  // 2° param: When this component each rendering only

    return (
		<main className={mainClass}>
			<Header>
				<Switch 
					setDarkMode={setDarkMode} 
					setChecked={setChecked} 
					checked={checked} />
			</Header>
			<CardList />
			<Overview />
		</main>
    );
}

export default Main