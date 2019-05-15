import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import styled from "styled-components";
import gql from "graphql-tag";

import colours from "App/styles/export/colours.css";
import Avatar from "App/components/Layout/Avatar";
import Icon from "App/components/Layout/Icon";

const USER_DETAIL_QUERY = gql`
  query getUserDetail($username: String!) {
    getUser(username: $username) {
      username
      bio
    }
  }
`;

const UserDetailWrapper = styled.div`
  width: 33.3%;
  border-left: 1px solid ${colours.mediumGrey};
  > div {
    padding: 1em;
    font-size: 0.9em;
    color: ${colours.darkGrey};
    border-bottom: 1px solid ${colours.mediumGrey};
    &:last-child {
      border-bottom: none;
    }
  }
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
  }
`;

const UserName = styled.div`
  font-size: 0.9rem;
  text-transform: capitalize;
`;

const LastActive = styled.div`
  font-size: 0.75rem;
  color: ${colours.darkGrey};
`;

const UserBio = styled.p`
  padding: 1em;
`;

const UserDetail = ({ username }) => (
  <UserDetailWrapper>
    <User>
      <div>
        <Avatar username={username} size="large" />
        <div>
          <UserName>{username}</UserName>
          <LastActive>
            Active {Math.floor(Math.random() * 3) + 1}m ago
          </LastActive>
        </div>
      </div>
      <Icon name="cog" />
    </User>

    <UserBio>
      <Query query={USER_DETAIL_QUERY} variables={{ username }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return data.getUser.bio;
        }}
      </Query>
    </UserBio>
  </UserDetailWrapper>
);

UserDetail.propTypes = {
  username: PropTypes.string.isRequired
};

export default UserDetail;
