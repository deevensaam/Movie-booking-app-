import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

//a function to display the remove favourites button
const RemoveFavourites = () => {
	return (
		<>
			<Button color="secondary"
			 variant="text" className='mr-2'>
				<DeleteIcon/>Remove
			</Button>
		</>
	);
};

export default RemoveFavourites;
