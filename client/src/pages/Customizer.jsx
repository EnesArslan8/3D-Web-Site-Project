import React,{useState,useEffect} from 'react'
import { AnimatePresence } from 'framer-motion'
import { snapshot } from 'valtio'
import state from '../store'
import config from '../config/config'
import {download} from '../assets'
import {downloadCanvasToImage,reader} from '../config/helpers'
import {EditorTabs,FilterTabs,DecalTypes} from '../config/constants'
import { fadeAnimation,slideAnimation } from '../config/motion'

const Customizer = () => {
  return (
    <div>Customizer</div>
  )
}

export default Customizer