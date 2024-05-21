import React, { useState } from 'react';

const ProductForm: React.FC = () => {
    const [productCode, setProductCode] = useState<string>('');
    const [productName, setProductName] = useState<string>('');
    const [price, setPrice] = useState<number | string>('');
    const [quantity, setQuantity] = useState<number>(1);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const product = {
            productCode,
            productName,
            price: Number(price),
            quantity
        };
        console.log(product);
    };

    return (
        <div>
            <h2>Thêm mới sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="productCode">Mã sản phẩm</label>
                    <input
                        type="text"
                        id="productCode"
                        value={productCode}
                        onChange={(e) => setProductCode(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input
                        type="text"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="price">Giá</label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label htmlFor="quantity">Số lượng</label>
                    <select
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    >
                        {[...Array(100).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                                {num + 1}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
};

export default ProductForm;
