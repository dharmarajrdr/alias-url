import React from 'react'

const Left = () => {
    return (
        <div className='FRCS'>
            <i class="fa-solid fa-link mR5 fs12"></i>
            <span>Bitly Link</span>
        </div>
    );
}

const EditLink = () => {
    return (
        <div className='FRCC edit-link'>
            <i class="fa-solid fa-pen"></i>
            <span>Edit</span>
        </div>
    );
}

const Right = () => {
    return (
        <div className='FRCS'>
            <EditLink />
            <i class="fa-solid fa-ellipsis"></i>
        </div>
    );
}

const Header = () => {
    return (
        <div className='w100 FRBC header'>
            <Left />
            <Right />
        </div>
    )
}

export default Header