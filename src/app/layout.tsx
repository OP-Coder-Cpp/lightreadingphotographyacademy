import "./globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Light Reading Photography Academy",
    template: "%s | Light Reading Photography Academy",
  },

  description:
    "Professional Photography Institute offering Beginner to Advanced Studio Lighting and Post Processing courses. Learn from award-winning mentor with international honours.",

  keywords: [
    "Photography Course",
    "Photography Classes",
    "Studio Lighting Course",
    "Photography Academy India",
    "Photography Institute Near Me",
    "Best Photography Mentor",
  ],

  authors: [{ name: "Light Reading Photography Academy" }],

  openGraph: {
    title: "Light Reading Photography Academy",
    description:
      "Learn professional photography with hands-on practical sessions and international recognition.",
    url: "https://yourdomain.com",
    siteName: "Light Reading Photography Academy",
    images: [
      {
        url: "/LRP Logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-black text-white overflow-x-hidden`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Light Reading Photography Academy",
              image: "https://yourdomain.com/logo.png",
              url: "https://yourdomain.com",
              telephone: "+918961195186",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "13, Rishi Bankim Chandra Rd, near Bank of Baroda, near DTDC",
                addressLocality: "Naihati",
                addressRegion: "West Bengal",
                postalCode: "743165",
                addressCountry: "IN",
              },
              sameAs: [
                "https://facebook.com/profile.php?id=100063651492600",
                "https://instagram.com/lightreadingphotography21",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
};