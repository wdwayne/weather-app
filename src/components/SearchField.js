import { useState } from "react";


function SearchField({ onPress }) {

    const [city, setCity] = useState('');

    return (
        <>
            <input type="text" 
            placeholder='Enter Your City' 
            value={city}
            onChange={(e) => { const inputValue = e.target.value;setCity(inputValue)} }
            onKeyDown= {(e) => {
                if(e.keyCode === 13) {
                    onPress(city)
                    setCity('')
                }
            }
            }
             />
        </>
    )
}

export default SearchField
