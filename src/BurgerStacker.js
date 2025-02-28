import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const BurgerStacker = () => {
const [ingredients] = useState([
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'}
          ])
const [burgerIngredients, setBurgerIngredients] = useState([])

    // add to burger
    const handleIngredientAdd = (e) => {
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText
        setBurgerIngredients([{name: ingName, color: ingColor},...burgerIngredients]
        )
    }
    // remove from burger
    const handleIngredientDelete = (e) => {
        const clickIndex = e.target.id
        const currentBurger = burgerIngredients.slice()
        currentBurger.splice(clickIndex, 1)
        setBurgerIngredients({
            burgerIngredients: currentBurger
        })
    }
    // clear burger
    const handleBurgerClear = () => {
        setBurgerIngredients([])
    }

        return (
            <>
                <IngredientList 
                    ingredients={ingredients}
                    add={handleIngredientAdd}
                    />  
                <BurgerPane
                    ingredients={burgerIngredients}
                    remove={handleIngredientDelete}
                    clear={handleBurgerClear}
                />
            </>
        )
}

export default BurgerStacker