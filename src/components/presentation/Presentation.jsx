import '../../styles/presentation.scss'

import { NavLink } from 'react-router-dom'
import Team from './Team'
import Problems from './Problems'
import Algorythm from './Algorythm'
import Tools from './Tools'
import Scale from './Scale'

const Presentation = () => {
	return (
		<div className='presentation-wrapper'>
			<Team />
			<Problems />
			<Algorythm />
			<Tools />
			<Scale />
			
			<div className='button-wrapper' style={{ maxWidth: '400px', marginBottom: '70px' }}>
				<NavLink to={'/graph'} className='button premier-button select-zoom'>
					<p>Сканировать документ</p>
				</NavLink>
			</div>

		</div>
	)
}

export default Presentation
