import React, { Component, useContext } from 'react';
import SVGIcon from './SVGIcon'
import styled, { css } from 'styled-components'
import { NormalAnchor } from './styles/Links'
import { SVGIconContainer, FlexCenter, LeftCol, RightCol } from './styles/Containers'

const TitleContainer = styled.div`
	text-align: center;
`

const a = {
	textAlign: 'left',
	color: 'purple'
}

function Title(props) {
	return (

		<header>
			<LeftCol unfocus={false}>
				<FlexCenter>
				<TitleContainer>
					<h3>Roland Warburton</h3>
					<NormalAnchor href="https://goo.gl/maps/SEBJEfeRSAbGtLmv9" id="location">Melbourne, VIC</NormalAnchor>
				</TitleContainer>
				<SVGIconContainer>
					<SVGIcon iconName="github" linksTo="/test"></SVGIcon>
					<SVGIcon iconName="email" linksTo="/test"></SVGIcon>
					<SVGIcon iconName="cv" linksTo="/test"></SVGIcon>
				</SVGIconContainer>
				</FlexCenter>
			</LeftCol>
		</header >
	);
}

export default Title;

// const styles = {}
// styles.test = {
// 	"backgroundColor": "red",
// 	"transform": "translate(-200px)",
// 	"transition": "transform 300ms ease-in-out"
// }