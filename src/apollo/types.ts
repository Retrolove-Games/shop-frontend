export type LoginTokens = {
  authToken: string;
  refreshToken: string;
};

export type User = {
  id: string;
  username: string;
};

export type LoginRespone = {
  login:
    | (LoginTokens & {
        user: User;
      })
    | null;
};

export type AuthStore = {
  authToken: string;
  refreshToken: string;
  id: string;
};

export type HeadersData = {
  "woocommerce-session"?: string | null;
  authorization?: string | null;
};

export type TokenData = {
  exp: string;
  iss: string;
  data: {
    user: {
      id: number;
    };
  };
};
