import { useContext, useState } from "react";
import { UsersContext } from "../../contexts/UserContext";
import "./style.css";

function SearchBar(props) {
  const [username, setUsername] = useState('');

  const { addAUser } = useContext(UsersContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const user = await fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json());

    addAUser(user);

    setUsername('');
  }

  return (
    <form className="search_bar" onSubmit={handleSubmit}>
        <h2 className="search_title">Busque por usuários do Github</h2>
        <div className="search_box">
          <input 
            type="text" 
            placeholder="Digite o username" 
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button>
            <i className="fas fa-search"></i>
            Buscar
          </button>
        </div>
    </form>
  );
}

export default SearchBar;