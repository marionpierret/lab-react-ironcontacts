import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const Array = contacts.slice(0, 5);
  const [fiveContacts, setFiveContacts] = useState(Array);

  const addRandom = () => {
      let random = Math.floor(Math.random() * contacts.length)
      const arrayCopy = [...fiveContacts]
      arrayCopy.push(contacts[random])
      setFiveContacts(arrayCopy)
  }

  return (
    <div>
    <h1>IronContacts</h1>
    <button onClick = {addRandom}>Add Random Contact</button>
    <button onClick = "">Sort by popularity</button>
    <button onClick = "">Sort by name</button>
    <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
          </thead>
          <tbody>
              {fiveContacts.map(e => (              
                  <tr key={e.id}>
                    <td><img src={e.pictureUrl} alt={e.name} /></td>
                    <td>{e.name}</td>
                    <td>{parseFloat(e.popularity).toFixed(2)}</td>
                    {e.wonOscar? <td>🏆</td> : <td></td>}
                    {e.wonEmmy? <td>🏆</td> : <td></td>}
                  </tr>       
              ))}    
          </tbody>
        </table> 

    </div>
  );
}

export default App;
