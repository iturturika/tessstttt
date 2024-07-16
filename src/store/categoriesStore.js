// stores/categoryStore.js
import create from 'zustand';
import axios from 'axios';

const useCategoryStore = create((set, get) => ({
    categories: [],
    fetchCategories: async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/client/v1/listing/get_categories`);
            set({ categories: response.data });
        } catch (error) {
            console.error('Failed to fetch categories', error);
        }
    },
    logCategoryNames: () => {
        const { categories } = get();
        console.log('Category Names:', categories.map(cat => cat.name));
    },
}));

export default useCategoryStore;
