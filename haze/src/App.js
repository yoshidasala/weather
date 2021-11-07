import React from "react";
const api = {
  key: "1979f5f2be21dee688a69286c3a21408",
  base: "https://home.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search' />
        </div>
      </main>
    </div>
  );
}

export default App;
