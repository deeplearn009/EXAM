import React, {useState} from 'react'
import styles from './Back.module.scss'
import Card from "./components/card/Card.jsx";

const BackCard = ({data, where}) => {

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('0')

    const filteredData = data?.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (filter === 'asc') return Number(a.price) - Number(b.price)
            if (filter === 'desc') return Number(b.price) - Number(a.price)
            if (filter === '0') return 0
        })

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <input type="text" placeholder='Search...'  value={search} onChange={(e) => setSearch(e.target.value)} />

                <button onClick={() => {setFilter('asc')}}>From low to high</button>
                <button onClick={() => {setFilter('desc')}}>From high to low</button>
                <button onClick={() => {setFilter('0')}}>Default</button>

            </div>
            <div className={styles.content}>
                {filteredData?.map(item => <Card item={item} where={where} />)}
            </div>
        </div>
    )
}
export default BackCard
