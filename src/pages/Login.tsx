import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { IGame } from '../interface/IGame';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [noSelectedCategories, setNoSelectedCategories] = useState([])
    const [id, setId] = useState("")

    const [isSettings, setIsSettings] = useState(false)

    const selectCategory = (id: any) => {
        setNoSelectedCategories([...noSelectedCategories].filter((category: any) => category.id != id))
        let elem = categories.find((category: any) => category.id == id)
        // @ts-ignore
        setSelectedCategories([...selectedCategories, elem])
    }

    const removeSelectCategory = (id: any) => {
        setSelectedCategories([...selectedCategories].filter((category: any) => category.id != id))
        let elem = categories.find((category: any) => category.id == id)
        // @ts-ignore
        setNoSelectedCategories([...noSelectedCategories, elem])
    }

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

        localStorage.setItem("gamedata", JSON.stringify(selectedCategories))

        navigate(`/game`, {
            state: {
                username: "admin",
                role: "admin"
            },
        });
    }

    const getAllCategories = async () => {
        const responce = await axios.get("http://mygame-api/categories");
        setCategories(responce.data)
        setNoSelectedCategories(responce.data)
    }

    useEffect(() => {
        getAllCategories()
    }, [])

    return (
        <div className='w-full h-screen flex justify-center items-center bg-slate-300'>

            {isSettings &&
                <div className='absolute w-full h-screen bg-slate-500 z-10 flex justify-center items-center text-lg'>
                    <div className="w-[600px] bg-white p-4 rounded-lg flex flex-col gap-y-3">
                        <div>
                            <h2 className='text-center text-xl'>Выбор категорий для игры</h2>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h2 className='text-center text-xl'>Выбранные</h2>
                            <div className='flex gap-3 flex-wrap'>
                                {selectedCategories.map((category: any) => (
                                    <button onClick={() => {removeSelectCategory(category.id)}} className='w-auto bg-green-300 p-2 rounded-lg'>{category.title}</button>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h2 className='text-center text-xl'>Доступные</h2>
                            <div className='flex gap-3 flex-wrap'>
                                {noSelectedCategories.map((category: any) => (
                                    <button onClick={() => {selectCategory(category.id)}} className='w-auto bg-yellow-300 p-2 rounded-lg'>{category.title}</button>
                                ))}
                            </div>
                        </div>
                        <button onClick={() => { setIsSettings(false) }} className='w-full bg-red-300 p-2 rounded-lg'>Закрыть</button>
                    </div>
                </div>
            }

            <div className='bg-white rounded-lg p-4 flex flex-col gap-y-3'>
                <h2 className='text-center text-xl'>Своя игра</h2>
                <input onChange={(event) => { setUsername(event.target.value) }} value={username} className='w-80 border-2 p-2 rounded-lg' type="text" placeholder='Название команды' />
                <button onClick={joinRoom} className='w-80 bg-green-300 p-2 rounded-lg'>Войти</button>
                <h2 className='text-center text-xl'>Или</h2>
                <button onClick={createRootm} className='w-80 bg-yellow-300 p-2 rounded-lg'>Создать игру</button>
                <button onClick={() => { setIsSettings(true) }} className='w-80 bg-orange-300 p-2 rounded-lg'>Настройки</button>
            </div>
        </div>
    )
}

export default Login