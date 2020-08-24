/**
 * @author WMXPY
 * @namespace Listener
 * @description Declare
 * @override Unit Test
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { parseMessageExecuter } from "../../src";

describe('Given [Declare] Helper functions', (): void => {

    const chance: Chance.Chance = new Chance('listener-declare');

    it('should be able to parse message executer', (): void => {

        const message: string = chance.string();

        const result: string | undefined = parseMessageExecuter(message);

        expect(result).to.be.equal(message);
    });

    it('should be able to parse message executer with function', (): void => {

        const message: string = chance.string();
        const messageFunction: () => string = () => message;

        const result: string | undefined = parseMessageExecuter(messageFunction);

        expect(result).to.be.equal(message);
    });
});
