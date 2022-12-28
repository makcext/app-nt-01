import Link from 'next/link';
import {useState} from 'react';

function Home() {
	const [inputValue, setInput] = useState('');
	const props:string = inputValue;
	let pre:string = 'Hello: ';

	function getter():string {
		return pre+props	;
		}

	return (
		<>			
			<div>
			<input type="text" value={inputValue} onChange={e => setInput(e.target.value)}/>

			<Link 
				href={{
					pathname: '/page',
					query: {input: getter()},
				}}>
					<button>ok</button>
			</Link>
			</div>
		</>
	)
}

export default Home;