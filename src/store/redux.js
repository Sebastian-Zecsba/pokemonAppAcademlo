import { configureStore } from "@reduxjs/toolkit"
import nameTrainer from './slices/nameTrainerSlice'

const store = configureStore({
    reducer: {
     nameTrainer
    }
})

export default store