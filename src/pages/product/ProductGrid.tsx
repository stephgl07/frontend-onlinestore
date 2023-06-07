import React from "react";
import { fetchGetAllProducts } from "../../services/ProductService";
import { ProductGridItem } from "../../models/Product";
import DataTable from "../../commons/components/DataTable";
import { getColumnNames } from "../../commons/utils/ArrayMapping";
import * as IconsMaterial from "@mui/icons-material";
import { Box, Button, Paper, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductGrid = () => {
  const [products, setProducts] = React.useState<ProductGridItem[]>([]);

  const actionsProduct = [
    {
      url: "/products/edit",
      handleOnClick: () => {
        console.log("");
      },
      icon: IconsMaterial.Edit,
    },
    {
      url: "/products/detail",
      handleOnClick: () => {
        console.log("");
      },
      icon: IconsMaterial.Visibility,
    },
  ];

  React.useEffect(() => {
    const getAllProducts = async () => {
      setProducts([]);

      const productList = await fetchGetAllProducts();

      if (productList && productList.length > 0) {
        // let arr = productList.concat(productList);
        // arr = arr.concat(productList);
        // arr = arr.concat(productList);
        // arr = arr.concat(productList);
        // arr = arr.concat(productList);
        // arr = arr.concat(productList);
        // arr = arr.concat(productList);

        // setProducts(arr);
        setProducts(productList);
      }
    };

    getAllProducts();
  }, []);

  const columnNames = getColumnNames(new ProductGridItem()).filter(
    (column) => column.id !== "productId"
  );

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Productos
          </Typography>
          <Link to="/products/create">
            <Button variant="contained" endIcon={<IconsMaterial.Add />}>
              Nuevo Producto
            </Button>
          </Link>
        </Toolbar>
      </Box>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {products && (
          <DataTable
            data={products}
            columnNames={columnNames}
            itemName="productName"
            itenId="productId"
            actionsTable={actionsProduct}
          />
        )}
      </Paper>
    </>
  );
};

export default ProductGrid;
