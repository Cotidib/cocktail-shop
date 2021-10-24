import React from 'react';
import { useGlobalContext } from '../context';
import { FiSearch } from 'react-icons/fi';
import { Redirect, Route, useHistory } from 'react-router-dom';

const SearchForm = () => {
  const {setSearch} = useGlobalContext();
  const searchValue = React.useRef('');
  let history = useHistory();

  const searchProduct = () => {
    setSearch(searchValue.current.value);
  }

  React.useEffect(()=>{
    searchValue.current.focus()
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchValue.current.value);
    history.push("/");
  }

  return (
    <section className='search-section'>
      <form onSubmit={handleSubmit}>
        <div className='search-container'>
          <input type='text' id='name' ref={searchValue} onChange={searchProduct}></input>
          <button className='search-btn'><FiSearch className='search-icon'/></button>
        </div>
      </form>
    </section>
  )
}

export default SearchForm