import { useState } from "react";
import { API } from "../apis/axios";

const usePost = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (body) => {
    try {
      setLoading(true);
      setError(null);

      const response = await API.post(url, body);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { post, loading, error };
};

export default usePost;
