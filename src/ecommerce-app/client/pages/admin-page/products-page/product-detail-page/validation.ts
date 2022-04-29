import * as yup from "yup";

export const validationSchema = yup.object().shape({
    title: yup.string().required("title is required"),
    description: yup.string().required("description is required").min(5),
    price: yup.number().required("price is required"),
    image: yup.string().required("image is required")
});