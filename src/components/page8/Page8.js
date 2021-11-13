import React from 'react';
import './page8.styles.scss'
import Card from '../card/Card'

const dummyData = [
    {
        title: 'Free Test',
        subtitle: 'Organize across all apps by hand',
        price: '0',
        currency: '$'
    },
    {
        title: 'Low Price',
        subtitle: 'Monthly Fixed Amount',
        price: '200.000',
        currency: '$'
    },
    {
        title: 'Easy Using Methods',
        subtitle: 'Various Manuals',
        price: '200.000',
        currency: '$'
    },
    {
        title: 'Verified IT Service',
        subtitle: 'On sale in 4 countries',
        price: '300.000',
        currency: 'VND'
    }
]

const Page8 = () => {
    return (
        <div id='index-8'>
            {
                dummyData.map((data, index)=>(
                    <Card data={data} key={index}/>
                ))
            }
        </div>
    )
}

export default Page8;