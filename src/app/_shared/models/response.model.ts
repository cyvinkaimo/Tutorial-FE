interface Response<T> {
    data?: T;
    message?: string;
    errors?: string[];
    statusCode?: number;
  }
  
  export { Response };
  