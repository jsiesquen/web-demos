//import React, {Fragment} from 'react';
import React from 'react'
import './globals.css'
import Header from './component/header'
import Switch from './component/switch'
import CardList from './component/cardlist'
import Overview from './component/overview'

export default function App() {
  return (
    <>
      <Header>
        <Switch />
      </Header>
      <CardList />
      <Overview />
    </>
  );
}