'use client'

import React, { Fragment, useEffect, useState } from 'react'

import { Pill } from './Pill'

export const LengthIndicator: React.FC<{
  text?: string
  minLength?: number
  maxLength?: number
}> = props => {
  const { text, minLength = 0, maxLength = 0 } = props

  const [labelStyle, setLabelStyle] = useState({
    color: '',
    backgroundColor: '',
  })

  const [label, setLabel] = useState('')
  const [barWidth, setBarWidth] = useState<number>(0)

  useEffect(() => {
    const textLength = text?.length || 0

    if (textLength === 0) {
      setLabel('Відсутнє')
      setLabelStyle({
        backgroundColor: 'red',
        color: 'white',
      })
      setBarWidth(0)
    } else {
      const progress = (textLength - minLength) / (maxLength - minLength)

      if (progress < 0) {
        const ratioUntilMin = textLength / minLength

        if (ratioUntilMin > 0.9) {
          setLabel('Майже готово')
          setLabelStyle({
            backgroundColor: 'orange',
            color: 'white',
          })
        } else {
          setLabel('Занадто коротко')
          setLabelStyle({
            backgroundColor: 'orangered',
            color: 'white',
          })
        }

        setBarWidth(ratioUntilMin)
      }

      if (progress >= 0 && progress <= 1) {
        setLabel('Добре')
        setLabelStyle({
          backgroundColor: 'green',
          color: 'white',
        })
        setBarWidth(progress)
      }

      if (progress > 1) {
        setLabel('Занадто довго')
        setLabelStyle({
          backgroundColor: 'red',
          color: 'white',
        })
        setBarWidth(1)
      }
    }
  }, [minLength, maxLength, text])

  const textLength = text?.length || 0

  const charsUntilMax = maxLength - textLength
  const charsUntilMin = minLength - textLength

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Pill label={label} color={labelStyle.color} backgroundColor={labelStyle.backgroundColor} />
      <div
        style={{
          marginRight: '10px',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          lineHeight: 1,
        }}
      >
        <small>
          {`${text?.length || 0}/${minLength}-${maxLength} симв., `}
          {(textLength === 0 || charsUntilMin > 0) && (
            <Fragment>{`${charsUntilMin} залишилось`}</Fragment>
          )}
          {charsUntilMin <= 0 && charsUntilMax >= 0 && (
            <Fragment>{`${charsUntilMax} залишилось щє`}</Fragment>
          )}
          {charsUntilMax < 0 && <Fragment>{`${charsUntilMax * -1} символів зайві`}</Fragment>}
        </small>
      </div>
      <div
        style={{
          height: '2px',
          width: '100%',
          backgroundColor: '#F3F3F3',
          position: 'relative',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${barWidth * 100}%`,
            backgroundColor: labelStyle.backgroundColor,
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        />
      </div>
    </div>
  )
}
