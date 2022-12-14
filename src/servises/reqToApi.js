import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const searchTransactions = async (
  searchString,
  filterType,
  page = 1,
  limit = 24
) => {
  try {
    const response = await axios.get('/api/getAllTransactions', {
      baseURL: BASE_URL,
      params: {
        searchString,
        filterType,
        page,
        limit,
      },
    });

    return await response.data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export { searchTransactions };
