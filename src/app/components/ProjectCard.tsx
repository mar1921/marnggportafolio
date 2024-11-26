// import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        image: string;
    };
    isDarkMode: boolean; // Añade esta propiedad para manejar el modo oscuro.
}

export default function ProjectCard({ project, isDarkMode }: ProjectCardProps) {
    return (
        <div
            className={`bg-white ${isDarkMode ? 'dark:bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 dark:hover:bg-gray-700`}
        >
            <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                width={300}
                height={200}
            />
            <div className="p-6">
                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {project.title}
                </h3>
                <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                </p>
                {/* <Link href={`/project/primero`} passHref> */}
                <b
                    className={`mt-4 inline-block text-blue-600 font-medium hover:underline transition-colors ${isDarkMode ? 'dark:text-blue-400' : 'text-blue-600'}`}
                >
                    Ver más
                </b>
                {/* </Link> */}
            </div>
        </div>
    );
}

