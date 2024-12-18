"use client"

import React from 'react';
import "./globals.css";
import Head from 'next/head';

import PlayerList from './ui/PlayerList';

const initialItems = [
  { id: '1', name: 'Andy McNabb', rating: '5' },
  { id: '2', name: 'Chris Armstrong', rating: '4' },
  { id: '3', name: 'David Stirling', rating: '2' },
  { id: '4', name: 'Paddy Mayne', rating: '4' },
]


export default function Page() {
  
  return (
    <>
    <Header />

    <PlayerList players={initialItems} />

    </>

  );

}

export function Header() {

  return (
    <div>
      <Head>
        <title>Redbourne Tennis Club:: Social Mixin Tool</title>
      </Head>
    </div>
  );
}