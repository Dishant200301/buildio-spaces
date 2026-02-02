import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionBadge } from "@/components/shared/SectionBadge";


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#141414] relative">
      <Navbar />
      {/* Ambient background effect */}

      <main className="flex-grow flex flex-col items-center justify-center relative z-10 w-full max-w-3xl py-40 mx-auto p-4 space-y-8 animate-fade-in-up">
        {/* Status Badge */}
        <SectionBadge>Page not found</SectionBadge>


        {/* Main Message Group */}
        <div className="space-y-6 items-center text-center mx-auto ">
          {/* Primary Heading */}
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[1.1]">
            Looks like you
            <br className="hidden md:block" />
            took a wrong turn
          </h1>

          {/* Supporting Description */}
          <p className="text-muted-foreground text-lg md:text-xl font-normal max-w-4xl mx-auto leading-relaxed">
            The page you're looking for might’ve been moved, renamed, or doesn’t exist.
          </p>
        </div>

        {/* Call to Action */}
        <div className="pt-4">
          <div className="relative z-10 mt-auto">
            <Link
              to="/"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white hover:border-2 hover:border-[#565656] text-black text-md font-medium hover:bg-[#434343] hover:text-white "
            >
              Go back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
