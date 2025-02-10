import React from 'react';
import styled from 'styled-components';

const Art = styled.article`
	width:50%;
	background-color: #CB356B;
	margin:1% 0;
	padding:0.5%;
	display:flex;
	flex-flow: column nowrap;
	justify-content:space-evenly;
	align-items:center;
	border-radius:5px;
	font-size:1.25em;

	&:nth-child(even){
		background-color:#4c4c4c;
	}
`;

const Header = styled.header`
	width:100%;
	height:25%;
`;

const H3 = styled.h3`
	width:100%;
	height:100%;
	color:white;
	font-style: italic bold;
	letter-spacing: 2px;
	font-variant:small-caps;
`;

const P = styled.p`
	width:100%;
	color:rgba(255,255,255,0.75);
	letter-spacing: -0.5px;
`;

const Footer = styled.footer`
	width:100%;
	color:rgba(255,255,255,0.4);
	letter-spacing: -0.5px;
	margin:1% 0;
`;

const Fig = styled.figure`
	width:100%;
	border-radius:10px;
	display:flex;
	justify-content:center;
	align-items:center;
	padding:1.5% 0;
`;

const Img = styled.img`
	display:block;
	height:25vh;
	border-radius: 5px;
	filter:grayscale(100%);
	transform: rotate(2deg);

	&:hover{
		transition:0.2s ease-in-out;
		transform:rotate(0);
		filter:grayscale(0);
	}
`;

	// box-shadow: 0px 5px 5px 1px rgba(0,0,0,0.3);

export default function Article({ title, content, time, fImg, sImg}){
	return(
		<Art>
			<Header>
				<H3>{title}</H3>
			</Header>

			<Fig>
				<Img src={ fImg }/>
				<Img src={ sImg }/>
			</Fig>

			<P>{ content }</P>

			<Footer>{ time }</Footer>
		</Art>
	);
} 