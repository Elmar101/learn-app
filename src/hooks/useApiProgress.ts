import {useState,useEffect} from "react";
import axios from "axios";
interface Props {
    apiMethod: string;
    apiPath: string;
    strickPath: boolean;
}
export const useApiProgress = (props: Props): [boolean] => {
  const {apiMethod, apiPath , strickPath} = props;
  const [pendingApiCall , setPendingApiCall ] = useState(false);

  useEffect(()=>{ 
    let requestInterceptorReject:any;
    let responseInterceptorReject: any; 

    const updateApiCallFor = (url: string, method: string, isBoolean: boolean) => {
      if(method !== apiMethod){
        return ;
      }
      if(strickPath && url === apiPath){
        setPendingApiCall( isBoolean );
      }
      else if (!strickPath && url.toString().startsWith(apiPath.toString())) {
        setPendingApiCall( isBoolean );
      }
    };

    const registerInterceptors = () => {
      requestInterceptorReject = axios.interceptors.request.use((request) => {
        const {url, method} = request;
        if(url && method){
            updateApiCallFor(url,method, true);
            return request;
        };
        return ;
      });

      responseInterceptorReject = axios.interceptors.response.use(
        (response) => {
          const {url, method} = response.config;
          if(url && method){
            updateApiCallFor(url,method, false);
          return response;
          }
          return ;
        },
        (error) => {
          const {url, method} = error.config;
          updateApiCallFor(url,method, false);
          throw error;
        }
      );
    }

    const unRegisterInterceptors = () => {
      axios.interceptors.request.eject(requestInterceptorReject);
      axios.interceptors.response.eject(responseInterceptorReject);
    };

    registerInterceptors ();

    return () => unRegisterInterceptors();
  },[apiPath,apiMethod,strickPath])

  return [pendingApiCall];
}