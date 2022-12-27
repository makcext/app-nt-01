import Link from 'next/link';
import { useState } from 'react';


 function Home(type: any) {
	const [inputValue, setInput] = useState('');
	const props = inputValue;

	function getter() {
		return(props);
		}

	return (
		<>			
			<div>
			<input type="text" value={inputValue} onChange={e => setInput(e.target.value)}/>

			<Link 
				href={{
					pathname: '/page',
					query: {iV: getter()},
				}}>
					<button>ok</button>
			</Link>
			</div>
			
		</>
	)
}



export default Home;