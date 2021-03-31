import React, {useState, useEffect}  from "react";

export default function App(){

  const [repositories, setRepositores] = useState([ ]);

  useEffect(() => {
    async function github(){
      const response = await fetch('https://api.github.com/users/IgorBarrosIB/repos');
      const data = await response.json();

      setRepositores(data);
    }
    github();
  }, []);
  
  return(
    <>
     <ul>
       {repositories.map(repo => (
         <li key={repo.id}> {repo.name}</li>
       ))}
     </ul>
    </>
  );
}