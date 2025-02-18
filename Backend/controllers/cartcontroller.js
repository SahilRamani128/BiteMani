import userModel from '../models/userModel.js'

//add to user cart 
const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1
        }
        else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"ADDED TO CART"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"ERROR OCCURRED"})
    }
}

//remove from user cart 
const removeFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData;
        if (cartData[req.body.itemId] && cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }
        else {
            delete cartData[req.body.itemId]; // Remove item if quantity reaches 0
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData},{ new:true })
        res.json({success:true,message:"REMOVED FROM CART"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"ERROR OCCURRED"})
    }
}

//fetch user cart data 
const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        if (!userData) {
            return res.json({ success: true, cartData: {} });
        }
        let cartData = userData.cartData;
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"ERROR OCCURRED"})
    }
}

export {addToCart, removeFromCart, getCart}