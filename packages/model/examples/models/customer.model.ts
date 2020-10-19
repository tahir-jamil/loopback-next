// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/model
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {model, Entity} from '../..';

@model(require('./customer.definition'))
export class Customer extends Entity {}
