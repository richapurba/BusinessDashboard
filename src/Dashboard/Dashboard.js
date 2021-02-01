import React from 'react';
import { Head } from "./Head";
import { Container } from "./Container";
import { GlobalStyle } from "./GlobalStyle";
import { Card } from "./Card";
import { Chart } from "./Chart";

export function Dashboard() {
  return (
	<>
		<GlobalStyle />
		<Container>
		<Head />
		<Chart />
		<Card height={400}>Table goes here</Card>
		</Container>
	</>
  );
}