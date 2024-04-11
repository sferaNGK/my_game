import axios from 'axios'
import React, { useState } from 'react'

const Admin = () => {

    const [title, setTitle] = useState("")

    // Первая тема
    const [titleFirstTopic, setTitleFirstTopic] = useState("")

    // Вопросы
    const [firtsQuestionFirstTopic, setFirtsQuestionFirstTopic] = useState("")
    const [secondQuestionFirstTopic, setSecondQuestionFirstTopic] = useState("")
    const [thirdQuestionFirstTopic, setThirdQuestionFirstTopic] = useState("")
    const [fourthQuestionFirstTopic, setFourthQuestionFirstTopic] = useState("")
    const [fifthQuestionFirstTopic, setFifthQuestionFirstTopic] = useState("")

    // Ответы
    const [firtsAnswerFirstTopic, setFirtsAnswerFirstTopic] = useState("")
    const [secondAnswerFirstTopic, setSecondAnswerFirstTopic] = useState("")
    const [thirdAnswerFirstTopic, setThirdAnswerFirstTopic] = useState("")
    const [fourthAnswerFirstTopic, setFourthAnswerFirstTopic] = useState("")
    const [fifthAnswerFirstTopic, setFifthAnswerFirstTopic] = useState("")

    // ==================================================

    // Вторая тема
    const [titleSecondTopic, setTitleSecondTopic] = useState("")

    // Вопросы
    const [firtsQuestionSecondTopic, setFirtsQuestionSecondTopic] = useState("")
    const [secondQuestionSecondTopic, setSecondQuestionSecondTopic] = useState("")
    const [thirdQuestionSecondTopic, setThirdQuestionSecondTopic] = useState("")
    const [fourthQuestionSecondTopic, setFourthQuestionSecondTopic] = useState("")
    const [fifthQuestionSecondTopic, setFifthQuestionSecondTopic] = useState("")

    // Ответы
    const [firtsAnswerSecondTopic, setFirtsAnswerSecondTopic] = useState("")
    const [secondAnswerSecondTopic, setSecondAnswerSecondTopic] = useState("")
    const [thirdAnswerSecondTopic, setThirdAnswerSecondTopic] = useState("")
    const [fourthAnswerSecondTopic, setFourthAnswerSecondTopic] = useState("")
    const [fifthAnswerSecondTopic, setFifthAnswerSecondTopic] = useState("")

    // ==================================================

    // Третья тема
    const [titleThirdTopic, setTitleThirdTopic] = useState("")

    // Вопросы
    const [firtsQuestionThirdTopic, setFirtsQuestionThirdTopic] = useState("")
    const [secondQuestionThirdTopic, setSecondQuestionThirdTopic] = useState("")
    const [thirdQuestionThirdTopic, setThirdQuestionThirdTopic] = useState("")
    const [fourthQuestionThirdTopic, setFourthQuestionThirdTopic] = useState("")
    const [fifthQuestionThirdTopic, setFifthQuestionThirdTopic] = useState("")

    // Ответы
    const [firtsAnswerThirdTopic, setFirtsAnswerThirdTopic] = useState("")
    const [secondAnswerThirdTopic, setSecondAnswerThirdTopic] = useState("")
    const [thirdAnswerThirdTopic, setThirdAnswerThirdTopic] = useState("")
    const [fourthAnswerThirdTopic, setFourthAnswerThirdTopic] = useState("")
    const [fifthAnswerThirdTopic, setFifthAnswerThirdTopic] = useState("")

    // ==================================================

    // Четвёртая тема
    const [titleFourthTopic, setTitleFourthTopic] = useState("")

    // Вопросы
    const [firtsQuestionFourthTopic, setFirtsQuestionFourthTopic] = useState("")
    const [secondQuestionFourthTopic, setSecondQuestionFourthTopic] = useState("")
    const [thirdQuestionFourthTopic, setTrirdQuestionFourthTopic] = useState("")
    const [fourthQuestionFourthTopic, setFourthQuestionFourthTopic] = useState("")
    const [fifthQuestionFourthTopic, setFifthQuestionFourthTopic] = useState("")

    // Ответы
    const [firtsAnswerFourthTopic, setFirtsAnswerFourthTopic] = useState("")
    const [secondAnswerFourthTopic, setSecondAnswerFourthTopic] = useState("")
    const [thirdAnswerFourthTopic, setThirdAnswerFourthTopic] = useState("")
    const [fourthAnswerFourthTopic, setFourthAnswerFourthTopic] = useState("")
    const [fifthAnswerFourthTopic, setFifthAnswerFourthTopic] = useState("")

    // ==================================================

    // Пятая тема
    const [titleFifthTopic, setTitleFifthTopic] = useState("")

    // Вопросы
    const [firtsQuestionFifthTopic, setFirtsQuestionFifthTopic] = useState("")
    const [secondQuestionFifthTopic, setSecondQuestionFifthTopic] = useState("")
    const [thirdQuestionFifthTopic, setTrirdQuestionFifthTopic] = useState("")
    const [fourthQuestionFifthTopic, setFourthQuestionFifthTopic] = useState("")
    const [fifthQuestionFifthTopic, setFifthQuestionFifthTopic] = useState("")

    // Ответы
    const [firtsAnswerFifthTopic, setFirtsAnswerFifthTopic] = useState("")
    const [secondAnswerFifthTopic, setSecondAnswerFifthTopic] = useState("")
    const [thirdAnswerFifthTopic, setThirdAnswerFifthTopic] = useState("")
    const [fourthAnswerFifthTopic, setFourthAnswerFifthTopic] = useState("")
    const [fifthAnswerFifthTopic, setFifthAnswerFifthTopic] = useState("")


    const sendData = async () => {
        const data = {
            title,
            topics: [
                {
                    title: titleFirstTopic,
                    questions: [
                        {
                            question: firtsQuestionFirstTopic,
                            answer: firtsAnswerFirstTopic,
                            points: 100,
                            isHidden: false,
                        },
                        {
                            question: secondQuestionFirstTopic,
                            answer: secondAnswerFirstTopic,
                            points: 200,
                            isHidden: false,
                        },
                        {
                            question: thirdQuestionFirstTopic,
                            answer: thirdAnswerFirstTopic,
                            points: 300,
                            isHidden: false,
                        },
                        {
                            question: fourthQuestionFirstTopic,
                            answer: fourthAnswerFirstTopic,
                            points: 400,
                            isHidden: false,
                        },
                        {
                            question: fifthQuestionFirstTopic,
                            answer: fifthAnswerFirstTopic,
                            points: 500,
                            isHidden: false,
                        }
                    ]
                },
                {
                    title: titleSecondTopic,
                    questions: [
                        {
                            question: firtsQuestionSecondTopic,
                            answer: firtsAnswerSecondTopic,
                            points: 100,
                            isHidden: false,
                        },
                        {
                            question: secondQuestionSecondTopic,
                            answer: secondAnswerSecondTopic,
                            points: 200,
                            isHidden: false,
                        },
                        {
                            question: thirdQuestionSecondTopic,
                            answer: thirdAnswerSecondTopic,
                            points: 300,
                            isHidden: false,
                        },
                        {
                            question: fourthQuestionSecondTopic,
                            answer: fourthAnswerSecondTopic,
                            points: 400,
                            isHidden: false,
                        },
                        {
                            question: fifthQuestionSecondTopic,
                            answer: fifthAnswerSecondTopic,
                            points: 500,
                            isHidden: false,
                        }
                    ]
                },
                {
                    title: titleThirdTopic,
                    questions: [
                        {
                            question: firtsQuestionThirdTopic,
                            answer: firtsAnswerThirdTopic,
                            points: 100,
                            isHidden: false,
                        },
                        {
                            question: secondQuestionThirdTopic,
                            answer: secondAnswerThirdTopic,
                            points: 200,
                            isHidden: false,
                        },
                        {
                            question: thirdQuestionThirdTopic,
                            answer: thirdAnswerThirdTopic,
                            points: 300,
                            isHidden: false,
                        },
                        {
                            question: fourthQuestionThirdTopic,
                            answer: fourthAnswerThirdTopic,
                            points: 400,
                            isHidden: false,
                        },
                        {
                            question: fifthQuestionThirdTopic,
                            answer: fifthAnswerThirdTopic,
                            points: 500,
                            isHidden: false,
                        }
                    ]
                },
                {
                    title: titleFourthTopic,
                    questions: [
                        {
                            question: firtsQuestionFourthTopic,
                            answer: firtsAnswerFourthTopic,
                            points: 100,
                            isHidden: false,
                        },
                        {
                            question: secondQuestionFourthTopic,
                            answer: secondAnswerFourthTopic,
                            points: 200,
                            isHidden: false,
                        },
                        {
                            question: thirdQuestionFourthTopic,
                            answer: thirdAnswerFourthTopic,
                            points: 300,
                            isHidden: false,
                        },
                        {
                            question: fourthQuestionFourthTopic,
                            answer: fourthAnswerFourthTopic,
                            points: 400,
                            isHidden: false,
                        },
                        {
                            question: fifthQuestionFourthTopic,
                            answer: fifthAnswerFourthTopic,
                            points: 500,
                            isHidden: false,
                        }
                    ]
                },
                {
                    title: titleFifthTopic,
                    questions: [
                        {
                            question: firtsQuestionFifthTopic,
                            answer: firtsAnswerFifthTopic,
                            points: 100,
                            isHidden: false,
                        },
                        {
                            question: secondQuestionFifthTopic,
                            answer: secondAnswerFifthTopic,
                            points: 200,
                            isHidden: false,
                        },
                        {
                            question: thirdQuestionFifthTopic,
                            answer: thirdAnswerFifthTopic,
                            points: 300,
                            isHidden: false,
                        },
                        {
                            question: fourthQuestionFifthTopic,
                            answer: fourthAnswerFifthTopic,
                            points: 400,
                            isHidden: false,
                        },
                        {
                            question: fifthQuestionFifthTopic,
                            answer: fifthAnswerFifthTopic,
                            points: 500,
                            isHidden: false,
                        }
                    ]
                }
            ]
        }

        const jjj = {
            game: JSON.stringify(data)
        }


        const response = await axios.post("http://localhost:3800/game", jjj)
        console.log(response)
    }

    return (
        <div>
            <div>
                <h2>Заголовок игры</h2>
                <input className='w-80 border-2 p-2 rounded-lg' type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Заголовок игры' />
            </div>
            <div className='flex flex-col gap-y-3'>
                <h2>Первая тема</h2>
                <input className='w-80 border-2 p-2 rounded-lg' type="text" value={titleFirstTopic} onChange={(e) => { setTitleFirstTopic(e.target.value) }} placeholder='Заголовок первой темы' />
                <div className='w-full flex justify-center gap-x-3'>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={firtsQuestionFirstTopic} onChange={(e) => { setFirtsQuestionFirstTopic(e.target.value) }} placeholder='Первый вопрос первой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={firtsAnswerFirstTopic} onChange={(e) => { setFirtsAnswerFirstTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={secondQuestionFirstTopic} onChange={(e) => { setSecondQuestionFirstTopic(e.target.value) }} placeholder='Второй вопрос первой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={secondAnswerFirstTopic} onChange={(e) => { setSecondAnswerFirstTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={thirdQuestionFirstTopic} onChange={(e) => { setThirdQuestionFirstTopic(e.target.value) }} placeholder='Третий вопрос первой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={thirdAnswerFirstTopic} onChange={(e) => { setThirdAnswerFirstTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={fourthQuestionFirstTopic} onChange={(e) => { setFourthQuestionFirstTopic(e.target.value) }} placeholder='Четвёртой вопрос первой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={fourthAnswerFirstTopic} onChange={(e) => { setFourthAnswerFirstTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={fifthQuestionFirstTopic} onChange={(e) => { setFifthQuestionFirstTopic(e.target.value) }} placeholder='Пятый вопрос первой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={fifthAnswerFirstTopic} onChange={(e) => { setFifthAnswerFirstTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-3'>
                <h2>Вторая тема</h2>
                <input className='w-80 border-2 p-2 rounded-lg' type="text" value={titleSecondTopic} onChange={(e) => { setTitleSecondTopic(e.target.value) }} placeholder='Заголовок второй темы' />
                <div className='w-full flex justify-center gap-x-3'>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={firtsQuestionSecondTopic} onChange={(e) => { setFirtsQuestionSecondTopic(e.target.value) }} placeholder='Первый вопрос второй темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={firtsAnswerSecondTopic} onChange={(e) => { setFirtsAnswerSecondTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={secondQuestionSecondTopic} onChange={(e) => { setSecondQuestionSecondTopic(e.target.value) }} placeholder='Второй вопрос второй темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={secondAnswerSecondTopic} onChange={(e) => { setSecondAnswerSecondTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={thirdQuestionSecondTopic} onChange={(e) => { setThirdQuestionSecondTopic(e.target.value) }} placeholder='Третий вопрос второй темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={thirdAnswerSecondTopic} onChange={(e) => { setThirdAnswerSecondTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={fourthQuestionSecondTopic} onChange={(e) => { setFourthQuestionSecondTopic(e.target.value) }} placeholder='Четвёртой вопрос второй темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={fourthAnswerSecondTopic} onChange={(e) => { setFourthAnswerSecondTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={fifthQuestionSecondTopic} onChange={(e) => { setFifthQuestionSecondTopic(e.target.value) }} placeholder='Пятый вопрос второй темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={fifthAnswerSecondTopic} onChange={(e) => { setFifthAnswerSecondTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-3'>
                <h2>Третья тема</h2>
                <input className='w-80 border-2 p-2 rounded-lg' type="text" value={titleThirdTopic} onChange={(e) => { setTitleThirdTopic(e.target.value) }} placeholder='Заголовок третьей темы' />
                <div className='w-full flex justify-center gap-x-3'>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={firtsQuestionThirdTopic} onChange={(e) => { setFirtsQuestionThirdTopic(e.target.value) }} placeholder='Первый вопрос третьей темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={firtsAnswerThirdTopic} onChange={(e) => { setFirtsAnswerThirdTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={secondQuestionThirdTopic} onChange={(e) => { setSecondQuestionThirdTopic(e.target.value) }} placeholder='Второй вопрос третьей темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={secondAnswerThirdTopic} onChange={(e) => { setSecondAnswerThirdTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={thirdQuestionThirdTopic} onChange={(e) => { setThirdQuestionThirdTopic(e.target.value) }} placeholder='Третий вопрос третьей темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={thirdAnswerThirdTopic} onChange={(e) => { setThirdAnswerThirdTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={fourthQuestionThirdTopic} onChange={(e) => { setFourthQuestionThirdTopic(e.target.value) }} placeholder='Четвёртой вопрос третьей темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={fourthAnswerThirdTopic} onChange={(e) => { setFourthAnswerThirdTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={fifthQuestionThirdTopic} onChange={(e) => { setFifthQuestionThirdTopic(e.target.value) }} placeholder='Пятый вопрос третьей темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={fifthAnswerThirdTopic} onChange={(e) => { setFifthAnswerThirdTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-3'>
                <h2>Четвертая тема</h2>
                <input className='w-80 border-2 p-2 rounded-lg' type="text" value={titleFourthTopic} onChange={(e) => { setTitleFourthTopic(e.target.value) }} placeholder='Заголовок четвёртой темы' />
                <div className='w-full flex justify-center gap-x-3'>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={firtsQuestionFourthTopic} onChange={(e) => { setFirtsQuestionFourthTopic(e.target.value) }} placeholder='Первый вопрос четвёртой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={firtsAnswerFourthTopic} onChange={(e) => { setFirtsAnswerFourthTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={secondQuestionFourthTopic} onChange={(e) => { setSecondQuestionFourthTopic(e.target.value) }} placeholder='Второй вопрос четвёртой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={secondAnswerFourthTopic} onChange={(e) => { setSecondAnswerFourthTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={thirdQuestionFourthTopic} onChange={(e) => { setTrirdQuestionFourthTopic(e.target.value) }} placeholder='Третий вопрос четвёртой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={thirdAnswerFourthTopic} onChange={(e) => { setThirdAnswerFourthTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={fourthQuestionFourthTopic} onChange={(e) => { setFourthQuestionFourthTopic(e.target.value) }} placeholder='Четвёртой вопрос четвёртой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={fourthAnswerFourthTopic} onChange={(e) => { setFourthAnswerFourthTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={fifthQuestionFourthTopic} onChange={(e) => { setFifthQuestionFourthTopic(e.target.value) }} placeholder='Пятый вопрос четвёртой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={fifthAnswerFourthTopic} onChange={(e) => { setFifthAnswerFourthTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-3'>
                <h2>Пятая тема</h2>
                <input className='w-80 border-2 p-2 rounded-lg' type="text" value={titleFifthTopic} onChange={(e) => { setTitleFifthTopic(e.target.value) }} placeholder='Заголовок пятой темы' />
                <div className='w-full flex justify-center gap-x-3'>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={firtsQuestionFifthTopic} onChange={(e) => { setFirtsQuestionFifthTopic(e.target.value) }} placeholder='Первый вопрос пятой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={firtsAnswerFifthTopic} onChange={(e) => { setFirtsAnswerFifthTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={secondQuestionFifthTopic} onChange={(e) => { setSecondQuestionFifthTopic(e.target.value) }} placeholder='Второй вопрос пятой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={secondAnswerFifthTopic} onChange={(e) => { setSecondAnswerFifthTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={thirdQuestionFifthTopic} onChange={(e) => { setTrirdQuestionFifthTopic(e.target.value) }} placeholder='Третий вопрос пятой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={thirdAnswerFifthTopic} onChange={(e) => { setThirdAnswerFifthTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={fourthQuestionFifthTopic} onChange={(e) => { setFourthQuestionFifthTopic(e.target.value) }} placeholder='Четвёртой вопрос пятой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={fourthAnswerFifthTopic} onChange={(e) => { setFourthAnswerFifthTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                    <div>
                        <textarea className='w-60 h-32 border-2 p-2 rounded-lg' value={fifthQuestionFifthTopic} onChange={(e) => { setFifthQuestionFifthTopic(e.target.value) }} placeholder='Пятый вопрос пятой темы' />
                        <input className='w-60 border-2 p-2 rounded-lg' value={fifthAnswerFifthTopic} onChange={(e) => { setFifthAnswerFifthTopic(e.target.value) }} type="text" placeholder='Ответ' />
                    </div>
                </div>
            </div>


            <button className='w-80 bg-green-300 p-2 rounded-lg' onClick={sendData}>Отправить</button>
        </div>
    )
}

export default Admin