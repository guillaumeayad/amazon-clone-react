module.exports = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "fakestoreapi.com",
      "via.placeholder.com",
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
