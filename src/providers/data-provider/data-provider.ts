"use client";
import dataProviderSimpleRest from "@refinedev/simple-rest";
import { DataProvider } from "@refinedev/core";
import ApiService from "@/src/utils";
import Cookies from "js-cookie";
import { LoginResponse } from "@/src/providers/auth-provider/auth-provider.types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

export const dataProvider: DataProvider = {
  getOne: async ({ resource, id, meta }) => {
    const auth = Cookies.get("auth");
    if (auth) {
      let parsedAuth = JSON.parse(auth) as LoginResponse;

      const searchParams = meta
        ? `?${new URLSearchParams(meta).toString()}`
        : "";

      const res = await ApiService.get(`${resource}/${id}${searchParams}`, {
        headers: {
          Authorization: "Bearer " + parsedAuth.token,
        },
      }).catch((e) => {
        return Promise.reject(e);
      });

      if (res.data) {
        return {
          data: res.data,
        };
      }
    }
    return {
      data: null,
    };
  },
  getApiUrl: () => API_URL,
  update: async ({ resource, id, variables }) => {
    const auth = Cookies.get("auth");
    if (auth) {
      let parsedAuth = JSON.parse(auth) as LoginResponse;
      const res = await ApiService.put(`${resource}/${id}`, variables, {
        headers: {
          Authorization: "Bearer " + parsedAuth.token,
        },
      }).catch((e) => {
        return Promise.reject(e);
      });

      if (res.data) {
        return {
          data: res.data,
        };
      }
    }

    return {
      data: null,
    };
  },
  getList: async ({ resource, filters, sorters, pagination, meta }) => {
    const auth = Cookies.get("auth");
    if (auth) {
      let parsedAuth = JSON.parse(auth) as LoginResponse;
      const res = await ApiService.get(resource, {
        headers: {
          Authorization: "Bearer " + parsedAuth.token,
        },
      }).catch((e) => {
        return Promise.reject(e);
      });

      if (res.data) {
        return {
          data: res.data.data,
          total: res.data.data.length,
        };
      }
    }
    return {
      data: [],
      total: 0,
    };
  },
  create: async ({ resource, variables, meta }) => {
    const auth = Cookies.get("auth");
    if (auth) {
      let parsedAuth = JSON.parse(auth) as LoginResponse;
      const res = await ApiService.post(resource, variables, {
        headers: {
          Authorization: "Bearer " + parsedAuth.token,
        },
      }).catch((e) => {
        return Promise.reject(e);
      });

      if (res.data) {
        return {
          data: res.data,
        };
      }
    }

    return {
      data: null,
    };
  },
  deleteOne: async ({ resource, id, variables }) => {
    const auth = Cookies.get("auth");
    if (auth) {
      let parsedAuth = JSON.parse(auth) as LoginResponse;
      const res = await ApiService.delete(`${resource}/${id}`, {
        data: variables,
        headers: {
          Authorization: "Bearer " + parsedAuth.token,
        },
      }).catch((e) => {
        return Promise.reject(e);
      });

      if (res.data) {
        return {
          data: res.data,
        };
      }
    }

    return {
      data: null,
    };
  },
};
