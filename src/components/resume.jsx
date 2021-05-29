import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
	render() {
		return (
			<div style={{height: '92vh'}}>
				<Grid>
					<Cell col={4}>
						<h2 style={{paddingTop: '2em'}}>Emmanuel Onoja Ahman</h2>
						<h4 style={{color: 'grey'}}>Software Engineer</h4>
						<hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
						<p>
							A gifted software engineer with a thirst for knowledge and growth,
							passionate about mentoring, developing, deploying and maintaining
							standard software applications.
						</p>
						<hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
						<h5>Address</h5>
						<p>
							No. 20, Daniel Ishaga Road, Off Atiku Street, Rayfield, Anglo Jos,
							Plateau State, Nigeria.
						</p>
						<h5>Phone</h5>
						<p>(+234)8138641965</p>
						<h5>Email</h5>
						<p>ahmanemmanuel@gmail.com</p>
						<h5>Web</h5>
						<p>emmanuel-ahman.netlify.com</p>
						<hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
					</Cell>
					<Cell
						style={{height: '92vh', 'overflow-y': 'auto'}}
						className='resume-right-col'
						col={8}
					>
						<h2>Education</h2>

						<Education
							startYear={2012}
							endYear={2017}
							schoolName='Federal University of Technology, Minna. Niger state, Nigeria.'
							schoolDescription='Computer Engineering degree with honors'
						/>
						<hr style={{borderTop: '3px solid #e22947'}} />

						<h2>Experience</h2>

						<Experience
							startYear={2018}
							endYear={2021}
							jobName='Natterbase'
							jobDescription='Javascript web engineer'
						/>

						<Experience
							startYear={2018}
							endYear={2021}
							jobName='Freelance'
							jobDescription='Remote Engineer'
						/>
						<hr style={{borderTop: '3px solid #e22947'}} />
						<h2>Skills</h2>
						<Skills skill='javascript' progress={100} />
						<Skills skill='HTML/CSS' progress={90} />
						<Skills skill='NodeJS' progress={85} />
						<Skills skill='React' progress={50} />
						<Skills skill='React Native' progress={50} />

						<Skills skill='Vue' progress={90} />
						<Skills skill='Vue Native' progress={70} />

						<Skills skill='Nuxt' progress={90} />
						<Skills skill='Express.js' progress={90} />
						<Skills skill='Mongodb' progress={85} />
						<Skills skill='PostgreSQL' progress={50} />
						<Skills skill='MySQL' progress={70} />
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume
