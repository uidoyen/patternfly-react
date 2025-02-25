import { Avatar, AvatarProps } from '@patternfly/react-core';
import React, { Component } from 'react';
import avatarImg from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';

export class AvatarDemo extends Component {
  myAvatarProps: AvatarProps = {
    className: 'MyClassName',
    src: avatarImg,
    alt: 'avatar'
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <Avatar src={this.myAvatarProps.src} alt={this.myAvatarProps.alt} border="dark" />;
  }
}
