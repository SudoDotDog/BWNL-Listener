/**
 * @author WMXPY
 * @namespace Listener
 * @description Declare
 */

export type MessageCreationFunction = () => string;
export type MessageExecuter = string | MessageCreationFunction;

export const parseMessageExecuter = (message?: MessageExecuter): string | undefined => {

    if (typeof message === 'function') {
        return message();
    }
    return message;
};

export type ListenerFunction = () => void;
