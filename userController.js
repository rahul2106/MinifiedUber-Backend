// userController.js
// Import Users model
Users = require("./userModel");
// Handle index actions
exports.index = function (req, res) {
  Users.get(function (err, users) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Users retrieved successfully",
      data: users,
    });
  });
};
// Handle create user actions
exports.new = function (req, res) {
  var users = new Users();
  users.name = req.body.name ? req.body.name : users.name;
  users.vehicle = req.body.vehicle;
  users.email = req.body.email;
  users.phone = req.body.phone;
  users.isDriver = req.body.isDriver;
  users.isAvailable = req.body.isAvailable;
  // save the user and check for errors
  users.save(function (err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New user created!",
      data: users,
      status: 200,
    });
  });
};
// Handle view user info
exports.view = function (req, res) {
  Users.findOne({ phone: req.params.phone }, function (err, user) {
    if (err) res.send(err);
    res.json({
      message: "User Details loading",
      data: user,
    });
  });
};

exports.viewByDriver = function (req, res) {
  Users.find({ isAvailable: req.params.isAvailable }, function (err, user) {
    if (err) res.send(err);
    res.json({
      message: "User Details loading",
      data: user,
    });
  });
};



// Handle update user info
exports.update = function (req, res) {
  
  Users.find({ phone: req.params.phone }, function (err, user) {
    if (err) res.send(err);
    var users = new Users(user);
    users.name = req.body.name ? req.body.name : user.name;
    users.vehicle = req.body.vehicle ? req.body.vehicle : user.vehicle;
    users.email = req.body.email ? req.body.email : user.email;
    users.phone = req.body.phone ? req.body.phone : user.phone;
    users.isDriver = req.body.isDriver ? req.body.isDriver : user.isDriver;
    users.isAvailable = req.body.isAvailable ? req.body.isAvailable : user.isAvailable;
    // save the user and check for errors
    console.log(user);
    users.save(function (err) {
      if (err) res.json({ err, status: 400 });
      res.json({
        message: "User Info updated",
        data: users,
        status: 201,
      });
    });
  });
};

// Handle delete user
exports.delete = function (req, res) {
  Users.deleteOne(
    {
      phone: req.params.phone,
    },
    function (err, user) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "User deleted",
      });
    }
  );
};
