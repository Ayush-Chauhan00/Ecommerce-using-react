import React, { useContext } from 'react'
import css from '../filter/Filter.module.css'
import { CiSearch } from "react-icons/ci";
import MyContext from '../../context/data/MyContext';


const Filter = () => {
  const context = useContext(MyContext)
  const { mode, toggle } = context
  return (
    <div className={css.section} style={{ backgroundColor: mode === "dark" ? 'rgb(62,64,66)' : '', color: mode === 'dark' ? 'black' : '' }}>
      <div className={css.searchbox}>
        <input type='text' name='search' placeholder='Search here....' className={css.searchbar} />
        <CiSearch className={css.searchicon} />
      </div>
      <div className={css.texts}>
        <div>
          <h1>Filters</h1>
        </div>
        <div>
          <button><h1>Reset Filters</h1></button>
        </div>
      </div>

      <div className={css.twoinone}>
        <div className={css.item}>
          <select name="items" id="items" className={css.dropdowns}>
            <option>All</option>
            <option value="Jean">Jean</option>
            <option value="Shoes">Shoes</option>
            <option value="Watches">Watches</option>
          </select>
        </div>
        <div className={css.price}>
          <select name="cars" id="cars" className={css.dropdowns}>
            <option>Price</option>
            <option value="1200">1200</option>
            <option value="1400">1400</option>
            <option value="700">700</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filter
