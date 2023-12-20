import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';

function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success('Booking deleted successfully');

      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: () => {
      toast.error('There was an error deleting the booking');
    },
  });

  return { isDeleting, deleteBooking };
}

export default useDeleteBooking;
