'use client'

import React from "react";
import AddButton from "./components/addButton";

import { useState } from "react";

export default function Home() {

  const [item, setItem] = useState<Array<string | null>>([]);
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newItemInput = document.getElementById('newItem') as HTMLInputElement;
    const newItem = newItemInput.value;

    if(newItem !== '')
      setItem([...item, newItem]);

    setInputValue('');
  }

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold mt-16">Bucket List Tracker</h1>
        <div className="mt-10 flex flex-col items-center">
          <form onSubmit={handleSubmit} className="flex w-[40rem] h-max gap-5 justify-center items-center">
            <input 
              type="text" 
              value={inputValue} 
              onChange={(e) => {
                setInputValue(e.target.value)
              }} 
              id="newItem" 
              autoFocus 
              className="w-[calc(100%-160px)] h-full border-2 rounded-md bg-black p-2 " 
            />
            <AddButton label="Add Item" onClick={handleSubmit} /> 
          </form>
          <ul className="w-full flex flex-col items-center mt-10">
            {item.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
