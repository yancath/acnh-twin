import React from 'react'
import '../index.css'

const Villager = ( {villagers, filter} ) => {
    const filtered =  filter.length !== 0 ? villagers.filter(villager => villager['birthday-string'].toLowerCase().includes(filter.toLowerCase().trim())) : []
    console.log('vil', filtered)

    const output = () => {
        return filtered.map(villager => 
            <li key={villager.id} className='villagers'>
                <h2>{villager.name['name-USen']}</h2>
                <br></br>
                <img src={`https://acnhapi.com/v1/icons/villagers/${villager.id}`}
                alt="villager-icon"
                >
                </img>
                <div className='inner'>
                    <h2 className='info'>Info</h2>
                    <p>Gender: {villager.gender}</p>
                    <p>Species: {villager.species}</p>
                    <p>Personality: {villager.personality}</p>
                    <p>Catch Phrase: {villager['catch-phrase']}</p>
                </div>

            </li>)
    }

        return (
            <div className='group'>
               <ul>{output()}</ul>
            </div>
        )


}

export default Villager