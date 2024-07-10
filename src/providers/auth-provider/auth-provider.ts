"use client";

import { AuthBindings } from "@refinedev/core";
import Cookies from "js-cookie";
import ApiService from "@/src/utils";
import { LoginResponse } from "@/src/providers/auth-provider/auth-provider.types";

export type RegisterParams = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  address_line1: string;
  address_line2: string;
  country: string;
  state: string;
  zip_code: string;
};

export const getAuthToken = () => {
  const auth = Cookies.get("auth");
  if (auth) {
    let parsedAuth = JSON.parse(auth) as LoginResponse;
    return parsedAuth.token;
  }

  return "";
};

export const authProvider: AuthBindings = {
  register: async (params: RegisterParams) => {
    const res = await ApiService.post<LoginResponse>("/api/signup", params)
      .then(() => {
        return {
          success: true,
        };
      })
      .catch((e) => {
        return {
          success: false,
          error: e?.response?.data,
        };
      });

    console.log(res);

    return res;
  },
  login: async ({ email, password, remember }) => {
    const res = await ApiService.post<LoginResponse>("/api/login", {
      email,
      password,
    }).catch((e) => {
      return e;
    });

    const user = res.data;

    if (user) {
      Cookies.set("auth", JSON.stringify(user), {
        expires: 2, // 30 days
        path: "/",
      });

      let redirectTo = "/";
      // if (
      //   (user as LoginResponse).user.role.includes("admin") ||
      //   (user as LoginResponse).user.role.includes("super-admin")
      // ) {
      //   redirectTo = "/admin";
      // }
      redirectTo = "/"

      return {
        success: true,
        redirectTo,
      };
    }

    return {
      success: false,
      error: {
        name: "Login Error",
        message: "Invalid credentials",
      },
    };
  },
  logout: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      let parsedAuth = JSON.parse(auth) as LoginResponse;
      const res = await ApiService.delete("/api/logout", {
        headers: {
          Authorization: "Bearer " + parsedAuth.token,
        },
      }).catch((e) => {
        return e;
      });

      if (res.status == 204) {
        Cookies.remove("auth", { path: "/" });
        return {
          success: true,
          redirectTo: "/",
        };
      }
    }

    return {
      success: false,
    };
  },
  check: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      logout: true,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      const parsedUser = JSON.parse(auth) as LoginResponse;
      return {
        role: parsedUser.user.role,
        permissions: [], // Replace with actual permissions if available in your user object
      };
    }
    return null;
  },
  getIdentity: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      return JSON.parse(auth) as LoginResponse;
    }
    return null;
  },
  onError: async (error) => {
    console.log("on error", error);
    if (error.response?.status === 401) {
      return {
        logout: true,
      };
    }

    return { error };
  },
};