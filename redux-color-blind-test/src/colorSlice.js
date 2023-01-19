import { createSlice } from '@reduxjs/toolkit'
import Color from 'color'

const initialState = {
  colors: ['#fff', '#fff', '#fff', '#fff', '#ccc'],
  record: [],
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    guessColor: (state, action)=> {
        const isWinner = state.colors.filter(
          (color)=> color === action.payload
        ).length === 1
        state.record = [...state.record, isWinner ? 'Vinst' : 'Förlust']

          const newColors = []
          const baseColor = Color.rgb(
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255)
        )
        const randomIndex = Math.floor(Math.random() * 5)
          for (let i = 0; i < 5; i++) {
            if(i === randomIndex) {
                  newColors.push(baseColor.lighten(0.2).hex())
            } else {
              newColors.push(baseColor.hex())
            }
          }

        state.colors = newColors
    }
  }
})

export const {guessColor} = colorSlice.actions

export default colorSlice.reducer