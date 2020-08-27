import React, { useState, useEffect } from 'react';

import { IProduct } from '../../store/modules/cart/types';
import api from '../../services/api';
import CatalogItem from '../CatalogItem';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await api.get<IProduct[]>('/products');

        setCatalog(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Catalog;
