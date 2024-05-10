import React, { memo, useState } from "react";
import { ItemData } from "../../data/data";

const StateHook = () => {
  const [items, setItems] = useState(ItemData);
  const [inputItem, setInputItem] = useState("");

  const addItem = () => {
    const newItem = { id: items.length, name: inputItem };

    setItems([...items, newItem]);
    setInputItem("");
  };

  return (
    <div className="flex-column-container">
      <h1>UseState Example:</h1>

      <h3>Don't forget these items!</h3>

      <ol>
        {items.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ol>

      <div>
        <input
          placeholder="Enter your item here!"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
    </div>
  );
};

export default memo(StateHook);
