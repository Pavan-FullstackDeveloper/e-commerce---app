import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import { Gents,Ladies} from '../data'

import WomenCollections from '../components/WomenCollections'
import Ladiesbanner from '../components/Ladiesbanner'

const MainPage = () => {
    
    const [gentsFashion,setGentsFashion]=useState(Gents)
    const [ladiesFashion,setLadiesFashion]=useState(Ladies)
  return (

    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion={gentsFashion}/>
        <Ladiesbanner/>
        <WomenCollections ladiesFashion={ladiesFashion}/>
        <Footer/>
    </div>
    
  )
}

export default MainPage