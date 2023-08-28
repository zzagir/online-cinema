import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { push } = useRouter()

	const redirect = String(push) || '/'

	useEffect(() => {
		if (user) push(redirect)
	}, [user, redirect, push])
}
