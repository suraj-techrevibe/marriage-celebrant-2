

type GalleryItemType = {
  id: number;
  image: string;
};

interface GallerySectionProps {
  items: GalleryItemType[];
}

export default function GallerySection({ items }: GallerySectionProps) {
  return (
    <section className="section-main">
      <div className="container-main">

        <div className="text-center mb-12">
          <h2 className="text-primary">Our Gallery</h2>
          <p className="text-muted mt-3">
            A glimpse of our recent events and special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="card overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.4)" }}
                >
                
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}