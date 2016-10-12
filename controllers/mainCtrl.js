var user = require('../user.js');


module.exports = {

  getName: function(req, res, next) {
      var name = {name: user.name};
      res.status(200).json(name);
  },

  getLocation: function(req, res, next) {
      var location = {location: user.location}
      res.status(200).json(location);
  },

  getOccupations: function(req,res,next) {
    var occupations = {occupations: user.occupations};
    res.status(200).json(occupations);
  },

  getLatestOccupation: function(req,res,next) {
    var latest = user.occupations.slice(user.occupations.length - 1, 2);
    var latestOccupation = {latestOccupation: latest};
    res.status(200).json(latestOccupation);
  },

  getHobbies: function(req,res,next) {
    var hobbies = {hobbies: user.hobbies};
    res.status(200).json(hobbies);
  },

  getHobbiesType: function(req,res,next) {
    var sport = req.params.type;
    var newArr = user.hobbies.filter(function(value) {
      if (sport === value.type) {
        return value;
      }
    })
    res.status(200).json(newArr);
  },

  getFamily: function(req,res,next) {
    if (req.query.relation) {
      var relation = req.query.relation;
      var newArr = user.family.filter(function(value) {
        if (relation === value.relation) {
          return value;
        }
      })

    res.status(200).json(newArr);
  } else {
    res.status(200).json(user.family);
  }
  },

  getFamilyGender: function(req,res,next) {
    var gender = req.params.gender;
    var newArr = user.family.filter(function(value) {
      if (gender === value.gender) {
        return value;
      }
    })
    res.status(200).json(newArr);
  },

  getRestaurants: function(req,res,next) {
    if (req.query.rating) {
    var rating = req.query.rating;
    var newArr = user.restaurants.filter(function(value) {
      if (rating <= value.rating) {
        return value;
      }
    })
    res.status(200).json(newArr);
  } else {
    res.status(200).json(user.restaurants);
  }
},
  getRestaurantsName: function(req,res,next) {
    var name = req.params.name;
    var newArr = user.restaurants.filter(function(value) {
      if (name === value.name) {
        return value;
      }
    })
    res.status(200).json(newArr);
  }



}
