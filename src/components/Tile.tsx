"use client"

import {useState} from "react";

interface tileProps {
    id: number
    value: number
}
export function Tile(props: tileProps) {

    const { id, value } = props

    const [question, setQuestion] = useState()

    const fetchQuestion = async ()  => {
        const questionUrl = `https://jservice.io/api/clues?category=${id}&value=${value}`

        try {
            const questionResponse = await fetch(questionUrl);
            const questionData = await questionResponse.json();

            if (questionData.length > 0) {
                setQuestion(questionData[0].question);
                console.log()
            } else {
                console.log("No questions found for the given criteria.");
                setQuestion(undefined);
            }
        } catch (error) {
            console.error("Error fetching question:", error);
            setQuestion(undefined);
        }

    }


    return (
        <div className="border p-4 bg-red-600 text-white flex justify-center items-center cursor-pointer h-24" onClick={() => fetchQuestion()}>
            {
                question ? <h1> {question} </h1> : <h1> ${value} </h1>
            }
        </div>
    )

}