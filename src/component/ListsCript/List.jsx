import React, { useEffect, useState } from 'react'
import s from './ListCript.module.scss'
import CriptaItem from '../CriptaItem/CriptaItem'



export default function ListCript(props) {
    const [state, setState] = useState({
        error: null,
        isLoaded: false,
        items: [],
    })

    useEffect(() => {
        fetch("https://api.coincap.io/v2/assets?limit=100")
            .then(res => res.json())
            .then(
                (result) => {
                    setState({
                        isLoaded: true,
                        items: result.data
                    });
                }
            )
    }, []);

    return (
        state.items ?
            <div className={s.app}>
                <h1 className={s.title}>Cryptocurrency App</h1>
                <div className={s.scrollPanel}>
                    {state.items.map((item) => {
                        return <CriptaItem key={item.id} item={item} />
                    })}
                </div>
            </div>
            :
            <div className={s.title}>"Loading..."</div>
    )
}
