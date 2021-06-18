export const DBConfig = {
    name: 'BaseDB',
    version: 3,
    objectStoresMeta: [
      {
        store: 'cart',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
            { name: 'idProduct', keypath: 'idProduct', options: { unique: true } },
            { name: 'nameProduct', keypath: 'nameProduct', options: { unique: false } },
            { name: 'valueProduct', keypath: 'valueProduct', options: { unique: false } },
            { name: 'urlImgProduct', keypath: 'urlImgProduct', options: { unique: false } }
        ]
      }
    ]
  };