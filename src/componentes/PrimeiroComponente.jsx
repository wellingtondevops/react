import React from 'react'


let isLegal = false

export default (props) =>
    <div>
        <h1>{props.valor}</h1>
        <h2>{1 + 1}</h2>
        <p>Legal:{isLegal ? 'Sim' : 'Não'}</p>
        <p>{Math.random()}</p>
    </div>



// export default (props) =>
// <div>
//     <h1>Primeiro Componente (Arrow)!</h1>
// </div>


//função anonima
// export default function (){
//     return <h1>Primeiro Componente!</h1>
// }

//export default primeiro

// função nomeada
// function primeiro (){
//     return <h1>Primeiro Componente!</h1>
// }


