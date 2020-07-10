import React from 'react'
import styled from 'styled-components'

export default function ProductDetail({ shownProduct }) {
  return (
    <>
      <h2>{shownProduct.productName}</h2>
      <div className="description">{shownProduct.location}</div>
      <h4>Beschreibung</h4>
      <div>{shownProduct.description}</div>
      <DividerLine />
      <h4>Leihgebühr</h4>
      <StyledPriceBox>
        <span>pro Tag</span>
        <span>{`${shownProduct.dailyRate} €`}</span>
      </StyledPriceBox>
      <StyledPriceBox>
        <span>pro Woche</span>
        <span>{`${shownProduct.weeklyRate} €`}</span>
      </StyledPriceBox>
      <DividerLine />
      <h4>Kontakt</h4>
      <StyledContactBox>
        <span>Name:</span>
        <span className="text-light">{shownProduct.ownerFirstname}</span>
        <span>Ort:</span>
        <span className="text-light">{shownProduct.location}</span>
        <span>Kontakt:</span>
        <span className="text-light">{`Tel: ${shownProduct.phone}`}</span>
        <span>Details:</span>
        <span className="text-light">{shownProduct.ownerNotes}</span>
      </StyledContactBox>
    </>
  )
}

export const DividerLine = styled.div`
  height: 1px;
  width: 90vw;
  background-color: var(--grey-5);
  margin-top: 25px;
`

export const StyledPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 5px;
  border: 1px solid var(--lightblue);
  padding: 0 10px;
  margin-top: 15px;
`

export const StyledContactBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-row-gap: 5px;
`
