import React, {Component} from 'react';

class ComponenteReceta extends Component {

    render() {
        let receta = {
            nombre: 'Pizza',
            ingrediente: ['Tomate', 'Queso', 'Jamon'],
            calorias: 400
        };
        return(
            <div className="mi-componente">
                <h1>{'Nombre Receta: '+receta.nombre}</h1>
                <h2>{'Calorias: '+receta.calorias}</h2>
                <ol>
                    {
                    receta.ingrediente.map((ingrediente, i) =>{

                            return (
                                <li>
                                    {ingrediente}
                                </li>
                            )

                        }
                    )
                    }
                </ol>
            </div>
        )
    }
}

export default ComponenteReceta;