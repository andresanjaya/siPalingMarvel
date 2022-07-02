export default {
  async registerBook(context, data) {
    const userId = context.rootGetters.userId;
    const bookData = {
      title: data.title,
      writer: data.writer,
      publishDate: data.publishDate,
      image: data.image,
      description: data.description,
      price: data.price,
      genres: data.genres
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://vue-first-project-19994-default-rtdb.asia-southeast1.firebasedatabase.app/books/${userId}.json?auth=` +
        token,
      {
        method: 'PUT',
        body: JSON.stringify(bookData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerBook', {
      ...bookData,
      id: userId
    });
  },
  async loadBooks(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://vue-first-project-19994-default-rtdb.asia-southeast1.firebasedatabase.app/books.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const books = [];

    for (const key in responseData) {
      const book = {
        id: key,
        title: responseData[key].title,
        writer: responseData[key].writer,
        publishDate: responseData[key].publishDate,
        image: responseData[key].image,
        description: responseData[key].description,
        price: responseData[key].price,
        genres: responseData[key].genres
      };
      books.push(book);
    }

    context.commit('setBooks', books);
    context.commit('setFetchTimestamp');
  }
};
