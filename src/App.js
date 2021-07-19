import { useState, useEffect } from "react";
import Album from "./Album";

const App = () => {

  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState();

  useEffect(() => {
    getAlbums();
  }, [query])

  const getAlbums = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${query}/photos`);
    const data = await response.json();
    console.log(data);
    setAlbums(data);
  }

  const updateSearch = (e) => {
    console.log(search)
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");

    if (isNaN(search) || search > 100 || search === ""){
      alert('Must Input a Valid Id Number')
      setSearch("")
    }
  }


  return (
    <div className="App">
      <h1>Photo Album Search</h1>
      <form onSubmit = {getSearch}  className="form-submit">
        <input value = {search} onChange = {updateSearch} className="form-input" type="text" placeholder="Type in album Id Number..." />
        <button className="form-button" type="submit">Get Album Photos By Id</button>
      </form>


      <div className="card">
        {albums.map((album)=> (
          <Album 
          key={album.id}
          title = {album.title}
          image = {album.thumbnailUrl}/>
        ))}
      </div>
    </div>
  );
}

export default App;
