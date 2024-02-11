    import express from "express";
    import cors from "cors";
    import helmet from "helmet";
    import path from "path";

    const app = express();

    // use origin resource sharing from other domains
    app.use(cors());
    // protects the connections between domains on the internet
    app.use(helmet());

    app.use(express.json());

    //defining a list of endpoints as an object on a website
    const router = express.Router();

    // router.rout("/") is the path to the page in the website, when someone requests the page
    // we have to send them a page the index page

    // req and res, req
    router.route("/").get((req, res) => {
    res.sendFile(path.resolve() + "/index.html");
    });

    // server using the router
    app.use("/", router);



    const HOSTNAME = "localhost";
    const PORT = 3000;

    // listener for a request
    app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
    });