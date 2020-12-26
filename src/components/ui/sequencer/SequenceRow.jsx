import React from 'react';
import utils from '../../../utils';
import SequenceCell from './SequenceCell';

const SequenceRow = ({length, commands, highlightIndex}) => {
  return (
    <tr>
      {utils.range(length).map((x) => {
        const command = commands[x] || undefined;
        return (
          <SequenceCell
            key={x}
            command={command}
            highlighted={x < highlightIndex}
          />
        );
      })}
    </tr>
  );
};

export default SequenceRow;
