import React, { ReactElement } from 'react';
import { ChecklistStepPropsWithSquad } from '../../lib/checklist';
import { ChecklistStep } from './ChecklistStep';
import { Button, ButtonVariant } from '../buttons/Button';
import { LinkIcon } from '../icons';
import { useSquadInvitation } from '../../hooks/useSquadInvitation';
import { Origin } from '../../lib/analytics';
import { TextField } from '../fields/TextField';

const InviteMemberChecklistStep = ({
  squad,
  ...props
}: ChecklistStepPropsWithSquad): ReactElement => {
  const { invitation, trackAndCopyLink } = useSquadInvitation({
    squad,
    origin: Origin.SquadPage,
  });

  return (
    <ChecklistStep {...props}>
      <TextField
        className={{
          container: 'mb-4',
        }}
        inputId="checklistCopyInviteLink"
        name="checklistCopyInviteLink"
        label={invitation}
        readOnly
      />
      <Button
        icon={<LinkIcon />}
        variant={ButtonVariant.Primary}
        onClick={() => {
          trackAndCopyLink();
        }}
      >
        Invitation link
      </Button>
    </ChecklistStep>
  );
};

export { InviteMemberChecklistStep };
