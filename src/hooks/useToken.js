import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    const email = user?.user?.email;
    const currentUser = { email: email }
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "put",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    setToken(data.token)
                    localStorage.setItem("accessToken", data.token)
                })
        }
    }, [user, email])
    return [token]
}

export default useToken;