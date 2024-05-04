import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("")

    const joinRoom = () => {

        if (!username) {
            toast.error('Напишите username');
            return;
        }


        navigate(`/game`, {
            state: {
                username,
                role: "user",
                points: 0
            },
        });
    };

    return (
        <div className='w-full h-screen flex justify-center items-center bg-slate-300'>
            <div className='bg-white rounded-lg p-4 flex flex-col gap-y-3'>
                <h2 className='text-center text-xl'>Своя игра</h2>
                <input onChange={(event) => { setUsername(event.target.value) }} value={username} className='w-80 border-2 p-2 rounded-lg' type="text" placeholder='Название команды' />
                <button onClick={joinRoom} className='w-80 bg-green-300 p-2 rounded-lg'>Войти</button>
            </div>
        </div>
    )
}

export default Login