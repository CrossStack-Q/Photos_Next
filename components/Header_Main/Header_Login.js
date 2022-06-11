import React from "react";
import logow from "../../public/logow.png";
import { signIn } from "next-auth/react";
import { Button, Text } from "@nextui-org/react";

import Image from "next/image";

function Header_Login() {
  return (
    <div className="flex justify-between items-center sticky top-0">
      <div className="flex items-center">
        <div className="relative w-[3rem] h-[3rem] m-4">
          <Image src={logow} layout="fill" objectFit="contain" />
        </div>
        <div className="flex items-center">
          <div className="text-3xl text-gray-700 font-semibold mr-1">Google</div>
          <div className="text-3xl text-gray-700">Photos</div>
        </div>
      </div>
      <div className="m-4">
        <Button onClick={signIn} size="lg">
          <Text
            css={{
              color: "#ffffff",
            }}
            weight="bold"
            h2
          >
            Go to Google Photos
          </Text>
        </Button>
      </div>
    </div>
  );
}

export default Header_Login;
