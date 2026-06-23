import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "Gallery — Safety Net Installation Photos",
  description: "View our gallery of safety net and invisible grill installations in Bangalore. Balcony nets, bird nets, children safety nets — see our work quality.",
  path: "/gallery",
  keywords: ["safety net photos bangalore", "invisible grill installation photos", "nagamani safety nets gallery"],
});

const GALLERY_SLOTS = [
  { id: 1, label: "Balcony Safety Net", path: "/images/gallery/balcony-1.jpg" },
  { id: 2, label: "Invisible Grills", path: "/images/gallery/invisible-grills-1.jpg" },
  { id: 3, label: "Bird Net Installation", path: "/images/gallery/bird-net-1.jpg" },
  { id: 4, label: "Children Safety Net", path: "/images/gallery/children-net-1.jpg" },
  { id: 5, label: "Pigeon Net", path: "/images/gallery/pigeon-net-1.jpg" },
  { id: 6, label: "Construction Net", path: "/images/gallery/construction-net-1.jpg" },
  { id: 7, label: "Cloth Hanger", path: "/images/gallery/cloth-hanger-1.jpg" },
  { id: 8, label: "Sports Net", path: "/images/gallery/sports-net-1.jpg" },
  { id: 9, label: "Duct Area Net", path: "/images/gallery/duct-net-1.jpg" },
  { id: 10, label: "Monkey Net", path: "/images/gallery/monkey-net-1.jpg" },
  { id: 11, label: "Balcony Safety Net 2", path: "/images/gallery/balcony-2.jpg" },
  { id: 12, label: "Invisible Grills 2", path: "/images/gallery/invisible-grills-2.jpg" },
  { id: 13, label: "Bird Net 2", path: "/images/gallery/bird-net-2.jpg" },
  { id: 14, label: "Balcony Net 3", path: "/images/gallery/balcony-3.jpg" },
  { id: 15, label: "Installation Team", path: "/images/gallery/team-work.jpg" },
  { id: 16, label: "Completed Project", path: "/images/gallery/completed-1.jpg" },
];

export default function GalleryPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Gallery", url: `${BUSINESS.url}/gallery` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Breadcrumb items={[{ name: "Gallery", href: "/gallery" }]} />

      <section className="py-16 md:py-20 bg-gradient-to-br from-green-700 to-green-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Work Gallery</h1>
          <p className="text-xl text-green-100">See the quality of our safety net and invisible grill installations across Bangalore.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 mb-8 text-sm bg-yellow-50 border border-yellow-200 rounded-xl p-4 max-w-xl mx-auto">
            📁 <strong>Image Placeholders:</strong> Add your installation photos to <code className="text-green-700">public/images/gallery/</code> — replace each placeholder below.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_SLOTS.map((slot) => (
              <div key={slot.id} className="group relative rounded-2xl overflow-hidden bg-green-100 aspect-square flex items-center justify-center border-2 border-dashed border-green-300 hover:border-green-500 transition-all">
                {/* Replace this div with:
                  <Image
                    src={slot.path}
                    alt={slot.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                */}
                <div className="text-center p-4">
                  <svg className="w-10 h-10 text-green-400/50 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" />
                  </svg>
                  <p className="text-green-700/70 text-xs font-semibold text-center">{slot.label}</p>
                  <p className="text-green-600/40 text-[10px] mt-0.5 break-all">{slot.path}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Like What You See? Book Your Free Inspection" />
    </>
  );
}
