/* @flow */
import React from 'react';
import Avatar from 'react-md/lib/Avatars';
import Chip from 'react-md/lib/Chips';
import Button from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';
import Link from 'react-router/lib/Link';
import styled from 'styled-components';
import { Icon, Row, Col } from 'boldr-ui';
import { format } from 'date-fns';

import ActivityItemDetail from '../ActivityItemDetail';

const ActivityPanel = styled.div`
  height: 60px;
  box-sizing: border-box;
  padding-top: .5em;
  padding-bottom: .5em;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #D7D8DD;
`;

const DateArea = styled.div`
  margin-right: 10px;
`;
const User = styled.div`
  margin-right: 10px;
`;
const ActivityIcn = styled.div`
  margin-left: 10px;
`;
type Props = {
  created_at: Date,
  owner: Object,
  type: string,
  activity_post: ?string,
  activity_user: ?string,
  activity_attachment: ?string,
  activity_menu_detail: ?string,
  post: Post,
  attachment: Object,
};

const ActivityItem = (props: Props) => {
  const isPostType = props.activity_post !== null;
  const isMemberType = props.activity_user !== null;
  const isAttachmentType = props.activity_attachment !== null;
  const isMenuDetailType = props.activity_menu_detail !== null;

  let ActivityIcon;
  if (isPostType) {
    ActivityIcon = (
      <Link to={ `/admin/posts/editor/${props.post.slug}` }>
        <Icon kind="new-post" color="#02BCD6" />
      </Link>
    );
  }
  if (isMemberType) {
    ActivityIcon = <FontIcon style={ { color: '#02BCD6' } }>person_add</FontIcon>;
  }
  if (isAttachmentType) {
    ActivityIcon = (
      <Link to={ `/admin/filemanager/${props.attachment.id}/editor` }>
        <FontIcon style={ { color: '#02BCD6' } }>insert_drive_file</FontIcon>
      </Link>
    );
  }
  if (isMenuDetailType) {
    ActivityIcon = <FontIcon style={ { color: '#02BCD6' } }>insert_link</FontIcon>;
  }
  return (
    <ActivityPanel>
      <DateArea>
        <Button icon tooltipLabel={ format(props.created_at, 'MM/DD/YYYY') }>access_time</Button>
      </DateArea>
      <User>
        <Chip label={ props.owner.firstName } avatar={ <Avatar src={ props.owner.avatarUrl } role="presentation" /> } />
      </User>
      <ActivityItemDetail atype={ props.type } />
      <ActivityIcn>
        {ActivityIcon}
      </ActivityIcn>
    </ActivityPanel>
  );
};

export default ActivityItem;
