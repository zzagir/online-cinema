'use client'

import Layout from '@/components/layout/Layout'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './queryClient'

export default function MainProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}
