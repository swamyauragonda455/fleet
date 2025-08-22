const jwt = require("jsonwebtoken");
const axios = require("axios");
const USERNAME = "admin";
const PASSWORD = "secret";
const APP_SECRET = "myappsecret";

const mappings = {
  get: [
    "/http://localhost:3500/vehicles",
    "/http://localhost:3500/users",
    "/http://localhost:3500/Bookings",
  ],
  post: [
    "/http://localhost:3500/vehicles",
    "/products",
    "/api/categories",
    "/categories",
  ],
};

function requiresAuth(method, url) {
  return (
    (mappings[method.toLowerCase()] || []).find((p) => url.startsWith(p)) !==
    undefined
  );
}

module.exports = async function (req, res, next) {
  // LOGIN HANDLER

  // if (req.path.endsWith("/signin") && req.method === "POST") {
  //   const { email, password } = req.body;

  //   try {
  //     const response = await axios.get(
  //       `http://localhost:4301/drivers?driverUserName=${email}&driverPassword=${password}`
  //     );
  //     const matchedDriver = response.data.find(
  //       (driver) =>
  //         driver.driverUserName === username &&
  //         driver.driverPassword === password
  //     );

  //     if (matchedDriver) {
  //       const token = jwt.sign(
  //         { driverUserName: matchedDriver.driverUserName },
  //         APP_SECRET,
  //         { expiresIn: "1h" }
  //       );
  //       res.json({ success: true, token });
  //     } else {
  //       res.json({ success: false, message: "Invalid credentials" });
  //     }
  //   } catch (error) {
  //     console.error("Login error:", error.message);
  //     res.status(500).json({ success: false, message: "Auth server error" });
  //   }

  //   return;
  // }

  if (req.path.endsWith("/login") && req.method === "POST") {
    const { name, password } = req.body;

    if (
      req.body &&
      req.body.name == USERNAME &&
      req.body.password == PASSWORD
    ) {
      let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
      res.json({ success: true, token: token });
    } else {
      res.json({ success: false });
    }
    res.end();
    return;
  }

  // AUTHENTICATION FOR PROTECTED ROUTES
  if (requiresAuth(req.method, req.url)) {
    let token = req.headers["authorization"] || "";

    if (token.startsWith("Bearer ")) {
      token = token.slice(7);
      try {
        jwt.verify(token, APP_SECRET);
        next();
        return;
      } catch (err) {
        res.statusCode = 401;
        res.end();
        return;
      }
    }

    res.statusCode = 401;
    res.end();
    return;
  }

  // ALLOW OTHER ROUTES
  next();
};
