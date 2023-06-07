import * as IconsMaterial from "@mui/icons-material";
import { swaggerUrl } from "../../config/EndpointsConfig";

export interface ItemSideBar {
  url: string;
  icon?: any;
  name?: string;
  isExternal?: boolean;
}

export const itemsSideBar: ItemSideBar[] = [
  {
    url: "/",
    icon: IconsMaterial.Home,
    name: "Home",
    isExternal: false,
  },
  {
    url: "separator",
  },
  {
    url: "/products",
    icon: IconsMaterial.Inventory,
    name: "Productos",
    isExternal: false,
  },
  {
    url: "/products/create",
    icon: IconsMaterial.Inventory,
    name: "Nuevo Producto",
    isExternal: false,
  },
  {
    url: "separator",
  },
  {
    url: swaggerUrl,
    icon: IconsMaterial.ElectricalServices,
    name: "Api Service",
    isExternal: true,
  },
  {
    url: "https://github.com/stephgl07",
    icon: IconsMaterial.GitHub,
    name: "GitHub",
    isExternal: true,
  },
  {
    url: "https://github.com/stephgl07",
    icon: IconsMaterial.LinkedIn,
    name: "LinkedIn",
    isExternal: true,
  },
];
