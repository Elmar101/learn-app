import * as React from 'react'
import axios from 'axios'

const useAxiosHook = (resetInterval?: number) => {
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false)
  const [hasError, setHasError] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [rspData, setRspData] = React.useState<object>({})

  React.useEffect(() => {
    let timeout: any

    if (isSuccess && resetInterval) {
      timeout = setTimeout(() => setIsSuccess(false), resetInterval)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [isSuccess, resetInterval])

  const handleReset = (): void => {
    setIsLoading(true)
    setIsSuccess(false)
    setHasError(false)
  }

  const handleResponse = (e: any): void => {
    setIsSuccess(true)
    setRspData(e)
  }

  const handleError = (e: any): void => {
    setHasError(true)
    setRspData(e)
  }

  const handleLoad = () => setIsLoading(false)

  type MethodsFetch = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'


  const fetchData = (
    baseURL: string,
    method: MethodsFetch,
    data?: object,
    headers?: object
  ) => {
    handleReset()
    return axios
      .request({
        method,
        baseURL,
        data,
        //headers
      })
      .then((response: any): void => handleResponse(response))
      .catch((error: any): void => handleError(error))
      .finally((): void => handleLoad())
  }

  return { isLoading, isSuccess, hasError, rspData, fetchData }
}

export default useAxiosHook