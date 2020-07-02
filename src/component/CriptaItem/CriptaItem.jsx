import React from 'react'
import s from './CriptaItem.module.scss'

export default function CriptaItem(props) {
    const rounded = function (number) {
        return +number.toFixed(5);
    }
    const { name, symbol, priceUsd, changePercent24Hr } = props.item;
    return (
        <div className={s.itemCript}>
            <div className={s.line}><span>{name}</span><span> {rounded(+priceUsd)}$</span></div>
            <div className={s.line}><span>{symbol}</span><span>24Hr {rounded(+changePercent24Hr)}</span></div>
        </div>
    )
}