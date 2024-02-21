const isProduction = process.env.NODE_ENV == 'production';
export const BASE_URL = isProduction
    ? "https://shop-api.codeyad-project.ir/api"
    : "http://localhost:3000/api"
