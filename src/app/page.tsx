"use client";

import Hero from "@/components/hero";
import Mentor from "@/components/mentor";
import Students from "@/components/students";
import Courses from "@/components/courses";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import WelcomeOverlay from "@/components/welcomeOverlay";
import StudentAchievements from "@/components/studentAchievements";
import MentorWork from "@/components/mentorWork";
import OurActivities from "@/components/ourActivities";
import ModernCarousel from "@/components/ModernCarousel";

export default function Home() {
  return (
    <>
      <WelcomeOverlay />
      <Hero />
      <Mentor />
      <MentorWork/>
      <Students />
      <OurActivities/>
      <ModernCarousel/>
      <StudentAchievements/>
      <Courses />
      <Contact />
      <Navbar />
    </>
  );
}