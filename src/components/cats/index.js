import React from 'react'
import _ from 'lodash'
import Cats from './cats'

export default (props) =>
  <div>
  
    <Cats onGenCat={() => props.onGenCat()} currentCat={props.currentCat}/>
  </div>