import Commerce from '@chec/commerce.js';

export const commerce = new Commerce(process.env.REACT_APP_CHEC_KEY);
commerce.categories.list().then((category) => console.log(category.name));