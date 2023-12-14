import React, { useState, useEffect } from "react";
import Header from "./Header";

export default function FormComponent() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [isPage1, setPageone] = useState(true);

  const handleOnchange = (e) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };
  const deleteItem = (id) => {
    let filterData = data.filter((d) => d.id != id);
    setData(filterData);
    setInputData({});
  };
  const addItem = () => {
    setData([
      ...data,
      {
        id: data.length + 1,
        ...inputData,
      },
    ]);
  };
  const editItem = (id) => {
    setInputData(data[id - 1]);
    setIsUpdate(true);
  };
  const updateItem = () => {
    let updatedData = [...data];
    updatedData[inputData.id - 1] = inputData;
    setData(updatedData);
    setIsUpdate(false);
    setInputData({});
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div className="App">
      <Header/>
        <>
          <input
            onChange={handleOnchange}
            placeholder="title"
            id="title"
            value={inputData.title}
          />
          <input
            onChange={handleOnchange}
            placeholder="body"
            id="body"
            value={inputData.body}
          />
          {!isUpdate ? (
            <button onClick={addItem}>Add</button>
          ) : (
            <button onClick={updateItem}>update</button>
          )}
          {data?.map((d) => (
            <details>
              <data title={d.title}>{d.body}</data>
              <button onClick={() => deleteItem(d.id)}>delete</button>
              <button onClick={() => editItem(d.id)}>edit</button>
            </details>
          ))}
        </>
     
    </div>
  );
}
