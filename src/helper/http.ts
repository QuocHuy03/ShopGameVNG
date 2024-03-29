import axios, { AxiosInstance } from "axios";
class Http {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: `${import.meta.env.VITE_URL_SERVER_API}`,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

  }

  static getInstance() {
    const http = new Http();
    return http.instance;
  }

  public async get(url: string, params?: any): Promise<any> {
    try {
      const response = await this.instance.get(url, { params });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return error.response.data;
      }
    }
  }

  public async post(url: string, data: any): Promise<any> {
    try {
      const response = await this.instance.post(url, data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return error.response.data;
      }
    }
  }

  public async update(url: string, data: any): Promise<any> {
    try {
      const response = await this.instance.put(url, data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return error.response.data;
      }
    }
  }

  public async patch(url: string, data: any): Promise<any> {
    try {
      const response = await this.instance.patch(url, data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return error.response.data;
      }
    }
  }

  public async delete(url: string): Promise<any> {
    try {
      const response = await this.instance.delete(url);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return error.response.data;
      }
    }
  }
}

export default Http;
