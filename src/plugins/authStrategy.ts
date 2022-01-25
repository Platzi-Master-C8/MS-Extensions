// import { Jwt } from "@hapi/jwt";
import { Request, ResponseToolkit, Server } from "hapi";
const Jwt = require('@hapi/jwt')

exports.plugin = {
  name: "auth",
  register: async function (server: Server, options) {
    await server.register(Jwt);

    server.auth.strategy("auth0_jwt", "jwt", {
      keys: {
        uri: "https://platzimaster.us.auth0.com/.well-known/jwks.json",
      },
      verify: {
        aud: "https://platzimaster.us.auth0.com/api/v2/",
        iss: "https://platzimaster.us.auth0.com/",
        sub: false,
      },
      validate: (artifacts, request: Request, h: ResponseToolkit) => {
        console.log(artifacts.decoded.payload);
        return {
          isValid: true,
          // credentials: { user: artifacts.decoded.payload.user }
        };
      },
    });

    server.auth.default("auth0_jwt");
  },
};
