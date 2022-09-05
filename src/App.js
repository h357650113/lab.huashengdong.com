import React, {useState, useEffect} from 'react'

/**
 *
 */
export default function Default({
    defaultUsername = 'Marvin',
    defaultPassword = '42',
    defaultType = 'human',
}) {
    const [showFormData, setShowFormData] = useState({
        username: defaultUsername,
        password: defaultPassword,
        type: defaultType,
    })

    const [formValidated, setFormValidated] = useState(false)
    const formValid = ({username, password, type}) => {
        if (!username || !password || !type) {
            return false
        }
        return true
    }

    const handleFormSubmitClick = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        setShowFormData(Object.fromEntries(data))
    }

    useEffect(() => {
        setFormValidated(formValid(showFormData))

        return () => {
            setFormValidated(false)
        }
    }, [showFormData])

    return (
        <div>
            <div>
                <h1>Base Form</h1>
                <form onSubmit={handleFormSubmitClick} className="form">
                    <input
                        name="username"
                        type="text"
                        defaultValue={defaultUsername}
                    />
                    <input
                        name="password"
                        type="text"
                        defaultValue={defaultPassword}
                    />
                    <select name="type" defaultValue={defaultType}>
                        <option value="robot">Robot</option>
                        <option value="human">Human</option>
                    </select>
                    <button type="submit">submit</button>
                </form>
            </div>
            <div>{formValidated && '* form valid'}</div>
            <div className="form-data-format">
                FORM DATA: {JSON.stringify(showFormData)}
            </div>
            <div>
                <code>
                    <p>
                        {`
                        const [showFormData, setShowFormData] = useState({
                            username: defaultUsername,
                            password: defaultPassword,
                            type: defaultType,
                        })
                        `}
                    </p>
                    <p>
                        {`
                        const handleFormSubmitClick = (e) => {
                            e.preventDefault()
                            const data = new FormData(e.target)
                            setShowFormData(Object.fromEntries(data))
                        }
                        `}
                    </p>
                </code>
            </div>
        </div>
    )
}
