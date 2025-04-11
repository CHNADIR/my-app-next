import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import SideBar from "@/component/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBar fixe en haut */}
      <NavBar />
      
      {/* Section principale avec sidebar et contenu */}
      <div className="flex flex-grow pt-16">
        {/* Sidebar à gauche */}
        <aside className="w-64 flex-shrink-0">
          <SideBar />
        </aside>
        
        {/* Contenu principal */}
        <main className="flex-grow p-6">
          <div className="container mx-auto flex flex-col gap-16 items-center">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-4xl font-bold text-center text-gray-800">
                Bienvenue sur notre site web
              </h1>
              <p className="text-lg text-center text-gray-600">
                Nous sommes ravis de vous accueillir ici.
              </p>
              <Image
                src="/images/hero-image.jpg"
                alt="Image d'accueil"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg text-center text-gray-600">
                Découvrez nos services et notre expertise.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                Nos Services
              </h2>
              <p className="text-lg text-center text-gray-600">
                Nous offrons une variété de services pour répondre à vos besoins.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
              </ul>
              <p className="text-lg text-center text-gray-600">
                Contactez-nous pour plus d'informations.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                À propos de nous
              </h2>
              <p className="text-lg text-center text-gray-600">
                Nous sommes une entreprise dédiée à fournir des solutions de qualité.
              </p>
              <p className="text-lg text-center text-gray-600">
                Notre équipe est composée de professionnels expérimentés et passionnés.
              </p>
              <p className="text-lg text-center text-gray-600">
                Nous croyons en l'innovation et en l'excellence.
              </p>
            </div>
          </div>
        </main>
      </div>
      
      {/* Footer en bas */}
      <Footer />
    </div>
  );
}
