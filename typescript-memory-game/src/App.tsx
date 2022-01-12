import React, { useState } from "react"
import Card from "./components/Card/Card"
// Setup
import { createBoard } from "./setup"
import { shuffleArray } from "./utils"
// Types
import { CardType } from "./setup"
// Styles
import { Grid } from "./App.styles"

const App = () => {
  const [cards, setCards] = React.useState<CardType[]>(
    shuffleArray(createBoard())
  )
  const [gameWon, setGameWon] = React.useState(false)
  const [matchedPairs, setMatchedPairs] = React.useState(0)
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(
    undefined
  )

  React.useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      console.log("VICTORY !!!")
      setGameWon(true)
    }
  }, [matchedPairs])

  const handleCardClick = (currentClickedCard: CardType) => {
    // Flip the card
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    )
    // If this is the first card that is flipped
    // just keep it flipped
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard })
      return
    }

    // If the card is a match
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs((prev) => prev + 1)
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      )
      setClickedCard(undefined)
      return
    }
    // If it's not a matched pair, wait one second and flip the card back
    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      )
    }, 1000)

    setClickedCard(undefined)
  }

  console.log(cards)
  return (
    <div>
      <Grid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
    </div>
  )
}

export default App
