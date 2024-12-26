export const featuredPortfolio = [
  {
    id: 1,
    title: "Social Media App one",
    images: ["/bg.jpg", "/bg.jpg", "/bg.jpg", "/bg.jpg"],
    bedroom: 3,
    bathroom: 3,
    price: 34000,
    address: "No 19, avenue one",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est culpa! Repellendus reiciendis aperiam cumque officia nulla, dolores odio. Excepturi, quos. Animi placeat, molestias omnis laboriosam ipsam doloremque necessitatibus nam exercitationem ea repellat voluptatem, dolorem quae, fuga incidunt! Nesciunt nihil iure accusamus aperiam, ipsam dignissimos voluptatibus molestiae illo perferendis necessitatibus",
  },
  {
    id: 2,
    title: "Social Media App one",
    images: ["/bg.jpg", "/bg.jpg", "/bg.jpg", "/bg.jpg"],
    bedroom: 3,
    bathroom: 3,
    price: 34000,
    address: "No 19, avenue one",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est culpa! Repellendus reiciendis aperiam cumque officia nulla, dolores odio. Excepturi, quos. Animi placeat, molestias omnis laboriosam ipsam doloremque necessitatibus nam exercitationem ea repellat voluptatem, dolorem quae, fuga incidunt! Nesciunt nihil iure accusamus aperiam, ipsam dignissimos voluptatibus molestiae illo perferendis necessitatibus",
  },
  {
    id: 3,
    title: "Social Media App one",
    images: ["/bg.jpg", "/bg.jpg", "/bg.jpg", "/bg.jpg"],
    bedroom: 3,
    bathroom: 3,
    price: 34000,
    address: "No 19, avenue one",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est culpa! Repellendus reiciendis aperiam cumque officia nulla, dolores odio. Excepturi, quos. Animi placeat, molestias omnis laboriosam ipsam doloremque necessitatibus nam exercitationem ea repellat voluptatem, dolorem quae, fuga incidunt! Nesciunt nihil iure accusamus aperiam, ipsam dignissimos voluptatibus molestiae illo perferendis necessitatibus",
  },
  {
    id: 4,
    title: "Social Media App one",
    images: ["/bg.jpg", "/bg.jpg", "/bg.jpg", "/bg.jpg"],
    bedroom: 3,
    bathroom: 3,
    price: 34000,
    address: "No 19, avenue one",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est culpa! Repellendus reiciendis aperiam cumque officia nulla, dolores odio. Excepturi, quos. Animi placeat, molestias omnis laboriosam ipsam doloremque necessitatibus nam exercitationem ea repellat voluptatem, dolorem quae, fuga incidunt! Nesciunt nihil iure accusamus aperiam, ipsam dignissimos voluptatibus molestiae illo perferendis necessitatibus",
  },
];

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\-]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .trim();
};

// Add slugs to itemsData
featuredPortfolio.forEach((item) => {
  item.slug = generateSlug(item.title);
});
