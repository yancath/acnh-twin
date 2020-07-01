import React from 'react'


const Form = ( { birthday, handleBirthdayChange} ) => {
    const text = 'When is your birthday?    '
    const instructions = 'Find the villager that has the same birthday as you! Start by entering your birthday by day and month, for example "July 27th" would yield Ketchup and Eriks information. NPCs are not included.'

    return (
        <div className='form'>
        <div className='form justify-center align-center flex-row'>
          <div className='flex-col'>
            <h1>Who's your Animal Crossing: New Horizons twin?</h1>
            <p className='instructions'>{instructions}</p>
            {text} <input value={birthday} onChange={handleBirthdayChange} size="14"></input>
          </div>
        </div>
        </div>
    )
}

export default Form