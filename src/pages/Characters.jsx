import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const characterImages = {
  "Luke Skywalker": "https://nsabers.es/cdn/shop/articles/opolar_httpss.mj.runWO-xsj2B4pM_A_super_realistic_portrait_of_d96eeb79-b220-46ac-9305-fe7a83dfaf4f_0.png",
  "C-3PO": "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg",
  "R2-D2": "https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png",
  "Darth Vader": "https://nsabers.com/cdn/shop/articles/bebec223da75d29d8e03027fd2882262.png",
  "Leia Organa": "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
  "Owen Lars":"https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg",
  "Beru Whitesun lars":"https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png",
  "R5-D4":"https://static.wikia.nocookie.net/frstarwars/images/e/e7/R5-D4.png",
  "Biggs Darklighter":"https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg",
  "Obi-Wan Kenobi":"https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"
  // Add more characters and their image URLs
};

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let allCharacters = [];
        let url = 'https://swapi.dev/api/people/';
        
        while (url) {
          const response = await Axios.get(url);
          allCharacters = [...allCharacters, ...response.data.results];
          url = response.data.next; // next URL for pagination
        }

        setCharacters(allCharacters);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCharacters();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search for a character" 
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="row">
        {filteredCharacters.map((character) => (
          <div className="col-md-3 mb-4" key={character.name}>
            <div className="card h-100 text-center">
              <img
                src={characterImages[character.name]}
                alt={character.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Birth Year: {character.birth_year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
