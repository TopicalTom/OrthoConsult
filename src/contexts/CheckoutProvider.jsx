import React, { useContext, createContext } from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { useStripe } from '@stripe/react-stripe-js';
import { fetchFromAPI } from '../utils/fetchFromAPI';

// Custom Scroll Hook
const CheckoutContext = createContext()

export function useCheckout() {
    return useContext(CheckoutContext)
}

// Handles Redirect to Stripe Hosted Checkout
export const CheckoutProvider = ({ children }) => {
    const { currentUser } = useAuth();
    const stripe = useStripe();

    // Sends relevant details to Stripe Hosted Checkout
    const handleCheckout = async () => {

        const caseItems = [
            {
                id: 1,
                title: 'New Case',
                description: 'Evalution details and feedback for this patient.',
                price: 150,
              },
              {
                id: 2,
                title: 'Cephalometric',
                description: 'Imaging for records',
                price: 50,
              },
        ]

        const line_items = caseItems.map(item => {
            return {
                quantity: 1,
                price_data: {
                    currency: 'cad',
                    unit_amount: item.price * 100, // amount in cents
                    product_data: {
                        name: item.title,
                        description: item.description,
                    }
                }
            }
        });

        const response = await fetchFromAPI('create-checkout-session', {
            body: { line_items, customer_email: currentUser.email },
        });

        const { sessionId } = response;
        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
            console.log(error);
        }
    }

    return (
        <CheckoutContext.Provider value={{ handleCheckout }}>
            {children}
        </CheckoutContext.Provider>
    )
}