'use client'

import React from "react";
import AddButton from "../components/addButton";
import Item from "../components/item"
import ProgressBar from "../components/progressBar";

import { useState, useEffect } from "react";
import { log } from "console";

export default function Dashboard() {

  const [item, setItem] = useState<Array<string | null>>([]);
  const [inputValue, setInputValue] = useState('');
  const [checkedItem, setCheckedItem] = useState<boolean[]>([]);
  const [progressWidth, setProgressWidth] = useState(checkedItem.filter(Boolean).length / item.length * 100);

  useEffect(() => {
    if (item.length === 0) {
      setProgressWidth(0);
    } else {
      const newProgressWidth = checkedItem.filter(Boolean).length / item.length * 100;
      setProgressWidth(newProgressWidth);
    }
  }, [checkedItem, item]);
 
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
    
    setItem(updatedItems);
    setCheckedItem(updatedCheckedItems);
  };
  

  const handleCheckboxChange = (index: number, isChecked: boolean) => {
    setCheckedItem(prevCheckedItem => {
      const updatedCheckedItems = [...prevCheckedItem];
      updatedCheckedItems[index] = isChecked;
      return updatedCheckedItems;
    });
  };

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-16">Bucket List Tracker</h1>
        <div className="mt-10 flex flex-col items-center sm:w-[40rem] sm:px-0 w-screen px-8">
          <form onSubmit={handleSubmit} className="flex h-max w-full sm:gap-5 gap-2 justify-center items-center">
            <input 
              type="text" 
              value={inputValue} 
              onChange={(e) => {
                setInputValue(e.target.value)
              }} 
              id="newItem" 
              autoFocus 
              className="sm:w-[calc(100%-160px)] w-[calc(100%-45px-0.5rem)] h-[45px] border-2 rounded-md bg-black p-2 " 
            />
            <AddButton label="Add Item" onClick={handleSubmit} /> 
          </form>

          <ProgressBar progressWidth = {progressWidth}/>
          
          <ul className="w-full flex flex-col items-start gap-4 mt-16">
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
