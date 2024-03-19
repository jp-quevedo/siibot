import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { baseUrl } from '../../utils/data/database'

export default function Items() {

    const localId = useSelector((state) => state.auth.localId)

    const allItems = baseUrl + `/users/${ localId }/items.json`

    const [data, setData] = useState([])
    useEffect(() => {
        fetch(allItems)
          .then(response => response.json())
          .then(json => {
            const array = Object.keys(json).map(key => ({ [key]: json[key] }))
            setData(array)
          })
          .catch(error => console.error(error))
    }, [])
    const info = data
    
}

export const { info, allItems, localId } = Items