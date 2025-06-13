import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import for accessing passed data
import './paymentgateway.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Paymentgateway() {
    const location = useLocation();
    const totalAmount = location.state?.totalAmount || 0;  // Get total price from cart page
    const [paymentMethod, setPaymentMethod] = useState(''); // No default selection

    const handlePaymentChange = (method) => {
        setPaymentMethod(method);
    };

    return (
        <>
            <div className="payment-sidebar open">
                <div className="sidebar-header">
                    <h4>Payment Gateway</h4>
                    <button className="close-btn">X</button>
                </div>
                <Form className="p-4">
                    <div className="payment-options">
                        {/* Cash Payment Option - Always Visible */}
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="cash"
                                name="paymentMethod"
                                value="cash"
                                checked={paymentMethod === 'cash'}
                                onChange={() => handlePaymentChange('cash')}
                            />
                            <label htmlFor="cash">
                                <img src="/images/momo.png" alt="Cash Payment" className="payment-image" />
                                <span>Cash</span>
                            </label>
                        </div>

                        {/* Card Payment Option */}
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="card"
                                name="paymentMethod"
                                value="card"
                                checked={paymentMethod === 'card'}
                                onChange={() => handlePaymentChange('card')}
                            />
                            <label htmlFor="card">
                                <img src="/images/visa.png" alt="Card Payment" />
                                <span>Card</span>
                            </label>
                        </div>
                    </div>

                    {/* Cash Payment Details (Fixed Amount) */}
                    {paymentMethod === 'cash' && (
                        <div className="cash-details">
                            <FormGroup>
                                <Label for="amount">Amount</Label>
                                <Input
                                    type="text"
                                    name="amount"
                                    id="amount"
                                    value={`₹${totalAmount.toFixed(2)}`} // Show total price
                                    readOnly // Make it non-editable
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="currency">Currency</Label>
                                <Input type="select" name="currency" id="currency" disabled>
                                    <option value="INR">INR</option>
                                </Input>
                            </FormGroup>
                        </div>
                    )}

                    {/* Card Payment Details */}
                    {paymentMethod === 'card' && (
                        <>
                            <FormGroup>
                                <Label for="cardNumber">Card Number</Label>
                                <Input type="text" name="cardNumber" id="cardNumber" placeholder="Enter card number" required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="expiryDate">Expiry Date</Label>
                                <Input type="text" name="expiryDate" id="expiryDate" placeholder="MM/YY" required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cvv">CVV</Label>
                                <Input type="password" name="cvv" id="cvv" placeholder="Enter CVV" required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cardHolder">Card Holder's Name</Label>
                                <Input type="text" name="cardHolder" id="cardHolder" placeholder="Enter card holder's name" required />
                            </FormGroup>
                        </>
                    )}

                    <Button color="primary" className="w-100">Make Payment</Button>
                </Form>
            </div>
        </>
    );
}
