"use client";

import Hero from "@/components/hero";
import Mentor from "@/components/mentor";
import Students from "@/components/students";
import Courses from "@/components/courses";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import WelcomeOverlay from "@/components/welcomeOverlay";
import StudentAchievements from "@/components/studentAchievements";

export default function Home() {
  return (
    <>
      <WelcomeOverlay />
      <Hero />
      <Mentor />
      <Students />
      <StudentAchievements/>
      <Courses />
      <Contact />
      <Navbar />
    </>
  );
}