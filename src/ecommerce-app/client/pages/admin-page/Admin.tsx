import adminStyle from "./Admin.module.scss";

import { XLink } from '../../../../x-lib/x-components/x-customLink/XLink';
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import AdminHomePage from "./home-page/AdminHomePage";
import AdminOrdersPage from "./oreders-page/AdminOrdersPage";
import AdminProductsPage from "./products-page/AdminProductsPage";
import AdminProductDetailPage from "./products-page/product-detail-page/AdminProductDetailPage";
import UploadNewProduct from "./products-page/upload-new-product/UploadNewProduct";

const Admin = () => {
  return (
    <div>
        <nav>
            <ul className={adminStyle.adminMenu}>
                <li>
                    <XLink to="/"> Home </XLink>
                </li>
                <li>
                    <XLink to="orders"> Order </XLink>
                </li>
                <li>
                    <XLink to="products"> Products </XLink>
                </li>
            </ul>
        </nav>

        <Box mt={10}>
            <Routes>
                <Route index element={<AdminHomePage/>}/>
                <Route path="orders" element={<AdminOrdersPage/>} />
                <Route path ="products" element={<AdminProductsPage/> }/>
                <Route path="products/:id" element = {<AdminProductDetailPage/>} />
                <Route path="products/upload_new_product" element = {<UploadNewProduct/>} />
            </Routes>
        </Box>
    </div>
  )
}

export default Admin;