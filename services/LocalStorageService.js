class LocalStorageService {
  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static removeToken() {
    localStorage.removeItem('token');
  }
}

const localStorageService = new LocalStorageService();
export default LocalStorageService;
