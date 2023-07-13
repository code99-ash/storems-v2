export const isProduction = () => {
    return process.env.VUE_APP_PRODUCTION_MODE=='true'
  }
  
export const getBaseUrl = () => {
return isProduction()? '/api/auth' : 'http://localhost:4001/api/auth'
} 