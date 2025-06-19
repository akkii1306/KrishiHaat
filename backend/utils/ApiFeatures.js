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

  // Remove fields not related to filtering
  const removeFields = ["search", "sort", "page", "limit"];
  removeFields.forEach((key) => delete queryCopy[key]);

  // Convert query operators like [gte], [lte] to MongoDB format
  let queryStr = JSON.stringify(queryCopy);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (key) => `$${key}`);

  this.query = this.query.find(JSON.parse(queryStr));
  return this;
}

}
