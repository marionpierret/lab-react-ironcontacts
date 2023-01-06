import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const Array = contacts.slice(0, 5);
  const [fiveContacts, setFiveContacts] = useState(Array);

  const addRandom = () => {
    let random = Math.floor(Math.random() * contacts.length);
    const arrayCopy = [...fiveContacts];
    arrayCopy.push(contacts[random]);
    setFiveContacts(arrayCopy);
  };

  const sortByPopularity = () => {
    const popularity = [...fiveContacts].sort(function (a, b) {
      return a.popularity < b.popularity ? 1 : -1;
    });
    setFiveContacts(popularity);
  };

  const sortByName = () => {
    const nameArray = [...fiveContacts];
    const name = [...nameArray].sort(function (a, b) {
      return a.name > b.name ? 1 : -1;
    });
    setFiveContacts(name);
  };

  const deleteBtn = (id) => {
    const removedContact = fiveContacts.filter((e) => {
      return e.id !== id;
    });
    setFiveContacts(removedContact);
  };

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fiveContacts.map((e) => (
            <tr key={e.id}>
              <td>
                <img src={e.pictureUrl} alt={e.name} />
              </td>
              <td>{e.name}</td>
              <td>{parseFloat(e.popularity).toFixed(2)}</td>
              {e.wonOscar ? <td>🏆</td> : <td></td>}
              {e.wonEmmy ? <td>🏆</td> : <td></td>}
              <td><button onClick={()=> deleteBtn(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
