import mongoose from "mongoose";

const Schema = mongoose.Schema

const tacoSchema = new Schema ({
  title: String,
  tasty: Boolean
})

const Taco = mongoose.model('Taco', tacoSchema)

export {
  Taco
}