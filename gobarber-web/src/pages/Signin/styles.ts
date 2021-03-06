import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'
import signInBackgroundImg from '../../assets/sign-in-background.png'

export const Container = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: stretch;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	max-width: 70rem;
	padding: 0 5%;

	@media (min-width: 768px) {
		padding: 0;
	}
	@media (min-width: 1240px) {
		max-width: 50%;
	}
`

const appearFromLeft = keyframes`
	from {
		opacity: 0;
		transform: translateX(-5rem)
	}
	to {
		opacity: 1;
		transform: translateX(0)

	}
`

export const AnimationContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation: ${appearFromLeft} 1s;
	width: 100%;
	padding: 3rem 0;

	form {
		margin: 0.8rem 0;
		max-width: 100%;
		text-align: center;

		@media (min-width: 768px) {
			max-width: 60%;
		}

		h1 {
			margin-bottom: 2.4rem;
		}

		a {
			color: #f4ede8;
			display: block;
			margin-top: 2.4rem;
			text-decoration: none;
			transition: color 0.2s;
			&:hover {
				color: ${shade(0.2, '#f4ede8')};
			}
		}
	}

	> a {
		color: #ff9000;
		display: flex;
		align-items: center;
		margin-top: 2.4rem;
		text-decoration: none;
		transition: color 0.2s;
		svg {
			margin-right: 1.6rem;
		}
		&:hover {
			color: ${shade(0.2, '#ff9000')};
		}
	}
`

export const Background = styled.div`
	flex: 1;
	background: url(${signInBackgroundImg}) no-repeat center;
	background-size: cover;
`
