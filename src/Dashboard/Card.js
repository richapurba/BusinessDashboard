import styled from "styled-components";
import { medGrey } from "./GlobalStyle";

export const Card = styled.div`
	margin-top: 20px;
	padding: 20px;
	background-color: #fff;
	box-sizing: border-box;
	box-shadow: 0px 3px 5px ${medGrey};
	${({height}) => height && `height: ${height}px;`}
	@media (max-width: 1200px) {
		padding: 10px;
	}
`