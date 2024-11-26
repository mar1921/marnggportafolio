'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import ProjectCard from "@/app/components/ProjectCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';



export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Revisa la preferencia del sistema
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const projects = [
    { id: 1, title: 'Proyecto 1', description: 'Descripción breve del proyecto 1', image: 'images/proyecto1.jpg' },
    { id: 2, title: 'Proyecto 2', description: 'Descripción breve del proyecto 2', image: 'images/proyecto2.jpg' },
    { id: 3, title: 'Proyecto 3', description: 'Descripción breve del proyecto 3', image: 'images/proyecto3.jpg' },
    { id: 4, title: 'Proyecto 3', description: 'Descripción breve del proyecto 3', image: 'images/proyecto3.jpg' },
    { id: 5, title: 'Proyecto 3', description: 'Descripción breve del proyecto 3', image: 'images/proyecto3.jpg' },
    { id: 6, title: 'Proyecto 3', description: 'Descripción breve del proyecto 3', image: 'images/proyecto3.jpg' },
    { id: 7, title: 'Proyecto 3', description: 'Descripción breve del proyecto 3', image: 'images/proyecto3.jpg' },
  ];

  return (
    <div style={{ overflow: 'hidden' }}
      className={`min-h-screen px-16 pt-16 grid grid-rows-[auto_1fr_auto] font-sans transition-colors ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'}`}>
      {/* Header */}
      <header className="flex justify-between items-center w-full">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Mariano Gandin</h1>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="ml-4 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400"
        >
          {isDarkMode ? <Image src="sun.svg" alt="sun" width={30} height={30} /> : <Image src="moon.svg" alt="moon" width={30} height={30} />}
        </button>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center sm:items-start gap-2 mt-2">
        {/* <Image
          className="rounded-full dark:invert"
          src="/profile.jpg"
          alt="Tu nombre"
          width={160}
          height={160}
          priority
        /> */}
        <p className="text-lg text-center ">
          Desarrollador Web Full Stack en Laravel y en creación de aplicaciones modernas con tecnologías como Next.js, Node.js y TypeScript.
        </p>

        {/* Social Links */}
        <div className="flex gap-2 items-center flex-col sm:flex-row">

          <a
            href="https://www.linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 rounded-full py-2 px-6 text-sm sm:text-base hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
          >
            <Image src="linkedin.svg" alt="LinkedIn" width={20} height={20} />
            {/* className="filter dark:invert" /> */}
            LinkedIn
          </a>
          <a
            href="https://www.mail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 rounded-full py-2 px-6 text-sm sm:text-base hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
          >
            <Image src="mail.svg" alt="LinkedIn" width={20} height={20} />
            Correo
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 rounded-full py-2 px-6 text-sm sm:text-base hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
          >
            <Image src="github.svg" alt="GitHub" width={20} height={20} className="dark:invert" />
            GitHub
          </a>
        </div>
      </main>

      {/* Portfolio Section */}
      <section className="container mx-auto mb-12 pb-12">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
          style={{ overflow: 'visible', width: '400px', height: 'auto' }}
          initialSlide={2}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} isDarkMode={isDarkMode} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
