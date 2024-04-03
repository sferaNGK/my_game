import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("Palldanerar")
    const [roomId, setRoomId] = useState("12")

    const joinRoom = () => {

        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        navigate(`/12`, {
            state: {
                username,
                role: "user",
                points: 0
            },
        });
    };

    const createRootm = () => {
        navigate(`/12`, {
            state: {
                username: "admin",
                role: "admin"
            },
        });
    }

    return (
        <div className='w-full h-screen flex justify-center items-center bg-slate-300'>
            <div className='bg-white rounded-lg p-4 flex flex-col gap-y-3'>
                <h2 className='text-center text-xl'>Зайти в игру</h2>
                <input onChange={(event) => { setUsername(event.target.value) }} value={username} className='w-80 border-2 p-2 rounded-lg' type="text" placeholder='Название команды' />
                <input onChange={(event) => { setRoomId(event.target.value) }} value={roomId} className='w-80 border-2 p-2 rounded-lg' type="text" placeholder='ID игры' />
                <button onClick={joinRoom} className='w-80 bg-green-300 p-2 rounded-lg'>Войти</button>
                <h2 className='text-center text-xl'>Или</h2>
                <button onClick={createRootm} className='w-80 bg-yellow-300 p-2 rounded-lg'>Создать игру</button>
            </div>
        </div>
    )
}

export default Login