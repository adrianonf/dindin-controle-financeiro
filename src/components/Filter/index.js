import { useEffect, useState } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/localStorage';
import './style.css';


function Filter({ showModal, setShowModal }) {
    const [selectedCategory, setSelectedCategory] = useState(false);
    const [category, setCategory] = useState([]);

    const token = getItem('token');

   

    async function handleCategories() {
        try {
            const categoriesRsponse = await api.get('/categoria', {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
        
              const {data} = categoriesRsponse;
        
              
              setCategory(data)
        } catch (error) {

        }
    }

    useEffect(() => {
        handleCategories()
    }, [])

    return (
        <>
            {showModal &&
                <div className='filter-select'>
                    <h3>Categorias</h3>
                    <div className='filter-categories'>
                        {category.map((item) => {
                            return <button type='button' onClick key={item.id} value={item.id}>{item.descricao}</button>
                        })}

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