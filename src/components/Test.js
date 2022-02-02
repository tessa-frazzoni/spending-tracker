import React, { useState } from "react"

const Test = (blah) => {
    const [item, setItem] = useState(blah.item)
    const clickHandler = () => {
        setItem('beANs')
    }
    return (
        <div>
            <button onClick={clickHandler}>Press</button>
            <h2>I like {item}</h2>
        </div>
    )
}

export default Test
