// stores/listingStore.js
import { create } from 'zustand';
import axios from 'axios';

const useListingStore = create((set) => ({
  listings: [],
  fetchListings: async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/client/v1/listing/get_listings`,
        {
          '-': {
            UserID: '00000000-0000-0000-0000-000000000000',
            DeviceType: 0,
            FirebaseToken: '',
            Email: '',
            Locale: '',
            IsProSeller: false,
            Verified: false,
            UserAuth: false,
          },
          detailed: true,
          pagination: {
            limit: 3,
            page: 0,
          },
          sort: {
            key: '',
            type: '',
          },
          filters: {
            price_max: null,
            price_min: null,
          },
        },
      );
      set({ listings: response.data });
    } catch (error) {
      console.error('Failed to fetch listings', error);
    }
  },
}));

export default useListingStore;
