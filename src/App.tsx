import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';

import EditNote from './Components/EditNote';
import NewNote from './Components/NewNote';

const App = () => {
	return (
		<Container className='my-4'>
			<Routes>
				<Route path='/' element={<h1>home</h1>} />
				<Route path='/new' element={<NewNote />} />
				<Route path='/:id'>
					<Route index element={<h1>show</h1>} />
					<Route path='edit' element={<EditNote />} />
				</Route>

				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</Container>
	);
};

export default App;
