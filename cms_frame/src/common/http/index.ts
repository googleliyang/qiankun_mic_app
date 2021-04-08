import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

abstract class HttpClient {
  public readonly instance: AxiosInstance;

  public constructor (baseURL: string) {
    this.instance = axios.create({
      baseURL
    })

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    )
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);
}
class MainApi extends HttpClient {
    private static classInstance?: MainApi;

    private constructor (url: string) {
      super(url)
      this._initializeRequestInterceptor()
    }

    public static getInstance (url:string): MainApi {
      if (!this.classInstance) {
        this.classInstance = new MainApi(url)
      }

      return this.classInstance
    }

    private _initializeRequestInterceptor = () => {
      this.instance.interceptors.request.use(
        this._handleRequest,
        this._handleError
      )
    };

    private _handleRequest = (config: AxiosRequestConfig) => {
      config.headers.Authorization = 'Bearer ...'

      return config
    };

    public createUser = (body: CreateUserBody) => this.instance.post('/users', body);
}

export default MainApi.getInstance('/api').instance
