// utils/api.ts
import axios from 'axios';

export interface ApiCallParams {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: any;
  headers?: Record<string, string>;
//   config?: AxiosRequestConfig;
}

export interface ApiCallResult {
  data: null;
  error: string | null;
  status?: number;
}

const apiCall = async (params: ApiCallParams): Promise<ApiCallResult> => {
  const {
    url,
    method = 'GET',
    data = null,
    headers = {},
    // config = {},
  } = params;

  try {
    const response = await axios({
      url,
      method,
      data,
      headers,
    //   ...config,
    });

    return {
      data: response.data,
      error: null,
      status: response.status,
    };
  } catch (error: any) {
    return {
      data: null,
      error: error.response?.data?.message || error.message,
      status: error.response?.status,
    };
  }
};

export default apiCall;
