/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import { input } from 'consul-ui/tests/lib/page-object';
import powerSelect from 'consul-ui/components/power-select/pageobject';

export default (scope = '.consul-intention-permission-header-form') => {
  return {
    scope: scope,
    HeaderType: {
      scope: '[data-property="headertype"]',
      ...powerSelect([
        'ExactlyMatching',
        'PrefixedBy',
        'SuffixedBy',
        'Containing',
        'RegEx',
        'IsPresent',
      ]),
    },
    Name: {
      scope: '[data-property="name"] input',
      ...input(),
    },
    Value: {
      scope: '[data-property="value"] input',
      ...input(),
    },
  };
};
