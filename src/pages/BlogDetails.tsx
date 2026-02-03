import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react";
import { blogDetails } from "@/data/blogDetails";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/shared/CTASection";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation"; // Removed
import { cn } from "@/lib/utils";
import FadeIn from "@/components/shared/FadeIn";
import StaggerText from "@/components/shared/StaggerText";

const BlogDetails = () => {
    const { id } = useParams<{ id: string }>();
    const blog = id ? blogDetails.find((b) => b.id === id) : undefined;
    // const { ref, isVisible } = useScrollAnimation(); // Removed
    // const { ref: relatedRef, isVisible: relatedVisible } = useScrollAnimation(); // Removed

    if (!blog) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{blog.title} | MonoArch*</title>
            </Helmet>

            <Navbar />

            <main className="pt-10 md:pt-20">
                <section className="py-12 md:py-12 px-6">
                    <div className="px-0 md:px-0 lg:px-10 xl:px-28 mx-auto container">
                        {/* Back Button */}
                        <FadeIn>
                            <Link
                                to="/blog"
                                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1f1f1f] hover:bg-white/10 transition-colors mb-8 group"
                            >
                                <ArrowLeft className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform" />
                            </Link>
                        </FadeIn>

                        {/* Header */}
                        <div className="mb-12 max-w-4xl">
                            <FadeIn delay={0.1}>
                                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 text-[#a1a1a1] text-sm md:text-base">
                                    <span className="bg-[#1f1f1f] px-3 py-1.5 rounded-full text-white font-medium flex items-center gap-2">
                                        <Tag className="w-4 h-4" /> {blog.category}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" /> {blog.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <User className="w-4 h-4" /> {blog.author}
                                    </span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.15}>
                                <h1 className="text-[26px] md:text-5xl lg:text-[50px] font-bold text-white max-w-4xl leading-[1.1] mb-8 tracking-tight">
                                    {blog.title}
                                </h1>
                            </FadeIn>
                        </div>

                        {/* Hero Image */}
                        <FadeIn delay={0.2} className="w-full">
                            <div className="rounded-[16px] md:rounded-[32px] overflow-hidden min-h-[200px] md:min-h-0 aspect-[16/10] md:aspect-[16/8] w-full bg-card mb-12 md:mb-20">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeIn>

                        {/* Content Body */}
                        <div className="max-w-3xl mx-auto">
                            <div className="space-y-12">
                                {blog.content.map((section, index) => (
                                    <FadeIn key={index} delay={0.3 + (index * 0.1)}>
                                        <div className="">
                                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                                {section.heading}
                                            </h2>
                                            <p className="text-[#a3a3a3] text-lg leading-relaxed whitespace-pre-line">
                                                {section.text}
                                            </p>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Blogs Section */}
                <section className="py-12 px-6 border-t border-white/5">
                    <FadeIn delay={0.2}>
                        <div className="px-0 md:px-0 lg:px-10 xl:px-28 mx-auto container">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Related Articles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {blogDetails
                                    .filter((b) => b.id !== id)
                                    .slice(0, 3)
                                    .map((relatedBlog, index) => (
                                        <FadeIn key={relatedBlog.id} delay={index * 0.1} className="h-full">
                                            <Link
                                                to={`/blog/${relatedBlog.id}`}
                                                className="group block h-full"
                                            >
                                                <div className="bg-[#1f1f1f] rounded-[24px] overflow-hidden transition-transform duration-300 h-full flex flex-col">
                                                    <div className="aspect-[4/3] relative overflow-hidden">
                                                        <img
                                                            src={relatedBlog.image}
                                                            alt={relatedBlog.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-medium text-white rounded-full">
                                                            {relatedBlog.category}
                                                        </div>
                                                    </div>
                                                    <div className="p-6 flex flex-col flex-grow">
                                                        <div className="flex items-center gap-4 text-xs text-[#a1a1a1] mb-3">
                                                            <span className="flex items-center gap-1.5">
                                                                <Calendar className="w-3.5 h-3.5" />
                                                                {relatedBlog.date}
                                                            </span>
                                                        </div>
                                                        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-white/90 transition-colors">
                                                            {relatedBlog.title}
                                                        </h3>
                                                        <div className="mt-auto flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all">
                                                            Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </FadeIn>
                                    ))}
                            </div>
                        </div>
                    </FadeIn>
                </section>

                <CTASection />
            </main>

            <Footer />
        </>
    );
};

export default BlogDetails;
