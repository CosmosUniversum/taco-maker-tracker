**Set up :**
*terminal:*
cd code/sei/assessments
git clone https://github.com/SEI-Remote-WC/e-gen-replacement.git <name your assessment>
cd <name your assessment>
rm -rf .git
npm i
code .
*Vs Code terminal:*
touch .env
npm i dotenv
mkdir config
touch config/database.js
npm i mongoose
*server.js*
import “dotenv/config.js”
import (‘./config/database.js’)
*Config/database.js*
import mongoose from ‘mongoose’
mongoose.connect(process.env.DATABASE_URL)
shortcut to mongoose.connection object
const db = mongoose.connection
db.on(‘connected’, function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
**Creating Crud**
*Vs Code terminal:*
mkdir controllers
touch controllers/tacos.js
touch routes/tacos.js
mkdir models
touch models/taco.js
*Create taco model*
import mongoose from ‘mongoose’
const Schema = mongoose.Schema
const tacoSchema = new Schema ({
  title: String,
  tasty: Boolean
})
const Taco = mongoose.model(‘Taco”, tacoSchema)
export {
  Taco
}
*Change the routes/user.js to tacos.js*
//in this taco router…
import * as tacosCtrl from ‘../controllers/tacos.js’
*Update server.js lines 11,12, 36, 37 from users to tacos*
*redirect our index.ejs to tacos/index.ejs*
//In the index router on line 6,  change to
res.redirect (“/tacos”)
//This will redirect the index view to localhost:3000/tacos
*To create data we need a form*
1. identify the proper route
post/ create
2. Add the ui
//Create a form on the tacos/index.ejs that is collects the data for the new taco
//form tag (with action “/blogs” and method of “POST”)
//inside the form you need inputs for each property of our model with the name matching the key
//and a submit button
3.Add to route in router
post request in the taco router for create (‘/blogs’)
4. In our taco controller write function
//handle our boolean with !!
//set a variable to hold the new taco from model in req.body
//save the new variable with taco.save with an error first callback  that redirects to “/tacos”
//render taco to taco/index.ejs
5.Update/Write the view/UI
//forEach taco list the title
//a ternary operator that conditions the boolean
*To show the deets for one taco*
1. identify the proper route
get / show
2. Add the ui
//Create a details button as an <a href= “tacos/<%=taco._id%>
3. Add to route in taco router
get request in the taco router for show (‘/:id’)
4. In our taco controller write function
//use the model to findById(req.params.id) and an error first callback function
//render the show view (‘blogs/show’)
//pass the taco
5.Create the show view/Write the view/UI
//create a form that will do have an action of “/blogs/:id(written with ejs out)?_method=“PUT” method=“POST”
//Inside the form create an input for the title with a placeholder of <%= taco.title%>
//and an input for the checkbox for tasty with <%= taco.tasty ? ‘checked’ : “” %> added to show the checkbox
//add an update button
*Add method override*
Npm i method-override
Add both of these to server.js
-import methodOverride from ‘method-override’
-app.use(methodOverride(‘_method’))
*To update the taco*
1. identify the proper route
put / update
2. Add the ui
// Created ui at the end of show
3. Add to route in taco router
//put req at ‘/:id’ to an update function
4. In our taco controller write function
//handle our boolean with !!
//find the taco and the form data
//Taco.findByIdAndUpdate(req.params.id, req.body, function (err, taco){
//redirect to “/blogs”
5.Write the view/UI
//index view already exists
*To delete a taco from the index view*
1. identify the proper route
delete / delete
1. Add the ui
//Create a form that deletes action of “/blogs/:id(written with ejs out)?_method=“DELETE” method=“POST”
//Add submit button with an X for delete
3. Add to route in taco router
//delete req at ‘/:id’ to a delete function
4. In our taco controller write function
//Export it as deleteTaco as delete
//Find the taco by id and delete with 2 parameters (req.params.id and error first callback function(with 2 params (error and taco)
//redirect to “/tacos”
5.Write the view/UI
//index view already exists