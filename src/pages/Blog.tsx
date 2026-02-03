import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogs } from "@/data/blog";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation"; // Removed
import { cn } from "@/lib/utils";
import FadeIn from "@/components/shared/FadeIn";

const Blog = () => {
    // const { ref, isVisible } = useScrollAnimation(); // Removed
    // const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(); // Removed

    return (
        <>
            <Helmet>
                <title>Blog | MonoArch*</title>
                <meta
                    name="description"
                    content="Read our latest insights on architecture, interior design, and sustainable living."
                />
            </Helmet>

            <Navbar />

            <main className="pt-12 md:pt-24">
                <section className="py-12 md:py-12 px-6">
                    <div className="px-0 md:px-0 lg:px-10 xl:px-28 mx-auto container">
                        <FadeIn>
                            <SectionHeader
                                badge="Insights"
                                title="Stories regarding architecture and interior design"
                                description="Explore the latest technologies, and ideas shaping the built environment."
                                className="mb-16 md:mb-20"
                            />
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            {blogs.map((blog, index) => (
                                <FadeIn key={blog.id} delay={index * 0.1} className="h-full">
                                    <Link
                                        to={`/blog/${blog.id}`}
                                        className="group block h-full"
                                    >
                                        <div className="bg-[#1f1f1f] rounded-xl md:rounded-[32px] overflow-hidden transition-all duration-300 h-full flex flex-col">
                                            {/* Image */}
                                            <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white z-10">
                                                    {blog.category}
                                                </div>
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-8 flex flex-col flex-grow">
                                                <div className="flex items-center gap-4 mb-4 text-sm text-[#a1a1a1]">
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar className="w-4 h-4" />
                                                        {blog.date}
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <User className="w-4 h-4" />
                                                        {blog.author}
                                                    </div>
                                                </div>

                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-white/90 transition-colors">
                                                    {blog.title}
                                                </h3>

                                                <p className="text-[#a1a1a1] text-base mb-6 line-clamp-3 leading-relaxed">
                                                    {blog.description}
                                                </p>

                                                <div className="mt-auto flex items-center text-white font-medium text-sm">
                                                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                <CTASection />
            </main>

            <Footer />
        </>
    );
};

export default Blog;
