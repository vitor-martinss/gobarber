import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import {View, StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import AppProvider from './hooks'
import Routes from './routes'
import SplashScreen from 'react-native-splash-screen'

const App: React.FC = () => {
	useEffect(() => {
		SplashScreen.hide()
	},[])

	return (
		<NavigationContainer>
			<StatusBar barStyle='light-content' backgroundColor='#312e38' translucent/>
			<AppProvider>
				<View style={{ flex:1, backgroundColor: '#312e38'}}>
					<Routes />
				</View>
			</AppProvider>

		</NavigationContainer>
	)
}



export default App
