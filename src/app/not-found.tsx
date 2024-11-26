'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation' // Se usa 'next/navigation' en vez de 'next/router' en Next 13+

const Custom404 = () => {
    const router = useRouter()

    useEffect(() => {
        // Redirige a la página de inicio después de un retraso de 1 segundo
        const timer = setTimeout(() => {
            router.push('/')
        }, 1000)

        // Limpia el temporizador si el componente se desmonta
        return () => clearTimeout(timer)
    }, [router])

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 text-center text-xl">
            <p className="text-gray-700 dark:text-gray-200">
                Página no encontrada, redirigiendo a la página de inicio...
            </p>
        </div>
    )
}

export default Custom404
