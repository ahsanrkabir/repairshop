import * as Sentry from "@sentry/nextjs";

import BackButton from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";

const CustomerFormPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  try {
    const { customerId } = await searchParams;

    // Edit customer form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <>
            <h2 className="mb-2 text-2xl">
              Customer ID #{customerId} not found.
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }

      console.log(customer);

      // put customer form component
    } else {
      // new customer form component
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }
};

export default CustomerFormPage;
