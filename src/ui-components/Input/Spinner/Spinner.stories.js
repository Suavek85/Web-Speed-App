import React from 'react';
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from "@storybook/addon-knobs";
import Spinner from './Spinner';
import { appStates } from '../../States'


const stories = storiesOf('UI Components', module)

stories.addDecorator(withKnobs)

stories.add('Spinner', () => {
    const groupId = 'Props';
    const statusesKnob = select('Spinner states', appStates, Object.values(appStates)[0], groupId)
    return <Spinner getReportStatus={statusesKnob} />
})