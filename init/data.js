const sampleListings = [
  {
    title: "Shaadi Squad – Celebrity Wedding Planners",
    description: "Event organized by Shaadi Squad (Tina Tharwani, Saurabh Malhotra & Manoj Mittra), renowned for curating high-profile weddings such as Virat–Anushka and Priyanka–Nick. Featuring a cozy beachfront cottage perfect for luxury celebrations.",
    images: [
      { filename: "listingimage", url: "https://jankicaterers.in/main/1(1).jpg" },
      { filename: "listingimage", url: "https://blog.delivermytune.com/wp-content/uploads/2024/11/dj-party-meaning.png" },
      { filename: "listingimage", url: "https://weddingvenuesguideturkey.com/icerik/uploads/job-manager-uploads/job_cover/2019/01/Feriye-Palace-Wedding.jpg" },
      { filename: "listingimage", url: "https://www.kalkifashion.com/blogs/wp-content/uploads/2023/01/Wedding-in-udaipur.jpg" }
    ],
    price: 1500,
    location: "Kolkata",
    country: "India",
    categories: ["Luxury", "DJ", "Wedding", "Venue"]
  },
  {
    title: "Modern Loft in Downtown – Planner: The Wedding Design Company",
    description: "Organized by The Wedding Design Company (Vandana Mohan’s Delhi-based firm), famed for Deepika–Ranveer’s Lake Como wedding.",
    images: [
      { filename: "listingimage", url: "https://blog.delivermytune.com/wp-content/uploads/2024/11/dj-party-meaning.png" },
      { filename: "listingimage", url: "https://cdn0.weddingwire.in/article/0977/3_2/1280/jpg/117790-best-candid-wedding-photographers-in-chennai-amar-ramesh-cover.jpeg" },
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/03/08160708/fort-rajwada_01.jpg" }
    ],
    price: 1200,
    yourPrize: 1200,
    location: "Jamshedpur",
    country: "India",
    categories: ["Decorator", "Photographer", "Outdoor", "Planner"]
  },
  {
    title: "Mountain Retreat – Planner: Devika Narain & Company",
    description: "Planned by Devika Narain & Company (based in Lucknow), creators of ‘feel-good’, personal weddings like Virat–Anushka’s Tuscan celebrations.",
    images: [
      { filename: "listingimage", url: "https://weddingvenuesguideturkey.com/icerik/uploads/job-manager-uploads/job_cover/2019/01/Feriye-Palace-Wedding.jpg" },
      { filename: "listingimage", url: "https://cdn0.weddingwire.in/vendor/7212/3_2/1280/jpg/wedding-photographers-varun-photography-wedding-photography_15_437212-167525126852173.jpeg" },
      { filename: "listingimage", url: "https://imagesawe.s3.amazonaws.com/styles/max980/s3/articles/2021/08/cyprus_wedding_planners.jpg?itok=ghiMXLqa" },
      { filename: "listingimage", url: "https://www.patalgangaresortsagar.in/images/home/wedding.jpg" }
    ],
    price: 1000,
    yourPrize: 1000,
    location: "Pune",
    country: "India",
    categories: ["Wedding", "Caterer", "DJ"]
  },
  {
    title: "Historic Villa – Planner: DreamzKrraft",
    description: "Handled by DreamzKrraft (Priti‑S Sidhwaani’s Mumbai‑based team), known for Lara Dutta–Mahesh Bhupathi and Preity Zinta weddings.",
    images: [
      { filename: "listingimage", url: "https://weddingvenuesguideturkey.com/icerik/uploads/job-manager-uploads/job_cover/2019/01/Feriye-Palace-Wedding.jpg" },
      { filename: "listingimage", url: "https://cdn0.weddingwire.in/vendor/7212/3_2/1280/jpg/wedding-photographers-varun-photography-wedding-photography_15_437212-167525126852173.jpeg" },
      { filename: "listingimage", url: "https://imagesawe.s3.amazonaws.com/styles/max980/s3/articles/2021/08/cyprus_wedding_planners.jpg?itok=ghiMXLqa" },
      { filename: "listingimage", url: "https://www.patalgangaresortsagar.in/images/home/wedding.jpg" }
    ],
    price: 2500,
    yourPrize: 2500,
    location: "Kolkata",
    country: "India",
    categories: ["Luxury", "Venue", "Photographer", "DJ", "Dining"]
  },
  {
    title: "Secluded Treehouse – Planner: Magic Lights",
    description: "Crafted by Magic Lights Events (Udaipur, Sneha Paneri), experts in exotic Rajasthan/Goa destination weddings.",
    images: [
      { filename: "listingimage", url: "https://cdn0.weddingwire.in/article/0977/3_2/1280/jpg/117790-best-candid-wedding-photographers-in-chennai-amar-ramesh-cover.jpeg" },
      { filename: "listingimage", url: "https://www.partyone.in/suploads/2024/Feb/05/27783/1707120540wedding_dj.webp" },
      { filename: "listingimage", url: "https://gd-weddings.com/wp-content/uploads/bb-plugin/cache/indian-wedding-cancun-398-panorama-505e08541bdcc8bf75ab8c686ab49b08-5c98115b6a34b.jpg" },
      { filename: "listingimage", url: "https://jafferbhaiscatering.com/wp-content/uploads/2025/03/Untitled-design-77.png" }
    ],
    price: 800,
    yourPrize: 800,
    location: "Rajasthan, India",
    country: "India",
    categories: ["Outdoor", "Getaway", "Luxury", "Planner"]
  },
  {
    title: "Beachfront Paradise – Planner: Wedniksha",
    description: "Managed by Wedniksha (Wizcraft’s luxury division, Mumbai), behind high-profile events like Sonam & Anand Ahuja.",
    images: [
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://www.seventhsecond.co.uk/wp-content/uploads/2019/10/Live-DJ.jpg" },
      { filename: "listingimage", url: "https://i.pinimg.com/474x/ee/4a/3f/ee4a3f636a557872eea40028761a5a18.jpg" },
      { filename: "listingimage", url: "https://wedtease.wordpress.com/wp-content/uploads/2016/06/ciragan4.jpg?w=640" }
    ],
    price: 2000,
    yourPrize: 2000,
    location: "Goa, India",
    country: "India",
    categories: ["Wedding", "Venue", "Luxury", "Caterer"]
  },
  {
    title: "Regal Urban Loft – Planner: Seven Steps",
    description: "From Seven Steps (Mumbai), known for Ambani and Aamir Khan weddings.",
    images: [
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://www.seventhsecond.co.uk/wp-content/uploads/2019/10/Live-DJ.jpg" },
      { filename: "listingimage", url: "https://i.pinimg.com/474x/ee/4a/3f/ee4a3f636a557872eea40028761a5a18.jpg" },
      { filename: "listingimage", url: "https://wedtease.wordpress.com/wp-content/uploads/2016/06/ciragan4.jpg?w=640" }
    ],
    price: 1800,
    yourPrize: 1800,
    location: "Jamshedpur",
    country: "India",
    categories: ["Venue", "Wedding", "Luxury", "Photographer"]
  },
  {
    title: "Garden Courtyard – Planner: Wed Gurus",
    description: "Wed Gurus (Mumbai), known for Bollywood celeb weddings, offer all‑inclusive planning across India and abroad.",
    images: [
      { filename: "listingimage", url: "https://blog.delivermytune.com/wp-content/uploads/2024/11/dj-party-meaning.png" },
      { filename: "listingimage", url: "https://cdn0.weddingwire.in/article/0977/3_2/1280/jpg/117790-best-candid-wedding-photographers-in-chennai-amar-ramesh-cover.jpeg" },
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/03/08160708/fort-rajwada_01.jpg" }
    ],
    price: 1300,
    yourPrize: 1300,
    location: "Pune",
    country: "India",
    categories: ["Wedding", "Outdoor", "Dining", "Photographer"]
  },
  {
    title: "Palace Soirée – Planner: BMP Weddings",
    description: "Handled by BMP Weddings (Delhi NCR), expert in destination creations across Udaipur, Goa, and international venues.",
    images: [
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://www.seventhsecond.co.uk/wp-content/uploads/2019/10/Live-DJ.jpg" },
      { filename: "listingimage", url: "https://i.pinimg.com/474x/ee/4a/3f/ee4a3f636a557872eea40028761a5a18.jpg" },
      { filename: "listingimage", url: "https://wedtease.wordpress.com/wp-content/uploads/2016/06/ciragan4.jpg?w=640" }
    ],
    price: 2200,
    yourPrize: 2200,
    location: "Kolkata",
    country: "India",
    categories: ["Venue", "Luxury", "Wedding", "Planner"]
  },
  {
    title: "Vintage Charm – Planner: Designer Events Inc",
    description: "By Designer Events Inc (Delhi), boutique planning with personal style at its core.",
    images: [
      { filename: "listingimage", url: "https://blog.delivermytune.com/wp-content/uploads/2024/11/dj-party-meaning.png" },
      { filename: "listingimage", url: "https://cdn0.weddingwire.in/article/0977/3_2/1280/jpg/117790-best-candid-wedding-photographers-in-chennai-amar-ramesh-cover.jpeg" },
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/03/08160708/fort-rajwada_01.jpg" }
    ],
    price: 1100,
    yourPrize: 1100,
    location: "Jamshedpur",
    country: "India",
    categories: ["Wedding", "DJ", "Venue", "Photographer"]
  },
  {
    title: "Chic City Bash – Planner: The Shadi Vibes",
    description: "Organized by The Shadi Vibes (Ahmedabad), known for vibrant, colorful decor and accessible prices.",
    images: [
      { filename: "listingimage", url: "https://blog.delivermytune.com/wp-content/uploads/2024/11/dj-party-meaning.png" },
      { filename: "listingimage", url: "https://cdn0.weddingwire.in/article/0977/3_2/1280/jpg/117790-best-candid-wedding-photographers-in-chennai-amar-ramesh-cover.jpeg" },
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/03/08160708/fort-rajwada_01.jpg" }
    ],
    price: 900,
    yourPrize: 900,
    location: "Pune",
    country: "India",
    categories: ["Birthday", "Decorator", "Outdoor", "DJ"]
  },
  {
    title: "Opulent Ceremony – Planner: Vision Vivaah",
    description: "Vision Vivaah (Delhi), established 2005 by S.K. Bhardwaj, focuses on elegant, well‑executed weddings.",
    images: [
      { filename: "listingimage", url: "https://content.jdmagicbox.com/comp/kasaragod/t6/9999p4994.4994.230209103043.b3t6/catalogue/gradient-pictures-karandakkad-kasaragod-photographers-484z1utye2.jpg" },
      { filename: "listingimage", url: "https://content.jdmagicbox.com/comp/kasaragod/t6/9999p4994.4994.230209103043.b3t6/catalogue/gradient-pictures-karandakkad-kasaragod-photographers-484z1utye2.jpg" },
      { filename: "listingimage", url: "https://content.jdmagicbox.com/comp/kasaragod/t6/9999p4994.4994.230209103043.b3t6/catalogue/gradient-pictures-karandakkad-kasaragod-photographers-484z1utye2.jpg" },
      { filename: "listingimage", url: "https://content.jdmagicbox.com/comp/kasaragod/t6/9999p4994.4994.230209103043.b3t6/catalogue/gradient-pictures-karandakkad-kasaragod-photographers-484z1utye2.jpg" }
    ],
    price: 1400,
    yourPrize: 1400,
    location: "Delhi, India",
    country: "India",
    categories: ["Luxury", "Wedding", "Photographer", "Caterer"]
  },
  {
    title: "Artistic Decor Affair – Planner: Innocept Studios",
    description:
      "From Innocept Studios (founded by Udit Mukim, Akshat Gupta & Sachit Mittal), known for installations and floral art. :contentReference[oaicite:12]{index=12}",
    images: [
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://www.seventhsecond.co.uk/wp-content/uploads/2019/10/Live-DJ.jpg" },
      { filename: "listingimage", url: "https://i.pinimg.com/474x/ee/4a/3f/ee4a3f636a557872eea40028761a5a18.jpg" },
      { filename: "listingimage", url: "https://wedtease.wordpress.com/wp-content/uploads/2016/06/ciragan4.jpg?w=640" }
    ],
    price: 1000,
    yourPrize: 1000,
    location: "Bengaluru, India",
    country: "India",
    categories: ["Outdoor", "Wedding", "Photographer", "Luxury"]
  },
  {
    title: "Graceful Celebrations – Planner: Palkan Badlani Weddings & Events",
    description:
      "Led by Palkan Badlani, known for seamless, personally curated ceremonies. :contentReference[oaicite:13]{index=13}",
    images: [
      { filename: "listingimage", url: "https://blog.delivermytune.com/wp-content/uploads/2024/11/dj-party-meaning.png" },
      { filename: "listingimage", url: "https://cdn0.weddingwire.in/article/0977/3_2/1280/jpg/117790-best-candid-wedding-photographers-in-chennai-amar-ramesh-cover.jpeg" },
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/03/08160708/fort-rajwada_01.jpg" }
    ],
    price: 950,
    yourPrize: 950,
    location: "Mumbai, India",
    country: "India",
    categories: ["Planner", "Wedding", "DJ", "Dining"]
  },
  {
    title: "Opulent Innovation – Planner: Bling Mushrooms",
    description:
      "Bling Mushrooms (Bengaluru), recognized for opulent creativity and pushing decor boundaries. :contentReference[oaicite:14]{index=14}",
    images: [
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://www.seventhsecond.co.uk/wp-content/uploads/2019/10/Live-DJ.jpg" },
      { filename: "listingimage", url: "https://i.pinimg.com/474x/ee/4a/3f/ee4a3f636a557872eea40028761a5a18.jpg" },
      { filename: "listingimage", url: "https://wedtease.wordpress.com/wp-content/uploads/2016/06/ciragan4.jpg?w=640" }
    ],
    price: 1200,
    yourPrize: 1200,
    location: "Bengaluru, India",
    country: "India",
    categories: ["Luxury", "Venue", "Photographer", "Outdoor"]
  },
  {
    title: "Destination Designer – Planner: Akarshana Events & Entertainment",
    description:
      "Akarshana (Hyderabad) specializes in luxury destination weddings across Bali, Thailand, and India. :contentReference[oaicite:15]{index=15}",
    images: [
      { filename: "listingimage", url: "https://blog.delivermytune.com/wp-content/uploads/2024/11/dj-party-meaning.png" },
      { filename: "listingimage", url: "https://cdn0.weddingwire.in/article/0977/3_2/1280/jpg/117790-best-candid-wedding-photographers-in-chennai-amar-ramesh-cover.jpeg" },
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/03/08160708/fort-rajwada_01.jpg" }

    ],
    price: 1600,
    yourPrize: 1600,
    location: "Hyderabad, India",
    country: "India",
    categories: ["Getaway", "Wedding", "Caterer"]
  },
  {
    title: "South India Flair – Planner: Ambika Gupta (A‑Cube Project)",
    description:
      "Led by Ambika Gupta (Chennai), award-winning designer and TEDx speaker, noted for South‑India luxe events. :contentReference[oaicite:16]{index=16}",
    images: [
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://www.seventhsecond.co.uk/wp-content/uploads/2019/10/Live-DJ.jpg" },
      { filename: "listingimage", url: "https://i.pinimg.com/474x/ee/4a/3f/ee4a3f636a557872eea40028761a5a18.jpg" },
      { filename: "listingimage", url: "https://wedtease.wordpress.com/wp-content/uploads/2016/06/ciragan4.jpg?w=640" }
    ],
    price: 1300,
    yourPrize: 1300,
    location: "Chennai, India",
    country: "India",
    categories: ["DJ", "Wedding", "Outdoor", "Luxury"]
  },
  {
    title: "Authentic Rajasthan Wedding – Planner: Frozen Apples Events",
    description:
      "Frozen Apples (Rajasthan), locally dedicated to creating ideal weddings under varying conditions. :contentReference[oaicite:17]{index=17}",
    images: [
      { filename: "listingimage", url: "https://blog.delivermytune.com/wp-content/uploads/2024/11/dj-party-meaning.png" },
      { filename: "listingimage", url: "https://cdn0.weddingwire.in/article/0977/3_2/1280/jpg/117790-best-candid-wedding-photographers-in-chennai-amar-ramesh-cover.jpeg" },
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/03/08160708/fort-rajwada_01.jpg" }
    ],
    price: 900,
    yourPrize: 900,
    location: "Jaipur, India",
    country: "India",
    categories: ["Outdoor", "Wedding", "Venue", "Photographer"]
  },
  {
    title: "Mumbai Dream Weddings – Planner: Wedding Dreams",
    description:
      "By Wedding Dreams (Mumbai), founder Abhishek Sharma delivers houseboat and desert weddings. :contentReference[oaicite:18]{index=18}",
    images: [
      { filename: "listingimage", url: "https://content.eventbazaar.com/wp-content/uploads/2025/06/beach-wedding-venues-in-goa-caravela-beach-resort-varca-768x524.png" },
      { filename: "listingimage", url: "https://www.seventhsecond.co.uk/wp-content/uploads/2019/10/Live-DJ.jpg" },
      { filename: "listingimage", url: "https://i.pinimg.com/474x/ee/4a/3f/ee4a3f636a557872eea40028761a5a18.jpg" },
      { filename: "listingimage", url: "https://wedtease.wordpress.com/wp-content/uploads/2016/06/ciragan4.jpg?w=640" }
    ],
    price: 1100,
    yourPrize: 1100,
    location: "Mumbai, India",
    country: "India",
    categories: ["Venue", "Wedding", "DJ", "Luxury"]
  }
];

module.exports = { data: sampleListings };
