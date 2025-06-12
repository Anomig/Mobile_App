const categories = {
  "": "All",
  "67d8786a6bd8399d89813e5d": "R&B",
  "67d878633ff4e0c6ac7ccc74": "Kpop",
  "67d8785b1fce3f539bf1971e": "Jazz",
  "67d8784c3ab1606f492cedf3": "Rock",
  "67d87845dc0055dc8cb89a9e": "Pop",
};

export function mapProduct(item) {
  return {
    id: item.product.id,
    artist: item.product.fieldData.name,
    title: item.product.fieldData.songtitle,
    description: item.product.fieldData.description,
    price: (item.skus[0]?.fieldData.price.value || 0) / 100,
    image: { uri: item.skus[0]?.fieldData["main-image"]?.url },
    category: categories[item.product.fieldData.category[0]] || "Unknown",
  };
}