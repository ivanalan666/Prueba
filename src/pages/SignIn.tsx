import React, { useState } from 'react';
// import { useDispatch } from 'redux-react-hook';
// import { signIn } from '../../store/auth/signIn';

export const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // const dispatch = useDispatch();

    return (
        <div className="sign-up">
            <img src="" />

            <span>Sign in</span>
            <input
                id="email"
                name="email"
                type="input"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <input
                placeholder="Password"
                value={password}
                type="password"
                onChange={(event) => setPassword(event.currentTarget.value)}
            />
            {/* <button onClick={() => dispatch(signIn({ email, password }))}>Sign in</button> */}
        </div>
    );
};