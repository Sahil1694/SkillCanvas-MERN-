import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({

    razorpay_signature: {
        type: String,
        required: true
    },
    razorpay_payment_id:{
        type: String,
        required: true
    },
    razorpay_subscription_id:{
        type: String,
        required: true
    },
    // CreatedAt type, default
    createdAt:{
        type:Date,
        default: Date.now,
    },
})

export const Payment = mongoose.model("Payment",schema)


