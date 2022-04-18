const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        maxlength: [22, "Name can contain no more than 22 characters!"],
    },

    image: {
        type: String,
        required: [true, "Image is required!"],
    },

    prowess: {
        type: Number,
        required: [true, "Prowess stat is required!"],
    },

    wits: {
        type: Number,
        required: [true, "Wits stat is required!"],
    },

    vitality: {
        type: Number,
        required: [true, "Vitality stat is required!"],
    },

    abilityOne: {
        type: String,
    },

    abilityTwo: {
        type: String,
    },

    abilityThree: {
        type: String,
    },

    abilityFour: {
        type: String,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
     },



}, {timestamps:true})

const Card = mongoose.model("Card", CardSchema)

module.exports=Card;
