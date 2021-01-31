import React from 'react';
import { Head } from "./Head";
import { Container } from "./Container";
import { GlobalStyle } from "./GlobalStyle";
import { Card } from "./Card";

export function Dashboard() {
  return (
	<>
		<GlobalStyle />
		<Container>
		<Head />
		<Card height={400}>Chart</Card>
		<Card height={400}>Table</Card>
		</Container>
	</>
  );
}