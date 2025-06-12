export class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.search
      ? {
          name: {
            $regex: this.queryStr.search,
            $options: "i", // case-insensitive
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    // Remove fields from query
    const removeFields = ["search", "sort", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);

    // Handle price range (price=0-500)
    if (queryCopy.price) {
      const [min, max] = queryCopy.price.split("-").map(Number);
      queryCopy.price = { $gte: min, $lte: max };
    }

    // Handle rating (e.g. rating=4 means rating >= 4)
    if (queryCopy.rating) {
      queryCopy.rating = { $gte: Number(queryCopy.rating) };
    }

    this.query = this.query.find(queryCopy);
    return this;
  }
}
