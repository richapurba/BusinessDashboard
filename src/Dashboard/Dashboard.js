import React from 'react';
import { Head } from "./Head";
import { Container } from "./Container";
import { GlobalStyle } from "./GlobalStyle";

export function Dashboard() {
  return (
	<>
		<GlobalStyle />
		<Container>
		<Head />
		</Container>
	</>
  );
}