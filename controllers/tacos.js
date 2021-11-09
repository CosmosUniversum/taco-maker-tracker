import { Taco } from '../models/taco.js'

function index(req, res) {
	Taco.find({}, function (err, tacos) {
		res.render('tacos/index', {
			title: 'Tacos',
			tacos
		})
	})
}

function create(req, res) {
  // setting a variable to hold a new taco
  req.body.tasty = !!req.body.tasty
  const taco = new Taco(req.body)
  taco.save(function(err) {
    console.log(err)
    res.redirect('/tacos')
  })
}

function show(req, res) {
  Taco.findById(req.params.id, function(err, taco) {
    res.render('tacos/show', {
      taco
    })
  })
}

function update(req, res) {
  req.body.tasty = !!req.body.tasty
  Taco.findByIdAndUpdate(req.params.id, req.body, function(err, taco) {
    console.log(err)
    res.redirect('/tacos')
  })
}

function deleteTaco(req, res) {
  Taco.findByIdAndDelete(req.params.id, function(err, taco){
    console.log(err)
    res.redirect('/tacos')
  })
}

export {
	index,
  create,
  show,
  update,
  deleteTaco as delete
}
