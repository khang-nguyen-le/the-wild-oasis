import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateBooking } from '../../services/apiBookings';

function useCheckin() {
  const queryClient = useQueryClient();

  const { isLoading: isCheckingIn, mutate: checkin } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: 'checked-in',
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Boking ${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error('There was an error while checking in'),
  });
  return { isCheckingIn, checkin };
}

export default useCheckin;
