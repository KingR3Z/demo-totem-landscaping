export const client = {
  // Business Details
  name: "Totem Landscaping",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Newbury.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07553 616762",
  email: "",
  website: "",

  // Location
  address: "Newbury",
  city: "Newbury",
  county: "",
  postcode: "",
  basedIn: "Newbury",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "9",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Terry Tarbox", rating: 5, text: "Ben and James from Totem Landscaping came and laid a porcalain tile patio in my garden. It looks fantastic and was exactly the look i wanted. Great guys, really professional and wi would highly recommend them.", date: "7 months ago" },
    { name: "Matthew Bates", rating: 5, text: "Excellent experience with Ben and his team. They did a great job in our small garden and we will enjoy it for years to come.", date: "10 months ago" },
    { name: "Grayson Martin", rating: 1, text: "We had someone come out to our address to measure up for laying turf and a patio. Details were took and we were told he would come back to us with a quote. This was over a week ago. I then text to chase it up, explained who I was and asked for our quote and my message was seen and ignored. If you can’t / don’t want to do the work for whatever reason, that’s fine but just let us know! Poor communication hence the one star review.", date: "11 months ago" },
    { name: "Laura Verney", rating: 5, text: "Ben and James did an amazing job on our garden and driveway, we couldn't be happier. They both worked really hard and ensured that everything was done to perfection. Would highly recommend!", date: "a year ago" },
    { name: "Ben Broyd", rating: 5, text: "Great customer service all round. Very happy with the end product", date: "2 years ago" },
    { name: "Marie Mcmanus", rating: 5, text: "I cannot thank James & Ben enough they have transferred my back & front garden it looks amazing 🤩 they worked really hard & both are perfectionists at what they do thank you so much James & Ben from Marie …", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Totem Landscaping | Landscaper in Newbury",
    description: "Professional landscaper in Newbury. 5.0-star rated on Google. Call for a free quote.",
  },
};
