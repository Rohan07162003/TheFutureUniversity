import Image from "next/image";
import { Inter } from "next/font/google";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import axios from "axios";
import Feed from "@/components/Feed";

const inter = Inter({ subsets: ["latin"] });

console.log("hello world")
export default function Home() {
  
  return (
    <>
      
      <MaxwidthWrapper>
        <div className="mx-auto text-center py-20 flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">Your Next Career Move <br /><span className="text-blue-600">
            Starts Here
          </span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">When you are searching for a job there a few things you can do to get the most out of your search
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={'/jobs'} className={buttonVariants()}>Browse Trending</Link>
            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </div>
        
        <Feed/>
      </MaxwidthWrapper>
    </>
  );
}
