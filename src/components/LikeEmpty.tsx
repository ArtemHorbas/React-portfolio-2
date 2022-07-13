import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const LikeEmpty: FC = () => {
  return (
	<div className="cart cart--empty">
		<h2>
			You haven not got your favourites <span>😕</span>
		</h2>
		<p>
			Maybe you did not add smth.
		<br />
			Back to main page to choose your favourites.
		</p>
		<img src='https://raw.githubusercontent.com/Archakov06/react-pizza-v2/master/src/assets/img/empty-cart.png' alt="Empty cart" />
		<Link to="/" className="button button--black">
			<span>Turn Back</span>
		</Link>
  </div>
  )
}
