import React from 'react';
import { useGlobalContext } from '../context';
import { FiSearch } from 'react-icons/fi';

const SearchForm = () => {
  const {setSearch} = useGlobalContext();
  const searchValue = React.useRef('');

  const searchProduct = () => {
    setSearch(searchValue.current.value);
  }

  React.useEffect(()=>{
    searchValue.current.focus()
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='search-section'>
      <form onSubmit={handleSubmit}>
        <div className='search-container'>
          <input type='text' id='name' ref={searchValue} onChange={searchProduct}></input>
          <FiSearch className='search-icon'/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm