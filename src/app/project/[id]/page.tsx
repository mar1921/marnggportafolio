'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from "react";


interface ProjectPageProps {
    params: Promise<{ id: string }>; // Make `params` a promise
}

export default function ProjectPage({ params }: ProjectPageProps) {
    // Ensure params are resolved before rendering
    const [projectParams, setProjectParams] = useState<{ id: string } | null>(null);

    useEffect(() => {
        params.then((resolvedParams) => {
            setProjectParams(resolvedParams);
        });
    }, [params]);

    if (!projectParams) {
        return <div>Loading...</div>; // Handle loading state
    }

    const { id } = projectParams;

    // Simulación de los datos del proyecto
    const project = {
        id,
        title: `Proyecto ${id}`,
        description: `Descripción detallada del proyecto ${id}`,
        image: `/images/proyecto${id}.jpg`, // Asegúrate de que estas imágenes estén disponibles
    };

    return (
        <div className="bg-gray-100 text-gray-800">
            <header className="text-center py-10">
                <h1 className="text-4xl font-bold">{project.title}</h1>
                <p className="mt-4 text-lg text-gray-600">{project.description}</p>
            </header>

            <div className="container mx-auto px-4">
                <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded shadow mx-auto"
                    width={600}
                    height={400}
                />
            </div>

            <footer className="text-center py-6 text-sm text-gray-600 mt-10">
                <Link href="/" className="text-blue-500 hover:underline">Volver al Portafolio</Link>
            </footer>
        </div>
    );
}
