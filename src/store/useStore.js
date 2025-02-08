import { create } from "zustand";
import questions from "../data/Questions";

const useStore = create((set, get) => ({
    questions,
    currentQuestion: 0,
    isFinish: false,
    score:0,
    nextQuestion: () => set(state => {
        const nextQ = state.currentQuestion + 1
        return {
            currentQuestion: nextQ,
            isFinish: nextQ === state.questions.length
        }
    }),
    upadateScore: () => set(state => ({score: state.score + 1})),
    reset: () => set({currentQuestion: 0, score: 0, isFinish:false}),
}))

export default useStore