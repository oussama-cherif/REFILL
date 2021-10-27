import React from "react"
import './wallet.css'
import Credit from '../components/cards/Credit'
import Cards from "../components/cards/Cards"
import Card from "../components/cards/Card"
import { Link } from "react-router-dom"

function Wallet() {
  return(
    
    <div>
      <div className="wave">
        <div className="wallet-head">
          <h1>Refill</h1>
          <Link to='/settings' className="settings"><i className="fas fa-cog fa-2x"></i></Link>
        </div>
        <h2>My Wallet </h2>
        <Credit />     
      </div>
      <Card />
      <Cards/>
      <div className="icon-links">
      <Link to='/save' className="icon"><i class="fas fa-charging-station fa-2x"></i></Link>
      <Link to='/create-operator' className="icon"><i class="fas fa-plus fa-2x"></i></Link>
      </div>
    </div>
  )
}

export default Wallet