import Image from "next/image";
import { Inter } from "next/font/google";
import ProjectHome from "./components/ProjectHome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="mx-16">
      <section className="hero flex flex-col justify-between mx-auto items-start py-24 md:flex-row md:items-end  md:py-48 ">
        <h1>
          Clario <br />
          Cadran
        </h1>
        <h3 className="text-right ml-auto ">Web Developer</h3>
      </section>
      <section className="about mt-12 sm:mt-32 lg:48">
        <h2>About me</h2>
        <div className="img-container">
          <img src="/images/about.png" alt="photo clario" />
        </div>
        <p>
          Bienvenue sur mon Portfolio ! <br />
          <br />
          Je suis Clario Cadran, passionné par le développement web dans son
          ensemble et pour l’instant plus orienté sur le front-end. <br />
          <br />
          Je suis actuellement Étudiant en première année du BUT MMI (Métiers du
          Multimédia et de l’Internet) à Bordeaux.
          <br />
          <br />
          Dans ce portfolio vous allez pouvoir retrouver tous les projets que
          j’ai pu réaliser dans le cadre de mes études et à côté de celles-ci.
        </p>
      </section>
    </main>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
    //     Hello and Welcome 👋&nbsp;
    //     <span className="whitespace-nowrap">
    //       I&apos;m <span className="font-bold">Clario</span>.
    //     </span>
    //   </p>
    //   <ProjectHome />
    //   <img src="/images/logos/CSS.svg" alt="" width="50px" height="50px" />
    // </main>
  );
}
