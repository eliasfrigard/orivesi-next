import { useState, useRef, useEffect } from 'react'
import { FaPlay } from 'react-icons/fa'
import { GiPauseButton } from 'react-icons/gi'
import React from 'react'
import Moment from 'react-moment'

export default function Player({ title, url }) {
  const audio = useRef()
  const slider = useRef()

  const [lastChanged, setLastChanged] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const handleOnClick = (event) => {
    if (isPlaying && event.target.tagName === 'DIV') return
    if (event.target.tagName === 'INPUT') return

    setIsOpen(true)

    const audioTag = audio.current

    setIsPlaying(!isPlaying)
    isPlaying ? audioTag.pause() : audioTag.play()
  }

  const handleSliderClick = () => {
    setLastChanged(new Date())

    const { duration } = audio.current
    const sliderValue = (duration / 100) * slider.current.value

    audio.current.currentTime = sliderValue

    setDuration(duration)
    setCurrentTime(sliderValue)
  }

  const handleTimeUpdate = (event) => {
    if (new Date() - lastChanged < 1000) return

    const { duration, currentTime } = event.nativeEvent.srcElement
    const currentProgres = (currentTime / duration) * 100

    slider.current.value = currentProgres

    setDuration(duration)
    setCurrentTime(currentTime)
  }

  const parseSeconds = (time) => {
    return Math.floor(time - Math.floor(time / 60) * 60)
  }

  const parseMinutes = (time) => {
    return Math.floor(time / 60)
  }

  return (
    <div
      name={url}
      onClick={handleOnClick}
      className={`flex gap-4 items-center w-full min-h-[56px] bg-accent-500 text-white rounded-lg py-4 px-6 shadow-lg ${
        !isOpen ? 'cursor-pointer' : ''
      } ${isOpen ? '' : 'hover:bg-accent-600 hover:shadow-xl'} duration-200`}
    >
      {isPlaying ? (
        <GiPauseButton className='text-xl duration-150 cursor-pointer'></GiPauseButton>
      ) : (
        <FaPlay className='text-xl duration-150 cursor-pointer'></FaPlay>
      )}
      <audio src={url} ref={audio} onTimeUpdate={handleTimeUpdate}></audio>

      <div className='w-full'>
        <div className={`${!isOpen ? 'hidden' : ''} flex w-full h-full gap-4 justify-center items-center`}>
          <div className='flex gap-1 justify-between'>
            <p>
              {parseMinutes(currentTime)}:{parseSeconds(currentTime) < 10 ? '0' : null}
              {parseSeconds(currentTime)}
            </p>
            <p> / </p>
            <p>
              {parseMinutes(duration)}:{parseSeconds(duration) < 10 ? '0' : null}
              {parseSeconds(duration)}
            </p>
          </div>
          <input
            style={{}}
            type='range'
            ref={slider}
            onChange={handleSliderClick}
            className='slider flex-1 h-1 rounded-lg bg-primary-500 appearance-none cursor-pointer range-sm  duration-300'
          />
        </div>
        <p className={`${isOpen ? 'hidden' : ''} font-medium tracking-wide`}>{title}</p>
      </div>
    </div>
  )
}
