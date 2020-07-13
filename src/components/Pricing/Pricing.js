import React from 'react'
import { DividerLine } from '../DividerLine/DividerLine'

export default function Pricing({ daily, weekly }) {
  return (
    <>
      <h4>Leihgebühr</h4>
      <div>
        <span>{`${daily} €`}</span>
        <span className="text-light"> pro Tag</span>
      </div>
      <div>
        <span>{`${weekly} €`}</span>
        <span className="text-light"> pro Woche</span>
      </div>
      <DividerLine />
    </>
  )
}
