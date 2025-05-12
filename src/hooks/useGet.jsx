import { useEffect, useState, useCallback } from "react";
import { API } from "../apis/axios";

const useGet = (initialUrl = null, initialOptions = {}) => {
  const [url, setUrl] = useState(initialUrl);
  const [options, setOptions] = useState(initialOptions);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!initialUrl);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (targetUrl = url, targetOptions = options) => {
    if (!targetUrl) return;
    try {
      setLoading(true);
      const res = await API.get(targetUrl, targetOptions);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    if (url) fetchData();
  }, [url, fetchData]);


  const get = useCallback((customUrl, customOptions = {}) => {
    setUrl(customUrl);
    setOptions(customOptions);
    fetchData(customUrl, customOptions);
  }, [fetchData]);

  return { data, loading, error, get };
};

export default useGet;
