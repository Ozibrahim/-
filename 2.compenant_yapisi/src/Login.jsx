import React from 'react'

export const user = [
    {
        username: "ibrahim",
        password: "1"
    },
    {
        username: "enes",
        password: "2"
    }
]

function Login() {
    return (
        <div>
            <div>
                <p>Kullancı Adınız</p>
                <input type="text" name="" id="" />
            </div>
            <div>
                <p>Şifreniz</p>
                <input type="text" name="" id="" />
            </div>
            <button>Giriş Yap</button>
        </div>
    )
}

export default Login