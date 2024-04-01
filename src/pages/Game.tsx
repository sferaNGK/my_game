import React, { useState } from 'react'
import { IUser } from '../interface/IUser'
import { IGame } from '../interface/IGame'
import { IQuestion } from '../interface/IQuestion'
import { dataUsers } from '../users'
import { dataGame } from '../game'
import { ITopic } from '../interface/ITopic'

const Game = () => {

    // Временная переменная, чтобы включить дизайн для игрока
    const client = false

    const [users, setUsers] = useState<IUser[]>(dataUsers)
    const [game, setGame] = useState<IGame>(dataGame)

    const [selectedQuestion, setSelectedQuestion] = useState<IQuestion | null>(null)
    const [activeUser, setActiveUser] = useState<IUser>(users[0])

    const [isSelect, setIsSelect] = useState(false)
    const [isAnswer, setIsAnswer] = useState(false)

    const [isUser, setIsUser] = useState(false)

    const showQuestion = (question: IQuestion) => {

        question.isHidden = true;
        setIsSelect(true)
        setSelectedQuestion(question)
    }

    const hiddenQuestion = () => {
        setIsSelect(false)
        setIsAnswer(false)
        setSelectedQuestion(null)
        changeUser()
    }

    const showAnswer = () => {
        setIsAnswer(true)
    }

    const addPointUser = () => {
        // @ts-ignore 
        activeUser.points += selectedQuestion?.points

        changeUser()
        hiddenQuestion()
    }

    const changeUser = () => {
        let index = users.indexOf(activeUser) + 1
        if (index == users.length) {
            index = 0
            setActiveUser(users[index])
            return
        }

        setActiveUser(users[index])
    }

    if (client) {
        return (
            <div className='w-full h-screen flex justify-center items-center bg-slate-300'>
                <div className='bg-white rounded-lg p-4 flex flex-col gap-y-3 items-center'>
                    <h2 className='text-2xl text-center text-wrap'>{selectedQuestion ? selectedQuestion?.question : "Вопрос ещё не выбран"}</h2>
                    <h2 className='text-center text-xl'>{activeUser.username}</h2>
                    <h2 className='text-center text-xl'>Очки: {activeUser.points}</h2>
                    <button className='w-40 h-40 rounded-full text-2xl bg-green-300 p-2'>Ответить</button>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full h-screen flex flex-col relative">

            {isSelect &&
                <div className='absolute w-full h-screen bg-slate-500 z-10 flex justify-center items-center text-lg'>
                    <div className="w-[600px] bg-white p-4 rounded-lg flex flex-col gap-y-3">
                        <div>
                            <h2 className='text-wrap'>{selectedQuestion?.question}</h2>
                        </div>
                        <div>
                            <button onClick={showAnswer}>Показать ответ</button>
                        </div>
                        {isAnswer && <div className="flex flex-col gap-y-3">
                            <p className="italic">{selectedQuestion?.answer}</p>
                            <button className="w-full p-2 bg-green-300 rounded-lg" onClick={addPointUser}>Добавить очки {activeUser.username}</button>
                            <button className="w-full p-2 bg-red-300 rounded-lg" onClick={hiddenQuestion}>Ответ не засчитан</button>
                        </div>}
                    </div>
                </div>
            }

            <div className="w-full h-auto flex justify-between border-2 p-4">
                <h1 className="text-2xl">{game.title}</h1>
                <button onClick={() => { setIsUser(!isUser) }}>Таблица</button>
            </div>
            <div className="w-full flex-auto flex flex-col justify-between p-4">
                {!isUser ?
                    game.topics.map((topic: ITopic) => (
                        <div className="flex text-2xl items-center">
                            <div className="w-64">
                                <h2>{topic.title}</h2>
                            </div>
                            <div className="w-full flex justify-between">
                                {topic.questions.map((question: IQuestion) => {
                                    if (!question.isHidden) {
                                        return (
                                            <div onClick={() => { showQuestion(question) }} className="w-48 rounded-lg bg-slate-300 p-3 cursor-pointer">
                                                <h2 className="text-center">{question.points}</h2>
                                            </div>
                                        )
                                    }

                                    return (
                                        <div className="w-48 bg-slate-500 rounded-lg p-3 cursor-pointer">
                                            <h2 className="text-center">{question.points}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))
                    :
                    <div className="w-full flex flex-col items-center gap-y-3">
                        {[...users].sort((a, b) => b.points - a.points).map((user) => (
                            <div className="w-[600px] drop-shadow-lg border-2 flex justify-between p-3 rounded-lg">
                                <h2>Имя: {user.username}</h2>
                                <h2>Очки: {user.points}</h2>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Game