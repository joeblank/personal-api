var user = require('../user.js');
var ski = require('../skillz.js')


module.exports = {

    getName: function(req, res, next) {
        var name = {
            name: user.name
        };
        res.status(200).json(name);
    },

    getLocation: function(req, res, next) {
        var location = {
            location: user.location
        }
        res.status(200).json(location);
    },

    getOccupations: function(req, res, next) {

        if (req.query.order) {
            if (req.query.order === 'desc') {
                var orderDesc = user.occupations.sort();
                res.status(200).json(orderDesc);
            } else if (req.query.order === 'asc') {
                var orderAsc = user.occupations.sort().reverse();
                res.status(200).json(orderAsc);
            }
        } else {
            var occupations = {
                occupations: user.occupations
            };
            res.status(200).json(occupations);
        }
    },

    getLatestOccupation: function(req, res, next) {
        var latest = user.occupations.slice(user.occupations.length - 1, 2);
        var latestOccupation = {
            latestOccupation: latest
        };
        res.status(200).json(latestOccupation);
    },

    getHobbies: function(req, res, next) {
        var hobbies = {
            hobbies: user.hobbies
        };
        res.status(200).json(hobbies);
    },

    getHobbiesType: function(req, res, next) {
        var sport = req.params.type;
        var newArr = user.hobbies.filter(function(value) {
            if (sport === value.type) {
                return value;
            }
        })
        res.status(200).json(newArr);
    },

    getFamily: function(req, res, next) {
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

    getFamilyGender: function(req, res, next) {
        var gender = req.params.gender;
        var newArr = user.family.filter(function(value) {
            if (gender === value.gender) {
                return value;
            }
        })
        res.status(200).json(newArr);
    },

    getRestaurants: function(req, res, next) {
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
    getRestaurantsName: function(req, res, next) {
        var name = req.params.name;
        var newArr = user.restaurants.filter(function(value) {
            if (name === value.name) {
                return value;
            }
        })
        res.status(200).json(newArr);
    },
    putName: function(req,res,next) {
        var newName = req.query.name;
        user.name = newName;
        res.status(200).json({name: user.name});
    },
    putLocation: function(req,res,next) {
        var newLocation = req.query.location;
        user.location = newLocation;
        res.status(200).json({Location: user.location});
    },
    postHobbie: function(req,res,next) {
      var newHobbie = req.query.hobbie;
      var newType = req.query.type;
      var addHobbie = {name: newHobbie, type: newType}
      user.hobbies.push(addHobbie);
      res.status(200).json({hobbies: user.hobbies});
    },
    postOccupation: function(req,res,next) {
      var newOccupation = req.query.occupation;
      user.occupations.push(newOccupation);
      res.status(200).json(user.occupations);
    },
    postFamily: function(req,res,next) {
      var name = req.query.name;
      var relation = req.query.relation;
      var gender = req.query.gender;
      var obj = {
        name: name,
        relation: relation,
        gender: gender
      };
      user.family.push(obj);
      res.status(200).json(user.family);
    },
    postRestaurant: function(req,res,next) {
      var name = req.query.name;
      var type = req.query.type;
      var rating = req.query.rating;
      var obj = {
        name: name,
        type: type,
        rating: rating
      };
      user.restaurants.push(obj);
      res.status(200).json(user.restaurants);
    },
    getSkillz: function(req,res,next) {
      if (req.query.experience) {
        var exp = req.query.experience;
        var newArr = [];
        for (var i = 0; i < ski.length; i++) {
          if (ski[i].experience === exp) {
            newArr.push(ski[i]);
          }
        }
        res.status(200).json(newArr);
      } else {
        res.status(200).json(ski);
      }
    }




}
