import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Product {
    id: number;
    name: string;
    description: string;
}

export interface ProductState {
    data: Product[];
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    error: string; // Adjust the type according to your error handling
}

const initialState: ProductState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: 'null',
};

// Async Thunks
// export const fetchAllProducts = createAsyncThunk<Product[]>(
//     "product/fetchAllProducts",
//     async (_, thunkAPI) => {
//         try {
//             const response = await axiosClient.get(`/products`);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// export const addProduct = createAsyncThunk<Product, { name: string; description: string }>(
//     "product/addProduct",
//     async (product, thunkAPI) => {
//         try {
//             const { name, description } = product;
//             const response = await axiosClient.post(`/product/create`, {
//                 name,
//                 description,
//             });
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// export const deleteProduct = createAsyncThunk<Product, number>(
//     "product/deleteProduct",
//     async (id, thunkAPI) => {
//         try {
//             const response = await axiosClient.patch(`/product/delete/${id}`);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// Slice
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // clearState: () => initialState,
        // clearSuccess: (state) => {
        //     state.isSuccess = false;
        // },
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchAllProducts.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data = action.payload;
        // });
        // builder.addCase(fetchAllProducts.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        //     state.isError = true;
        // });
        // builder.addCase(addProduct.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(addProduct.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.data.unshift(action.payload);
        // });
        // builder.addCase(addProduct.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        //     state.isError = true;
        // });
        // builder.addCase(deleteProduct.fulfilled, (state, action) => {
        //     state.data = state.data.filter(product => product.id !== action.payload.id);
        // });
        // builder.addDefaultCase((state) => state);
    },
});

// Actions export
//export const { clearState, clearSuccess } = productSlice.actions;
export const { } = productSlice.actions;

// Reducer export
export default productSlice.reducer;
