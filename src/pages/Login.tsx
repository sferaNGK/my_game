import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { IGame } from '../interface/IGame';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [games, setGames] = useState([])
    const [id, setId] = useState("")

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

    const createRootm = () => {

        if (!id) {
            toast.error('Выберите игру');
            return;
        }

        localStorage.setItem("id", id)

        navigate(`/game`, {
            state: {
                username: "admin",
                role: "admin"
            },
        });
    }

    const getAllGames = async () => {
        const responce = await axios.get("http://localhost:3800/games")
        setGames(responce.data)
    } 

    useEffect(() => {
        getAllGames()
    }, [])

    return (
        <div className='w-full h-screen flex justify-center items-center bg-slate-300'>
            <div className='bg-white rounded-lg p-4 flex flex-col gap-y-3'>
                <h2 className='text-center text-xl'>Зайти в игру</h2>
                <input onChange={(event) => { setUsername(event.target.value) }} value={username} className='w-80 border-2 p-2 rounded-lg' type="text" placeholder='Название команды' />
                <button onClick={joinRoom} className='w-80 bg-green-300 p-2 rounded-lg'>Войти</button>
                <h2 className='text-center text-xl'>Или</h2>
                <button onClick={createRootm} className='w-80 bg-yellow-300 p-2 rounded-lg'>Создать игру</button>
                <select onChange={(e) => {setId(e.target.value)}} className='w-80 border-2 p-2 rounded-lg'>
                    <option disabled selected value="#">Выбереть игру</option>
                    {games?.map((game: any) => (
                        <option value={game.id}>{game.gamedata.title}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Login