import React, {Component} from 'react'

class Projects extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeTab: 0,
			projects: [
				{
					title: 'Countlessmiles',
					photo: require('../assets/cm.png'),
					url: 'https:www.countlessmiles.com',
					roles: [
						{
							title: 'Backend',
							skills: ['Nodejs', 'Expressjs', 'Mongodb']
						}
					]
				},
				{
					title: 'Zeedas',
					photo: require('../assets/zd.png'),
					url: 'https:www.countlessmiles.com',
					roles: [
						{
							title: 'Backend',
							skills: ['Nodejs', 'Expressjs', 'Mongodb']
						}
					]
				},
				{
					title: 'Paperdaz',
					photo: require('../assets/pd.png'),
					url: 'https:www.countlessmiles.com',
					roles: [
						{
							title: 'Backend',
							skills: ['Nodejs', 'Expressjs', 'Mongodb']
						}
					]
				},
				{
					title: 'Nester POD',
					photo: require('../assets/np.png'),
					url: 'https:www.countlessmiles.com',
					roles: [
						{
							title: 'Backend',
							skills: ['Nodejs', 'Expressjs', 'Mongodb']
						},
						{
							title: 'Frontend',
							skills: ['Vuejs', 'Axios']
						}
					]
				}
			]
		}
	}

	render() {
		return (
			<div
				style={{height: '92vh', overflowY: 'auto'}}
				className='d-flex mt-4 flex-column align-items-center'
			>
				{this.state.projects.map((project, index) => {
					return (
						<div
							style={{minHeight: '55vh'}}
							key={index}
							className='col-5 mb-5 border mb-5 px-0 d-flex flex-column align-items-start'
						>
							<div className='px-3'>
								<a href={project.url} target='_blank' rel='noopener noreferrer'>
									<h5>{project.title}</h5>
								</a>
							</div>
							<div className='px-3 w-100'>
								<div className='d-flex w-100 justify-content-between align-items-center'>
									<h5>Roles</h5>
									<div className='col-5'>
										{project.roles.map((role, ind) => {
											return (
												<div key={ind}>
													<div className='font-weight-bold'>{role.title}</div>
													<div>{role.skills.join(', ')}</div>
												</div>
											)
										})}
									</div>
								</div>
							</div>
							<img className='w-100' src={project.photo} alt='' srcset='' />
						</div>
					)
				})}
			</div>
		)
	}
}

export default Projects
