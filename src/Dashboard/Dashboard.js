import React from 'react';
import { Head } from "./Head";
import { Container } from "./Container";
import { GlobalStyle } from "./GlobalStyle";
import { Card } from "./Card";
import { Chart } from "./Chart";
import { VirtualizedTable } from "./Table";

export function Dashboard() {
  return (
	<>
		<GlobalStyle />
		<Container>
		<Head />
		<Chart />
		<VirtualizedTable />
		</Container>
	</>
  );
}