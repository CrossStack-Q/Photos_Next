import {
  Avatar,
  Row,
  Col,
  Text,
  Button,
  Spacer,
  Grid,
  User,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

function UserTwitterCard({ avatarUrl, avatarProps, css, onClick, ...props }) {
  const { data: session } = useSession();
  const [following, setFollowing] = useState(false);
  return (
    <div className="!min-w-[18rem] !max-w-xs m-6">
      <Grid.Container
        className="user-twitter-card__container"
        css={{
          mw: "340px",
          borderRadius: "$lg",
          padding: "$sm",
        }}
      >
        <Row justify="center" align="center">
          <Avatar
            pointer
            size="xl"
            src={session?.user?.image}
            zoomed
            css={{}}
          />
        </Row>
        <Grid.Container className="user-twitter-card__username-container">
          <Row justify="center" align="center">
            <Text
              className="user-twitter-card__text"
              size={20}
              css={{ mt: "$2" }}
              color="#888888"
            >
              {session?.user?.name}
            </Text>
          </Row>
        </Grid.Container>
        <Grid.Container className="user-twitter-card__username-container">
          <Grid xs={20}>
            <Row justify="center" align="center">
              <Text
                className="user-twitter-card__text"
                size={20}
                css={{ mt: "$2" }}
                color="#888888"
              >
                {session?.user?.email}
              </Text>
            </Row>
          </Grid>
        </Grid.Container>

        <div className="flex flex-grow text-lg text-gray-600 mt-2 border border-gray-300 rounded-full justify-center items-center p-1">
          Manage Your Account
        </div>
        <hr />
        <Grid.Container className="user-twitter-card__username-container">
          <Row
            justify="center"
            align="center"
            css={{
              marginTop: "$6",
            }}
          >
            <Button color="error" onClick={signOut}>Sign Out</Button>
          </Row>
        </Grid.Container>
      </Grid.Container>
    </div>
  );
}

export default UserTwitterCard;
