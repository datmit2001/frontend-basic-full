import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from './components/Header';
import Layoutadmin from './layouts/admin';
import Layoutwebsite from './layouts/website';
import Not404Page from './page/404';
import AboutPage from './page/about';
import AdminProductPage from './page/admin/product';
import AdminProductAddPage from './page/admin/product/add';
import AdminProductEditPage from './page/admin/product/edit';
import AddCategoryPage from './page/admin/category/AddCategory'
import EditCategoryPage from './page/admin/category/EditCategory'
import IndexCategoryPage from './page/admin/category/IndexCategory'
import SignIn from './page/admin/user/signin';
import SignUp from './page/admin/user/signup';
import HomePage from './page/home';
import ProductDetailPage from './page/product-detail';
import PrivateRouter from './auth/privateRouter';
import Dashboard from './page/admin/dashboard';
import AdminRouter from './auth/adminRouter';
import AdminDashboard from './page/admin/user/adminDashboard';
import ListProductPage from './page/listproduct';



const Routers = (props) => {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/admin/:path?/:path?">
            <Layoutadmin>
              <Switch>
                <Route exact path="/admin">
                  <Redirect to="/admin/dashboard" />
                </Route>

                <PrivateRouter exact path="/admin/dashboard">
                  <Dashboard />
                </PrivateRouter>
                <AdminRouter>
                  <Route exact path="/admin/dashboard" />
                  <Dashboard />
                  <Route />
                  <Route exact path="/admin/product">
                    <AdminProductPage {...props} />
                  </Route>
                  <Route exact path="/admin/product/add">
                    <AdminProductAddPage {...props} />
                  </Route>
                  <Route exact path="/admin/product/:id">
                    <AdminProductEditPage {...props} />
                  </Route>
                  <Route exact path="/admin/category">
                    <IndexCategoryPage {...props} />
                  </Route>
                  <Route exact path="/admin/category/add">
                    <AddCategoryPage {...props} />
                  </Route>
                  <Route exact path="/admin/category/:id">
                    <EditCategoryPage {...props} />
                  </Route>
                </AdminRouter>
              </Switch>
            </Layoutadmin>
          </Route>
          <Route>
            <Layoutwebsite>
              <Switch>
                <Route exact path="/signin">
                  <SignIn />
                </Route>
                <Route exact path="/signup">
                  <SignUp />
                </Route>
                <Route exact path="/">
                  <HomePage {...props} />
                </Route>
                <Route exact path="/about">
                  <AboutPage />
                </Route>
                <Route exact path="/product">
                  <ListProductPage {...props} />
                </Route>
                <Route exact path="/product/:id">
                     <ProductDetailPage />
               </Route>
                <Route path="*">
                  <Not404Page />
                </Route>
              </Switch>
            </Layoutwebsite>
          </Route>
        </Switch>



      </Router>
    </>
  )
}

export default Routers
