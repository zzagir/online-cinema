'use client'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export default function MainProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
