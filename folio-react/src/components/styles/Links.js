import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components'

export const NormalLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  color: #fff;
`

export const NormalAnchor = styled.a`
  list-style-type: none;
  text-decoration: none;
  color: #fff;
`

export const HyperLink = styled(NormalLink)`
  list-style-type: none;
  text-decoration: none;
  color: #959595;

  &:hover {
	  color: #fff;
	  transition: color 0.5s ease;
  }
`

export const LightHyperLink = styled(HyperLink)`
  color: #fff;
`