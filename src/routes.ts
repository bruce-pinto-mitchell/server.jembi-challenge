import { Request, Response } from "express";
import { Observation } from "./resources/observation";
import { ResourceMockData } from "./data/resourceMock.data";

export class Routes {
    public routes(app): void {
        app.route('/api/create/').post((req: Request, res: Response) => {
            // TODO: Type checking and validation to be done here
            // TODO: In the production solution, we would read values off the req.body[propName] and assign pass them into the Observation object on instantiation.
            const observation = new Observation({});
            const responseCode = observation ? 200 : 500;

            // TODO: The observation object would be stored at this point using whichever storage medium has been selected for use.
            res.status(responseCode).send("Response");
        });

        app.route('/api/search/').get((req: Request, res: Response) => {
            console.log('-----entered search, value: ' + req.query.identifier);
            const observationId = req.query.identifier;
            const observation = ResourceMockData.find((observation: Observation) => observation.identifier === observationId.toString());
            const responseCode = observation ? 200 : 500;

            res.status(responseCode).send({observation});
        });
    }
}
