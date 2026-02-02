import Link from "next/link";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

const Order = () => {
  // Mocking an Order ID for realism
  const orderId = "ARC-" + Math.floor(Math.random() * 1000000);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle className="h-10 w-10" strokeWidth={3} />
        </div>

        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Order Confirmed!
        </h1>
        <p className="mb-6 text-gray-500">
          Your wand has been reserved. An owl has been dispatched with your
          receipt.
        </p>

        <div className="mb-8 rounded-xl bg-gray-50 p-4 text-left">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3">
            <span className="text-sm font-medium text-gray-500">Order ID</span>
            <span className="font-mono text-sm font-bold text-gray-900">
              {orderId}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">
              Est. Delivery
            </span>
            <span className="text-sm font-bold text-gray-900">
              3-5 Business Days
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/"
            className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            <Package className="mr-2 h-5 w-5" />
            Track Order
          </Link>

          <Link
            href="/products"
            className="group flex w-full cursor-pointer items-center justify-center rounded-xl px-6 py-3 font-semibold text-gray-600 transition hover:bg-gray-50"
          >
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
