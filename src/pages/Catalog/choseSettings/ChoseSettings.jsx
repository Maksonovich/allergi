import React from 'react'

const ChoseSettings = () => {

    let selecta = document.querySelector('.choseSettings__select')
  return (
    <ul className='choseSettings'>
        <li className='choseSettings__nav'>
            <label htmlFor="">Выберите размер</label>
            <select className='choseSettings__select' name="size" id="size" value="sdsdds">
                <option className='choseSettings__item' value="12.5">12.5</option>
                <option className='choseSettings__item' value="12.5">12.5</option>
                <option className='choseSettings__item' value="12.5">12.5</option>
            </select>
        </li>
        
    </ul>
  )
}

export default ChoseSettings