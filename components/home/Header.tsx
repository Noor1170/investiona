"use client";
import React from "react";
import Logo from "../Logo";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import useCompany from "../hooks/useCompany";

const Header = () => {
  const { company } = useCompany();

  return (
    <header className="max-w-full w-full h-fit min-h-screen bg-[#f7f7f7] bg-cover flex flex-col gap-5">
      <nav className="flex justify-between px-5 sm:px-10 md:px-20 py-8 items-center">
        <Logo home />

        <div className="flex items-center gap-3 w-full max-w-[120px] sm:max-w-[250px]">
          <Link className="w-full hidden sm:block" href={"/register"}>
            <Button  small onClick={() => {}} label={"S'inscrire"} />
          </Link>

          <Link className="w-full" href={"/login"}>
            <Button outline small onClick={() => {}} label={"Se connecter"} />
          </Link>
        </div>
      </nav>
      {/* ff9a01 */}
      {/* ff7b0f */}

      <section
        className="px-5 sm:px-10 md:px-20 w-full text-white h-full 
      flex justify-between items-center 
      gap-20 flex-col lg:flex-row pb-20"
      >
        <div className="flex flex-col gap-5 w-full">
          <h1
            className="font-bold text-3xl leading-[2.5rem] text-black
          sm:text-4xl sm:leading-[3rem] md:text-5xl md:leading-[4rem]"
          >
            Effectuez des transferts mondiaux, investissez, empruntez et faites fructifier votre argent avec{" "}
            {/* {company?.name} */}
Entrez le nom de l'entreprise
          </h1>

          <h1 className="text-gray-800 text-sm ">
          Nous sommes là pour vous aider à organiser une collecte de richesse sécurisée et pratique.
          </h1>

          <div className="w-full max-w-[400px]">
            <Link className='bg-black' href={"/register"}>
              <Button onClick={() => {}}  label={"Commencer"} />
            </Link>
          </div>
        </div>

        <div className="flex gap-5 w-full justify-center">
          <div className="max-w-[250px] max-h-[500px] w-full">
            <Image
              priority
              src={"/phone1.jpeg"}
              alt={"desktop"}
              layout="responsive"
              width={150}
              height={200}
            />
          </div>

          <div className="max-w-[250px] max-h-[500px] w-full translate-y-10">
            <Image
              priority
              src={"/phone2.jpeg"}
              alt={"desktop"}
              layout="responsive"
              width={150}
              height={150}
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
