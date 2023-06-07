import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { AddEditProductDTO } from "../../../models/Product";
import { Button, Grid, Typography } from "@mui/material";
import { TextField } from "formik-mui";

interface FormProductProps {
  model: AddEditProductDTO;
  onSubmit(
    values: AddEditProductDTO,
    action: FormikHelpers<AddEditProductDTO>
  ): void;
  isEditing: boolean;
}

const FormProduct: React.FC<FormProductProps> = ({
  model,
  onSubmit,
  isEditing,
}) => {
  return (
    <Formik
      initialValues={model}
      onSubmit={onSubmit}
      validationSchema={Yup.object({
        productName: Yup.string().required("Este campo es requerido."),
        productDescription: Yup.string().required("Este campo es requerido."),
        stockThreshold: Yup.number().required("Este campo es requerido."),
      })}
    >
      {({ isSubmitting, handleChange, handleBlur }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                component={TextField}
                required
                fullWidth
                id="productName"
                name="productName"
                type="text"
                label="Nombre del Producto"
              />
              {/* <ErrorMessage
                name="productName"
                component={() => (
                  <Typography color="error" component="label">
                    {errors.productName}
                  </Typography>
                )}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                required
                fullWidth
                id="productDescription"
                name="productDescription"
                type="text"
                label="Descripción del Producto"
              />
              {/* <ErrorMessage
                name="productDescription"
                component={() => (
                  <Typography color="error" component="label">
                    {errors.productDescription}
                  </Typography>
                )}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                required
                fullWidth
                id="stockThreshold"
                name="stockThreshold"
                type="number"
                label="Stock"
              />
              {/* <ErrorMessage
                name="stockThreshold"
                component={() => (
                  <Typography color="error" component="label">
                    {errors.stockThreshold}
                  </Typography>
                )}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" disabled={isSubmitting} type="submit">
                {isEditing ? "Editar" : "Registrar"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default FormProduct;
