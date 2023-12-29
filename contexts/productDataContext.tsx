import React, {createContext, useContext, useEffect, useState} from 'react';

const productContext = createContext({});

export const ProductDataContextProvider = ({children}) => {
  const [productData, setProductData] = useState([]);

  const fetchProductData = async () => {
    try {
      const data = await fetch(
        'https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q',
      ).then(res => res.json());
      setProductData(data);
    } catch (err) {
      console.log('error occured', err);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <productContext.Provider
      value={{
        productData,
      }}>
      {children}
    </productContext.Provider>
  );
};


export const useProductDataContext = () => useContext(productContext);
