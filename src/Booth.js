import React from 'react';
import {useState} from 'react';
import VotingCard from './VotingCard';
import Result from './Result';



export default function Booth({questions}){

	const [state, setState] = useState('voting');

	return(

		<>
			{state==='voting' && <VotingCard/>}
		</>
	)
}