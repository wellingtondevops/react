import React, { useState, useEffect } from 'react'

export default props => {
    const [contador, setContador] = useState(100)
    const [status, setParOuIpar] = useState('Par')
    useEffect(() => {
        contador % 2 === 0 ? setParOuIpar('Par') :
            setParOuIpar('Impar')
    })
    return (
        <div>
            <h1>{contador}</h1>
            <h3>{status}</h3>
            <button onClick={() => setContador(contador + 1)} >Inc</button>
            <button onClick={() => setContador(contador - 1)} >Dec</button>
        </div>
    )

}