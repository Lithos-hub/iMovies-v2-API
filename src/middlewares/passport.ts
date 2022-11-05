import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";
import User from "../models/user";

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwSecret,
};

export default new Strategy(options, async (payload, done) => {
  try {
    const foundUser = await User.findById(payload.id);
    if (foundUser) {
      return done(null, foundUser);
    }
    return done(null, false);
  } catch (error) {
    console.error(error);
  }
});
