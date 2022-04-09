import { useState } from 'react';
import api from '../../services/api';
import './style.css';


function Filter({ showModal, setShowModal }) {
    const [selectedCategorie, setSelectedCategorie] = useState(false);


    async function handleCategories() {
        try {

        } catch (error) {

        }
    }

    return (
        <>
            {showModal &&
                <div className='filter-select'>
                    <h3>Categorias</h3>
                    <div className='filter-categorie'>

                    </div>
                    <div className="filter-buttons">
                        <button>Limpar Filtros</button>
                        <button>Aplicar Filtros</button>
                    </div>
                </div>}
        </>
    )
}

export default Filter;