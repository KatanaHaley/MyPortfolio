import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from 'Components/PaymentForm'

const PUBLIC_KEY = "pk_live_51IoCj3KngNA5hdnVTlHZXguYORGaUnq6jeMlVeDDL4sKLMBapuLqayeNvE0s9M6mkrDHtHZ6fWRBJ4U5SQ7wcvou007yTOKJEV"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer
