import React from 'react';
import styled from 'styled-components';


const Form = styled.form`
	background-color:transparent;
	border:none;
	display:flex;
	flex-flow: column nowrap;
	justify-content:space-evenly;
	align-items:center;
	width:100%;
	min-height:15vh;
`;

const Bar = styled.input`
	background-color:transparent;
	border:none;
	border-bottom:2px solid white;
	padding:0.75% 0;
	color:white;
	letter-spacing:1px;
	text-align:center;
	margin:2% 0;
	width:20%;
	font-size:1.15em;

	&:focus{
		outline:none;
	}
`;

const Submit = styled.input`

	background-color:#CB356B;
	border:none;
	padding:0.5% 1.5%;
	color:white;
	cursor:pointer;
	font-size:1.25em;
	border-radius:5px;

	&:hover{
		transition: 0.1s ease-in-out;
    	background-color:#F2548D;
	}

 	&:active{
    	transition: none;
    	background-color:#61000E;
	}
`;

export default function SearchBar({ref, func}){
	return (
		<Form>
			<Bar ref={ref} type='text' placeholder="Pokemon's name/ID"></Bar>
			<Submit type='submit' onClick={func}></Submit>
		</Form>
	);
}