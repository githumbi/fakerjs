const faker = require('faker'),
mongoose  = require("mongoose")

mongoose.connect("mongodb://localhost/faker_db")

var fakerSchema = new mongoose.Schema({
  title: String,
  body: String,
  image: String
   })

var fake = mongoose.model("fake", fakerSchema)


fake.create({
  title: faker.name.title(),
  body: faker.lorem.sentences(),
  image: faker.image.imageUrl()
},(err,list)=>{
  if (err) {
    console.log("error")
  } else {
    console.log(list)
    module.exports(list)
  }
})

 module.exports = fake

// fake.find({User},(err, list)=>{
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("success")
//   }
// })