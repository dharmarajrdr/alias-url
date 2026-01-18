import React from 'react'

const Left = () => {
    return (
        <div className='FRCS'>
            <i class="fa-solid fa-link mR5 fs12"></i>
            <span>Alias Link</span>
        </div>
    );
}

const EditLink = () => {
    return (
        <div className='FRCC edit-link'>
            <i class="fa-solid fa-pen mR5"></i>
            <span>Edit</span>
        </div>
    );
}

const DeleteLink = () => {
    return (
        <div className='FRCC delete-link mL15'>
            <i class="fa-solid fa-trash mR5"></i>
            <span>Delete</span>
        </div>
    );
}

const Right = () => {
    return (
        <div className='FRCS'>
            <EditLink />
            <DeleteLink />
            <i class="fa-solid fa-ellipsis mL15"></i>
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