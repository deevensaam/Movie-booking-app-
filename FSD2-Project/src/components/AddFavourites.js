//Importing Required packages from different sources.
import React from 'react';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddFavourite = () => {  //Initializing the local state of the component.
	return (
		<>
			<Button color="secondary"      //Button Colour for the Add to favourite button 
			 variant="text" className='mr-2'
			 >
			<AddCircleIcon/>Add</Button>  {/*Add to favourite button name*/} 
		</>
	);
};

export default AddFavourite;
