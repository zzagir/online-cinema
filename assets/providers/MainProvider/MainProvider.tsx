import Layout from '@/components/layout/Layout'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './queryClient'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import ReduxToastrNew from '../ReduxToastrNew'
import HeadProvider from 'providers/HeadProvider/HeadProvider'

export default function MainProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReduxToastrNew />
				<Layout>{children}</Layout>
			</QueryClientProvider>
		</Provider>
	)
}
