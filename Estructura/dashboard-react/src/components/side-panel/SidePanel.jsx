import React from 'react'
import './SidePanel.css'
import './ButtonLink'
import ButtonLink from './ButtonLink'

function SidePanel(){
    return (
        <div className='side-panel'>
            <ButtonLink />
            <ButtonLink />
            <ButtonLink />
        </div>
    )
}


export default SidePanel