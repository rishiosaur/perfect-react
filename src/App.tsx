import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Routes } from './routing/index'
import { AuthProvider } from './modules/auth/react'

const App = () => (
	<>
		<AuthProvider>
			<Router>
				<Switch>
					<Routes />
				</Switch>
			</Router>
		</AuthProvider>
	</>
)

export default App
