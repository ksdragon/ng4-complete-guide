export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
    ) {}

    get token() {
      // sprawdzenie czy token istnieje i czy nie jest wygasły domyślnie API firebase ustawia 1h
      if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
        return null;
      }
      return this._token;
    }
}
