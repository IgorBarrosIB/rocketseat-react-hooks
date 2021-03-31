import React, {useState, useEffect}  from "react";

export default function App(){

  const [repositories, setRepositores] = useState([
    {id: 1, name: 'repo-1'},
    {id: 2, name: 'repo-2'},
    {id: 3, name: 'repo-3'},
  ]);

  function handleAddRepositories(){
    setRepositores([...repositories, {id: Math.random(), name: "novo repo"}])
  }

  console.log()
  
  return(
    <>
     <ul>
       {repositories.map(repo => (
         <li key={repo.id}> {repo.name}</li>
       ))}
     </ul>
     <button onClick={handleAddRepositories}> Adicionar repositório </button>
    </>
  );
}