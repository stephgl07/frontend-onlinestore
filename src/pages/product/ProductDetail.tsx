import React from "react";
import {
  Box,
  Button,
  Paper,
  Toolbar,
  Typography,
  Alert,
  Grid,
  TextField,
} from "@mui/material";
import {
  AddEditProductDTO,
  AddEditProductDetailDTO,
} from "../../models/Product";
import { Link, useParams } from "react-router-dom";
import {
  fetchGetDetailByProductId,
  fetchGetProductById,
} from "../../services/ProductService";
import * as IconsMaterial from "@mui/icons-material";
import DataTable from "../../commons/components/DataTable";
import { getColumnNames } from "../../commons/utils/ArrayMapping";

const ProductDetail = () => {
  const { id }: any = useParams();
  const [product, setProduct] = React.useState<AddEditProductDTO>();

  const columnNames = getColumnNames(new AddEditProductDetailDTO()).filter(
    (column) => column.id !== "productId"
  );

  React.useEffect(() => {
    const getProduct = async () => {
      const productResponse = await fetchGetProductById(id);
      const productResponseDetails = await fetchGetDetailByProductId(
        productResponse.productId
      );
      setProduct({
        ...productResponse,
        productDetails: productResponseDetails,
      });
    };
    getProduct();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Detalles de Producto
          </Typography>
          <Link to="/products">
            <Button variant="outlined" endIcon={<IconsMaterial.ArrowBack />}>
              Regresar
            </Button>
          </Link>
        </Toolbar>
      </Box>
      {product ? (
        <div>
          <Paper sx={{ width: "100%", mt: 5, mb: 5 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nombre de Producto"
                  defaultValue={product.productName}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Stock"
                  defaultValue={product.stockThreshold}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Descripción de Producto"
                  defaultValue={product.productDescription}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Usuario Creador"
                  defaultValue={product.creationUser}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Zona Horaria"
                  defaultValue={product.creationTimeZone}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
            {/* <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                marginTop: "1rem",
                // bottom: 0,
                // position: 'absolute'
              }}
            >
              <Link to="/Empresa" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  sx={{ borderRadius: 8 }}
                  startIcon={<BackIcon />}
                >
                  Volver
                </Button>
              </Link>

              <Link
                to={`/Empresa/Editar/${empresa.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{ borderRadius: 8 }}
                  startIcon={<EditIcon />}
                >
                  Editar
                </Button>
              </Link>
            </Grid>
          </Grid> */}
          </Paper>

          <Paper sx={{ width: "100%" }}>
            <DataTable
              data={product.productDetails}
              columnNames={columnNames}
              itemName="modelName"
              itenId="detailId"
            />
          </Paper>
        </div>
      ) : (
        <Alert icon={<IconsMaterial.Info />} color="info" variant="outlined">
          Se están consultando los datos del producto...
        </Alert>
      )}
    </>
  );
};

export default ProductDetail;
