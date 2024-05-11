'use client'

import React from "react";
import AddButton from "./components/addButton";
import Item from "./components/item"

import { useState } from "react";
import { log } from "console";

export default function Home() {

  const [item, setItem] = useState<Array<string | null>>([]);
  const [inputValue, setInputValue] = useState('');
  const [checkedItem, setCheckedItem] = useState<boolean[]>([]);
 
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newItemInput = document.getElementById('newItem') as HTMLInputElement;
    const newItem = newItemInput.value;

    if(newItem !== ''){
      setItem([...item, newItem]);
      setCheckedItem([...checkedItem, false]);
    }

    setInputValue('');
  }

  const handleDelete = (indexToDelete: number) => {
    const updatedItems = item.filter((_, index) => index !== indexToDelete);
    const updatedCheckedItems = checkedItem.filter((_, index) => index !== indexToDelete);
    
    console.log('deleted');
    

    setItem(updatedItems);
    setCheckedItem(updatedCheckedItems);
  };
  

  const handleCheckboxChange = (index: number, isChecked: boolean) => {
    const updatedCheckedItems = [...checkedItem];
    updatedCheckedItems[index] = isChecked; 
    setCheckedItem(updatedCheckedItems); 
  };  

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
              className="w-[calc(100%-160px)] h-[45px] border-2 rounded-md bg-black p-2 " 
            />
            <AddButton label="Add Item" onClick={handleSubmit} /> 
          </form>

          <div className="w-[40rem] mt-10 relative bg-gray-700 h-2 rounded-full">
            <div className={`w-1/2 h-full absolute left-0 rounded-full bg-green-400`}></div>
          </div>
          
          <ul className="w-[40rem] flex flex-col items-start gap-4 mt-16">
            {item.map((value, index) => (
              <li key={index} className="w-full flex flex-col ">
                    <Item value={value} index={index} handleDelete={handleDelete} checked={checkedItem[index] || false} handleCheckboxChange={handleCheckboxChange} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
