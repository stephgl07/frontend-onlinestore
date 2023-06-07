import axios from "axios";
import { urlProduct, urlProductDetail } from "../config/EndpointsConfig";
import { ApiResulResponse } from "../commons/models/ApiCommons";
import {
  AddEditProductDTO,
  GetProductsDetailDTO,
  ProductGridItem,
} from "../models/Product";

export const fetchGetAllProducts = async (): Promise<ProductGridItem[]> => {
  try {
    const url = `${urlProduct}/GetAll`;
    const response = axios.get<ApiResulResponse>(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    const { succeeded, message, errors, data } = (await response).data;

    console.log("message", message);

    if (!succeeded) {
      console.log("errors", errors);
      return [];
    }

    const products = data as ProductGridItem[];

    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchCreateProduct = async (
  request: AddEditProductDTO
): Promise<ProductGridItem> => {
  try {
    const url = `${urlProduct}/Create`;
    const response = axios.post<ApiResulResponse>(url, request, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    const { succeeded, message, errors, data } = (await response).data;

    console.log("message", message);

    if (!succeeded) {
      console.log("errors", errors);
      return new ProductGridItem();
    }

    const products = data as ProductGridItem;

    return products;
  } catch (error) {
    console.error(error);
    return new ProductGridItem();
  }
};

export const fetchEditProduct = async (
  request: AddEditProductDTO
): Promise<ProductGridItem> => {
  try {
    const url = `${urlProduct}/Update`;
    const response = axios.put<ApiResulResponse>(url, request, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    const { succeeded, message, errors, data } = (await response).data;

    console.log("message", message);

    if (!succeeded) {
      console.log("errors", errors);
      return new ProductGridItem();
    }

    const products = data as ProductGridItem;

    return products;
  } catch (error) {
    console.error(error);
    return new ProductGridItem();
  }
};

export const fetchGetProductById = async (
  id: number
): Promise<ProductGridItem> => {
  try {
    const url = `${urlProduct}/GetAllById?ProductId=${id}`;
    const response = axios.get<ApiResulResponse>(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    const { succeeded, message, errors, data } = (await response).data;

    console.log("message", message);

    if (!succeeded) {
      console.log("errors", errors);
      return new ProductGridItem();
    }

    const products = data as ProductGridItem;

    return products;
  } catch (error) {
    console.error(error);
    return new ProductGridItem();
  }
};

export const fetchGetDetailByProductId = async (
  idProduct: number
): Promise<GetProductsDetailDTO[]> => {
  try {
    const url = `${urlProductDetail}/GetDetailByProductId?ProductId=${idProduct}`;
    const response = axios.get<ApiResulResponse>(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    const { succeeded, message, errors, data } = (await response).data;

    console.log("message", message);

    if (!succeeded) {
      console.log("errors", errors);
      return [];
    }

    const products = data as GetProductsDetailDTO[];

    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchGetDetailById = async (
  id: number
): Promise<GetProductsDetailDTO> => {
  try {
    const url = `${urlProductDetail}/GetDetailById?DetailId=${id}`;
    const response = axios.get<ApiResulResponse>(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    const { succeeded, message, errors, data } = (await response).data;

    console.log("message", message);

    if (!succeeded) {
      console.log("errors", errors);
      return new GetProductsDetailDTO();
    }

    const products = data as GetProductsDetailDTO;

    return products;
  } catch (error) {
    console.error(error);
    return new GetProductsDetailDTO();
  }
};
