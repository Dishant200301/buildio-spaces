const marqueeImages = [
  { src: "/images/work/work-1.jpg", tall: true },
  { src: "/images/work/work-2.jpg", tall: false },
  { src: "/images/work/work-3.jpg", tall: true },
  { src: "/images/work/work-4.jpg", tall: false },
  { src: "/images/work/work-5.jpg", tall: true },
  { src: "/images/work/work-6.jpg", tall: false },
];

export const PastWorkMarquee = () => {
  return (
    <section className="py-12 overflow-hidden">
      <div className="relative gradient-mask-edges">
        <div className="flex gap-6 animate-marquee pause-animation">
          {[...marqueeImages, ...marqueeImages].map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 overflow-hidden bg-card ${
                image.tall
                  ? "w-48 h-72 rounded-t-[80px] rounded-b-3xl"
                  : "w-56 h-48 rounded-3xl"
              }`}
            >
              <img
                src={image.src}
                alt="Past work"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
