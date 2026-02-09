/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/landing-page",
        destination: "/sheffields-best-crafted-menu",
        permanent: true,
      },
      {
        source: "/landing-page-2",
        destination: "/local-diner-sheffield-rotherham",
        permanent: true,
      },
      {
        source: "/landing-page-3",
        destination: "/best-burgers-sheffield",
        permanent: true,
      },
      {
        source: "/landing-page-4",
        destination: "/pizza-sheffield-freshly-baked",
        permanent: true,
      },
      {
        source: "/landing-page-5",
        destination: "/flame-grilled-meat-sheffield",
        permanent: true,
      },
      {
        source: "/landing-page-6",
        destination: "/family-friendly-restaurant-sheffield",
        permanent: true,
      },
      {
        source: "/landing-page-7",
        destination: "/halal-vegetarian-restaurant-sheffield",
        permanent: true,
      },
      {
        source: "/landing-page-8",
        destination: "/sheffield-takeaway-fast-fresh",
        permanent: true,
      },
      {
        source: "/landing-page-9",
        destination: "/explore-our-menu",
        permanent: true,
      },
      {
        source: "/landing-page-10",
        destination: "/student-food-sheffield",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
