import {exposeAsDecorator} from './helpers';

import typeValidation from './validation/type';
import requiredValidation from './validation/required';
import maxLengthValidation from './validation/maxLength';

export const type = exposeAsDecorator(typeValidation);
export const required = exposeAsDecorator(requiredValidation);
export const maxLength = exposeAsDecorator(maxLengthValidation);
