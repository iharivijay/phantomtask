import dotenv from "dotenv";
import passport from "passport";
import strategy from "passport-facebook";
import User from "./models/user";

dotenv.config();

const FacebookStrategy = strategy.Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["id", "emails", "name"],
    },
    async function (accessToken, refreshToken, profile, done) {
      const id = profile.id;
      const name = profile.displayName;
      const email = profile.emails[0].value;
      const user = await User.findOne({ facebookId: id });

      if (!user) {
        const newUser = new User({ facebookId: id, name, email });
        await user.save();
        console.log("Facebook Login Successful");
      }
      done(null, profile);
    }
  )
);
