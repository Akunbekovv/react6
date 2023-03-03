import {useEffect, useState} from "react";

function App() {
  const [lists, setLists] = useState(['Эмир', 'Максат', 'Асылай'])
    // useEffect(() => {
    //     setLists([...lists, 'Mamed', 'YUsuf'])
    // }, [])
  return (
    <div className="App">
      <ul>
        {
          lists.map((i, k) => <li key={k}>{i}</li>)
        }
      </ul>
    </div>
  );
}

export default App;