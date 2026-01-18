import { useState } from 'react'

const ErrorMessage = ({ showError, setShowError, message }) => {
    return showError ? <span id='error-message'>{message}</span> : null;
}

const CustomAliasLabel = ({ setShowAliasInputField }) => {
    return (
        <div className='FRCC' id='custom-alias-label'>
            Looking for a custom alias?
            <p style={{ color: '#007bff', cursor: 'pointer', marginLeft: '5px' }} onClick={() => setShowAliasInputField(true)}>Click here</p>
        </div>
    )
}

const CreateAliasButton = () => {
    return <button id='create-alias-button' className='FRCC mR5'>
        <i className='fa-solid fa-link mR5' />
        Create
    </button>
}

const CloseAliasButton = () => {
    return <button id='close-alias-button' className='FRCC mL5'>
        <i className='fa-solid fa-xmark mR5' />
        Close
    </button>
}

const Form = () => {

    const [longUrl, setLongUrl] = useState('');
    const [customAlias, setCustomAlias] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showAliasInputField, setShowAliasInputField] = useState(true);

    return (
        <div className='FCCC' id='create-alias-form'>
            <h4>New Alias</h4>
            <div className='input-field mB10'>
                <input autoComplete='off' spellCheck='false' type="text" placeholder="Enter original URL" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
            </div>
            {showAliasInputField ? <div className='input-field mB10 FRCC'>
                <input autoComplete='off' spellCheck='false' type="text" placeholder="Enter alias" value={customAlias} onChange={(e) => setCustomAlias(e.target.value)} />
                <i className="fa-solid fa-xmark cursorPointer" onClick={() => setShowAliasInputField(false)}></i>
            </div> : <CustomAliasLabel setShowAliasInputField={setShowAliasInputField} />}
            <ErrorMessage showError={!!errorMessage} setShowError={setErrorMessage} message={errorMessage} />
            <div className='FRCC'>
                <CreateAliasButton />
                <CloseAliasButton />
            </div>
        </div>
    )
}

export default Form