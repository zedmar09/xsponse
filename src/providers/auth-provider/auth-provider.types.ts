export type LoginResponse = {
  user: {
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    role: string;
    phone_number: string;
    email: string;
    roles: string[];
    permissions: string[];
  };
  token: string;
};

export type RegisterResponse = {
  user: {
    id: string;
    first_name: string;
    last_name: string;
    phone_code: string;
    phone_number: string;
    email: string;
    role: string[];
  };
};