import React, {useState,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, Link , useParams} from 'react-router-dom';
import ProductAPI from '../../../api/productAPI'


const AdminProductEditPage = ({ onEdit , categories }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const history = useHistory();
    let { id } = useParams();
    const [product, setProduct] = useState({}); 


    useEffect(() => {
        // call api 
        const getProducts = async () => {
            try {
                const {data} = await ProductAPI.get(id);
                setProduct(data);
                reset(data)
            }
            catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [])
    const onHandleSubmit = (data) => {
        const uploads = new FormData();
        // const imageEdit = document.querySelector('#product-image').files[0];
        uploads.append("name", data.name);
        uploads.append("price", data.price);
        // uploads.append("photo",imageEdit, data.photo);
        uploads.append("category", data.category);
        uploads.append("description", data.description);
        uploads.append("shipping", data.shipping);

        onEdit(id, uploads);
        // console.log(data)
      
        history.push('/admin/product');
        
    }
    
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
                <h1 className="h2">Sửa sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link className="btn btn-primary" to="/admin/product">Quay Lại</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        placeholder="Tên sản phẩm"
                        defaultValue={product.name}
                        {...register('name', { required: true })}
                    ></input>
                    <label htmlFor="product-name">Tên Sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This fied is required</span>}
                </div>
                {/* <div className="mb-3">
                    <label className="form-label">Ảnh</label>
                    <input type="file" className="form-control" 
                        id="product-image" 
                        placeholder="Ảnh"
                        defaultValue={product.photo}
                        {...register('photo')}
                    />
                    {errors.photo && <span className="text-danger mt-2">This fied is required</span>}
                </div> */}
                <div className="form-floating mb-3">
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        placeholder="Giá sản phẩm"
                        defaultValue={product.price}
                        {...register('price', { required: true })}
                    ></input>
                    <label >Giá Sản phẩm</label>
                    {errors.price && <span className="text-danger mt-2">This fied is required</span>}
                </div>
                <div className="mb-3">
                    <label for="product-category" className="form-label">Danh mục:</label>
                    <select className="mb-3 ml-3" aria-label="Default select example"
                        id="product-category"
                        placeholder="Danh mục"
                        defaultValue={product.category}
                        {...register('category', { required: true })}
                    >
                        {
                            categories.map((category, index) => {
                                return (
                                    <option value={`${category._id}`} key={`${index}`} >{category.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-description"
                        placeholder="Miêu tả sản phẩm"
                        defaultValue={product.name}
                        {...register('description', { required: true })}
                    ></input>
                    <label >Miêu tả sản phẩm</label>
                    {errors.description && <span className="text-danger mt-2">This fied is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="checkbox" {...register('shipping')} /> Shipping
                    </div>
                <button type="submit" className="btn btn-primary">Gửi</button>
            </form>
        </div>
    )
}

export default AdminProductEditPage