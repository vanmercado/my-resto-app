import logo from '../photos/resto.png';
import facebook from '../photos/icon/facebook.png';
import gmail from '../photos/icon/gmail.png';
import instagram from '../photos/icon/instagram.png';
import discord from '../photos/icon/discord.png';
import { Link } from 'react-router-dom';

const Location = () => {
	return (
		<div className='location'>
			<div>
				<Link to='/'>
					<img src={logo} alt='resto app logo' className='restoLogo' />
				</Link>
			</div>
			<p>
				Our website is <b>Coming Soon!</b>
			</p>
			<p>Follow our social media accounts to be updated with our schedules.</p>
			<img src={facebook} alt='facebook icon' className='icons' />
			<img src={gmail} alt='gmail icon' className='icons' />
			<img src={instagram} alt='instagram icons' className='icons' />
			<img src={discord} alt='discord icon' className='icons' />
		</div>
	);
};

export default Location;
