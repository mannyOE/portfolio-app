import React, {Component} from 'react'

class Landing extends Component {
	render() {
		return (
			<div
				className='d-flex justify-content-center align-items-center landing-grid'
				style={{width: '100%', margin: 'auto', height: '100vh'}}
			>
				<div className='banner-text w-100 mx-md-5 mx-1'>
					<h1>Full Stack Web Developer</h1>

					<hr />

					<p>
						HTML/CSS | Bootstrap | JavaScript | Vue | Vue Native | React | React
						Native | NodeJS | Express | MongoDB | PostgreSQL | MySQL
					</p>

					<div className='col-12 d-flex alignitems-center justify-content-center'>
						<div className='social-links'>
							{/* LinkedIn */}
							<a
								href='https://linkedin.com/in/emmanuel-ahman'
								rel='noopener noreferrer'
								target='_blank'
							>
								<i className='fa fa-linkedin-square' aria-hidden='true' />
							</a>

							{/* Github */}
							<a
								href='https://github.com/mannyoe'
								rel='noopener noreferrer'
								target='_blank'
							>
								<i className='fa fa-github-square' aria-hidden='true' />
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Landing
