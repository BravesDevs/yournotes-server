import { default as express } from "express";
import { default as cors } from "cors";
import { config } from "./configurations";
import { notesRoutes, userRoutes } from "./routes";

class YourNotesServiceApp {
  private port: number;
  private app: express.Application;

  constructor(port: number) {
    this.port = port;

    this.app = express();

    // Initialization of middlewares.
    this.initializeSystemMiddlewares();

    // Initialization of routes.
    this.initializeSystemRoutes();
  }

  private initializeSystemMiddlewares() {
    this.app.use(
      cors({
        origin: config.API_HOSTS,
        methods: "GET,POST,PUT,DELETE,PATCH",
      })
    );

    this.app.use(
      express.urlencoded({
        extended: true,
        limit: "100KB",
      })
    );
    this.app.use(
      express.json({
        limit: "200KB",
        strict: false,
      })
    );
  }

  private initializeSystemRoutes() {
    this.app.use("/api", notesRoutes);
    this.app.use("/api", userRoutes);
    this.app.use("/", (req, res, next) => {
      res.status(200).send("Email Service is running...");
      next();
    });
  }

  public StartApp() {
    this.app.listen(this.port, () => {
      console.log(
        `${config.APP_NAME} Server is listening on port ${this.port}!`
      );
    });
  }
}

new YourNotesServiceApp(parseInt(config.PORT)).StartApp();
