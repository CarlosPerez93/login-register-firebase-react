import React from 'react'
import { Spin } from 'antd'

export const Loading = () => {

    return (
        <div className='main'>
            <Spin size='large' />
            <p>loading...</p>
        </div>
    )
}
